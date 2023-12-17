import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './LeafletMap.css';
import React from 'react';

const LeafletMap: React.FC = () => {
  // const center = [51.505, -0.09];
    return (
      <MapContainer center={[51.505, -0.09]} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            This is a popup.
          </Popup>
        </Marker>
      </MapContainer>
    );
};

export default LeafletMap;

