import React,{useState} from "react";

export default function Card({id, image, info, name,price, removeTour}){

    const [description, setDescription] = useState(`${info.substring(0, 200)}...`);
    const [readMore, setReadMore] = useState(false);

    const readMorehandeler = ()=>{
        setDescription((!readMore) ? info : `${info.substring(0, 200)}...`);
        setReadMore(!readMore);
    }


    return(
        <div className="card">
            <div className="image">
                <img src={image} alt="" />
            </div>

            <div className="card-details">
                <h4 className="price">₹ {price}</h4>

                <h2 className="tour-name">{name}</h2>

                <div className="info">
                    <p className="description">{description}</p>
                    <span className="read-more" onClick={()=> readMorehandeler()}>{(!readMore)? "Read More":"Show Less"}</span>
                </div>
            </div>


            <button className="btn-remove" onClick={()=> removeTour(id)}>Not interested</button>
        </div>
    );
}