import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
export const ShipDetails = () => {
const {store, actions} = useContext(Context);
const params = useParams()
const navigate = useNavigate()



console.log('params --->', params)

useEffect (()=>{
    actions.getOneStarship(params.uid)
},[]);


    return(
        <div>
        <div className="container d-flex">
            <div>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} alt={store.oneStarship?.properties.name} />
            <h3>{store.oneStarship?.properties.name}</h3>
            <p>{store.oneStarship?.description}</p>
            <div className="container">
                <p> population : {store.oneStarship?.properties.population}</p>
                <p> terrain : {store.oneStarship?.properties.terrain}</p>
                <p> climate : {store.oneStarship?.properties.climate}</p>
                <p> created : {store.oneStarship?.properties.created}</p>
                <p> diameter : {store.oneStarship?.properties.diameter}</p>
            </div>
            </div>
            <div>
            <button onClick={() => navigate('/')}> Go Back</button>
            <button onClick={()=> actions.addDelFav({uid: params.uid, name: store.oneStarship.properties.name})}>Fav</button>
            </div>
        </div>
        </div>
    )
}