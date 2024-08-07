import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function ListPage() {
const data = useLoaderData()

console.log(data.postResponse._data);
const{setLastData} = useContext(AuthContext)
const{lastData} = useContext(AuthContext)
debugger
if(data.postResponse._data!=null){
  setLastData(data)
}


  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        <Suspense fallback = {<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse)=> postResponse.data.map(post=>(
                <Card key={post.id} item={post}/>
              ))}
          </Await>
        </Suspense>
      </div>
    </div>
    <div className="mapContainer">
      
  {data.postResponse ? (
    <Suspense fallback={<p>Loading...</p>}>
      <Await
        resolve={data.postResponse}
        errorElement={<p>Error loading posts!</p>}
      >
        {(postResponse) => <Map items={postResponse?.data} />}
      </Await>
    </Suspense>
  ) : (
    <Filter />
  )}
  <Suspense fallback={<p>Loading...</p>}>
    <Await
      resolve={lastData.postResponse}
      errorElement={<p>Error loading posts!</p>}
    >
      {(postResponse) =>
        postResponse.lastData.map((post) => <Card key={post.id} item={post} />)
      }
    </Await>
  </Suspense>
</div>
  </div>;
}

export default ListPage;
