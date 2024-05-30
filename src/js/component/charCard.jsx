import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({uid, name}) => {
    const {actions} =useContext(Context)
    return(

    <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={name} />
        <h2>{name}</h2>
        <div className="container d-flex">
            <button className="mx-3 btn btn-primary">
                <Link className="text-black" to={`/details/${uid}`}> 
                Learn more
                </Link>
                </button>
            <button className={`mx-3 btn btn-warning`}
            onClick={()=>actions.addDelFav({name: name, uid: uid})}>
                Fav</button>
        </div>

    </div>
    )
}