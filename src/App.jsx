import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

export default function App() {

  const [tours, setTours] = useState(data);

  const removeTour = (id)=>{
    setTours(tours.filter(tour => tour.id !== id))
  }

  const refreshHandeler = () =>{
    setTours(data);
  }

  if(!tours.length){
    return(
      <div className="refresh-Container">
          <div>
            <h4 className="refresh-heading">No Tours Left</h4>
            <button className="btn-refresh" onClick={refreshHandeler}>Refresh</button>
          </div>
      </div>
  );
  }

  return(
    <div className="App">

      <Tours tours = {tours} removeTour={removeTour}/>
      
    </div>
  );
};

