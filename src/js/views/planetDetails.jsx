import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
export const PlanetDetails = () => {
const {store, actions} = useContext(Context);
const params = useParams()
const navigate = useNavigate()



console.log('params --->', params)

useEffect (()=>{
    actions.getOnePlanet(params.uid)
},[]);


    return(
        <div>
        <div className="container d-flex">
            <div>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} alt={store.onePlanet?.properties.name} />
            <h3>{store.onePlanet?.properties.name}</h3>
            <p>{store.onePlanet?.description}</p>
            <div className="container">
                <p> population : {store.onePlanet?.properties.population}</p>
                <p> terrain : {store.onePlanet?.properties.terrain}</p>
                <p> climate : {store.onePlanet?.properties.climate}</p>
                <p> created : {store.onePlanet?.properties.created}</p>
                <p> diameter : {store.onePlanet?.properties.diameter}</p>
            </div>
            </div>
            <div>
            <button onClick={() => navigate('/')}> Go Back</button>
            <button onClick={()=> actions.addDelFav({uid: params.uid, name: store.onePlanet.properties.name})}>Fav</button>
            </div>
        </div>
        </div>
    )
}