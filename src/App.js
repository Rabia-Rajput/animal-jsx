import './App.css';

import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "horse", "dog", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const [animals, setAnimals] = useState([]);
  // const [count,setCount]= useState(0); // Array destructuring

  const HandleClick = () => {
    // setCount(count + 1);
    //     console.log('button was clicked');
    setAnimals([...animals, getRandomAnimal()])
  };
  const renderedAnimals = animals.map((animal,index)=>{

    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className='app'>
      <button onClick={HandleClick}>Add Animal</button>
      <div>{renderedAnimals} </div>
      {/* <button onClick={() => console.log("button was clicked")}> */}
      {/* Add Animal
      </button> */}
      {/* <div>Number of Animals: {count} </div> */}
    </div>
  );
}

export default App;
