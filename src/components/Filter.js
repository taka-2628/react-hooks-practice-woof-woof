function Filter( { isfilterOn, onOnOffToggle } ){

  return <div id="filter-div">
    <button id="good-dog-filter" onClick={()=>onOnOffToggle(!isfilterOn)}>Filter good dogs: {isfilterOn ? "ON" : "OFF"}</button>
  </div>
}

export default Filter;