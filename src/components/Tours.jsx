import Card from "./Card";

export default function Tours({tours, removeTour}){

    return(
        <div className="Tours">

            <div>
                <h1>Plan Tour</h1>
            </div>

            <div className="cards">{
                tours.map((tour, key) =><Card key = {key} {...tour} removeTour = {removeTour}/>)
                }
            </div>
        </div>
    );
}