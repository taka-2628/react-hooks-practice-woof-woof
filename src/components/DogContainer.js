import { useState, useEffect } from "react";
import DogDetail from "./DogDetail";
import DogBar from "./DogBar";
import Filter from "./Filter";

function DogContainer(){
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [isfilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((data) => setDogs(data))
  }, [])

  function handleShowDetail(dogSelected){
    setSelectedDog(dogSelected)
  }

  function handleGoodBadToggle(id, updatedIsGood){
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({isGoodDog: updatedIsGood})
    })
      .then((res) => res.json())
      .then((updatedDog) => {
        console.log(updatedDog)
        setSelectedDog(updatedDog)
        setDogs(dogs.map((dog) => {
          if(dog.id === updatedDog.id){
            return updatedDog
          } else {
            return dog
          }
        }))
      })
  }

  function handleUpdateFilter(updatedOnOff){
    setIsFilterOn(updatedOnOff);
  }

  const filteredDogs = isfilterOn ? dogs.filter((dog) => dog.isGoodDog) : dogs;

  return (
    <div>
      <Filter isfilterOn={isfilterOn} onOnOffToggle={handleUpdateFilter}/>
      <DogBar dogs={filteredDogs} onShowDetail={handleShowDetail}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          { selectedDog === null ? null : <DogDetail selectedDog={selectedDog} onGoodBadToggle={handleGoodBadToggle}/>}
        </div>
      </div>
      </div>
  )
}

export default DogContainer;