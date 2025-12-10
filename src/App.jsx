import s from './App.module.css'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const position = [-25.5931273, -49.3320878]; // só lat e lng!

  return (
    <div className={s.wrapAll}>
      <h1>Mapa do Leaflet</h1>

      <MapContainer 
        style={{ width: "100%", height: "90vh" }} 
        center={position} 
        zoom={17} 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href="https://www.google.com.br/maps/@-25.5931273,-49.3320878,20.21z"
            >
              Ir para o Google Maps
            </a>
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}

export default App;
