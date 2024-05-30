import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
export const Details = () => {
const {store, actions} = useContext(Context);
const params = useParams()
const navigate = useNavigate()



console.log('params --->', params)

useEffect (()=>{
    actions.getCharacter(params.uid)
},[]);


    return(
        <div>
        <div className="container d-flex">
            <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} alt={store.character?.properties.name} />
            <h3>{store.character?.properties.name}</h3>
            <p>{store.character?.description}</p>
            <div className="container">
                <p> birth year : {store.character?.properties.birth_year}</p>
                <p> hair color : {store.character?.properties.hair_color}</p>
                <p> height : {store.character?.properties.height}</p>
                <p> homeworld : {store.character?.properties.homeworld}</p>
                <p> gender : {store.character?.properties.gender}</p>
            </div>
            </div>
            <div>
            <button onClick={() => navigate('/')}> Go Back</button>
            <button onClick={()=> actions.addDelFav({uid: params.uid, name: store.character.properties.name})}>Fav</button>
            </div>
        </div>
        </div>
    )
}