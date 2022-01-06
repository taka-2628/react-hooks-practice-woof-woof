function DogDetail( { selectedDog, onGoodBadToggle } ){
  
  
  function handleGoodBadClick(){
    const id = selectedDog.id;
    const isGood = !selectedDog.isGoodDog;
    onGoodBadToggle(id, isGood);
  }
  
  return(
    <>
      <img src={selectedDog.image} alt={selectedDog.name}></img>
      <h2>{selectedDog.name}</h2>
      <button onClick={handleGoodBadClick}>{selectedDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
    </>
  )
}

export default DogDetail;