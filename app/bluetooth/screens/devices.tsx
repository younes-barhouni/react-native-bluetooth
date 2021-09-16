import React from 'react';
import BluetoothList from '../containers/bluetooth-list';


const DevicesScreen = ({ navigation, route }: any) => {
      
  return (
    <>
        <BluetoothList></BluetoothList>
    </>
  );
}

export default DevicesScreen;