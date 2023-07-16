import Card from "./Card";

export default function Tours({tours, removeTour}){

    // console.log(spot)
    return(
        <div className="Tours">

            <div>
                <h1>Plan Tour</h1>
            </div>

            <div className="cards">{
                tours.map((tour) =><Card {...tour} removeTour = {removeTour}/>)
                }
            </div>
        </div>
    );
}