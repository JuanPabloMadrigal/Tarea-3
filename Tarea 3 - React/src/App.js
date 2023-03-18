import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const [temperatureValue, setTemperatureValue] = useState(10);
  
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 

function Incrementar(){
  if (temperatureValue < 30){
    Logica(1);
    setTemperatureValue(temperatureValue + 1);
  }
};

function Decrementar(){
  if (temperatureValue > 0){
    Logica(-1);
    setTemperatureValue(temperatureValue - 1);
  }
};

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

function Logica(n){
  if (temperatureValue + n >= 20){
    setTemperatureColor("hot");
  } else {
    setTemperatureColor("cold");
  }
}

// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

// Regla anotada en las funciones de incremento y decremento.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => Incrementar()}>+</button>
        <button onClick={() => Decrementar()}>-</button>
      </div>
    </div>
  );
}

export default App;
