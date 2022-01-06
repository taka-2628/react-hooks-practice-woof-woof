function DogBar( { dogs, onShowDetail }){

  return <div id="dog-bar">
    {dogs.map((dog) => <span key={dog.id} onClick={() => onShowDetail(dog)}>{dog.name}</span>)}
  </div>
}

export default DogBar;