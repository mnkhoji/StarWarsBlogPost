const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addDelFav: (fav) =>{
				let exists = getStore().favorites.filter(el => el.name === fav.name)
				if(exists.length===0){
				setStore({favorites: [...getStore().favorites,fav]})
				} else {
					setStore({favorites: getStore().favorites.filter(el => el.name !== fav.name)})
				}
			
			},
			getCharacter: async (uid) => {
				try { 
					const resp = await fetch('https://www.swapi.tech/api/people/'+uid);
					const data = await resp.json();
					console.log('character data ---->' , data)
					setStore ({character: data.result})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},
			
			getPeople: async () => {
				try { 
					const resp = await fetch(`https://www.swapi.tech/api/people/`);
					const data = await resp.json();
					setStore ({people: data.results})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},

			getOnePlanet: async (uid) => {
				try { 
					const resp = await fetch('https://www.swapi.tech/api/planets/'+uid);
					const data = await resp.json();
					setStore ({onePlanet: data.result})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},

			getPlanets: async () => {
				try { 
					const resp = await fetch(`https://www.swapi.tech/api/planets/`);
					const data = await resp.json();
					setStore ({planets: data.results})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},


			getOneStarship: async (uid) => {
				try { 
					const resp = await fetch('https://www.swapi.tech/api/starships/'+uid);
					const data = await resp.json();
					setStore ({oneStarship: data.result})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},

			getStarships: async () => {
				try { 
					const resp = await fetch(`https://www.swapi.tech/api/starships/`);
					const data = await resp.json();
					setStore ({starships: data.results})
				} catch ( error ) {
					console.log('there was an error', error)
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
