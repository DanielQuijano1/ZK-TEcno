import Card from "./componentes/Card"
import NavBar from './componentes/NavBar/NavBar';
import Flex from './componentes/Flex/Flex';

function App() {

  return (
    <div>
      <NavBar />
      <Flex>
        <Card img="/imagenes/cable usb imantado v8.jpg" title="Cable USB" precio="700" detalle="Cable Imantado USB V8 " />
        <Card img="/imagenes/cable usb STARK type C.jpg" title="Cable USB" precio="1000" detalle="Cable USB STARK TIPO C" />
        <Card img="/imagenes/auriculares STARK S5830 a.webp" title="Auriculares" precio="1200" detalle="Auriculares STARK S5830" />
        <Card img="/imagenes/auriculares stark cj-11.webp" title="Auriculares" precio="1600" detalle="Auriculares STARK CJ-11" />
      </Flex>
    </div >
  );
}

export default App;
