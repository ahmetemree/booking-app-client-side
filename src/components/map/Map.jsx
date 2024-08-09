import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/Pin';

function Map({ items }) {
  console.log(items);
  return (
    items && items.length > 0 ? (
      <MapContainer 
        center={
          
        [items[0].latitude, items[0].longitude] 
          
        } 
        zoom={11} 
        scrollWheelZoom={false} 
        className='map'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          items.map(item => (
            <Pin item={item} key={item.id} />
          ))
        }
      </MapContainer>
    ) : "Bulunamadı"
  );
}

export default Map;
