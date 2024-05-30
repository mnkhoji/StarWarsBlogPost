import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/charCard.jsx";
import { Pcard } from "../component/planetCard.jsx";
import { ShipCard } from "../component/starshipCard.jsx";


export const Home = () => {

	const {store} = useContext(Context);

	return(
	<div className="text-center mt-5">
		<h2>Characters</h2>
		<div className="d-flex mt-5">
		{store.people?.map(el => <Card key={el.uid} uid={el.uid} name={el.name}/>)}
		</div>
		<h2>Planets</h2>
		<div className="d-flex mt-5">
			{store.planets?.map(el => <Pcard key={el.uid} uid={el.uid} name={el.name}/>)}
		</div>
		<h2>Starships</h2>
		<div className="d-flex mt-5">
			{store.starships?.map(el => <ShipCard key={el.uid} uid={el.uid} name={el.name}/>)}
		</div>
	</div>
);}
