import { Notification, rem } from '@mantine/core';
import React from 'react';

function Info() {


  return (
    <>
      <Notification  color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification  color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}

export default Info