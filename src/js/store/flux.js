const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			planets:[],
			planetshome:[],
			people:[],
			peoplehome:[],
			starships:[],
			starshipshome:[],
			planetdetails:[],
      		peopledetails:[],
			starshipsDetails:[],
			fav:[],

		},




	

			
	
		actions: {

				/**	fetch().then().then(data => setStore({ "foo": data.bar }))*/
			favorites: (name) => {
					//  setStore({ ...getStore().fav, fav: name })
					 setStore({ fav: [name] })
					
					
				},
// ----------------------------------- DATA DE LOS PLANETAS -----------------------------------	
			dataPlanets: () => {

				fetch(
					"https://www.swapi.tech/api/planets/"
					).then(response => {
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading planets")
				}).then(
					responseAsjson => {
						setStore({planets:responseAsjson.results})
						setStore({planetshome:responseAsjson.results.filter((e) => e.uid < 5)})
					}
				).catch(errorplanets => {
					console.error(errorplanets.message)
				})
			},
// -----------------------DATA DE LOS PERSONAJES----------------------------------------
			dataPeople: () => {
				fetch(
					"https://www.swapi.tech/api/people/"
				).then(response => {
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading people")
				}).then(
					responseAsjson => {
						setStore({people:responseAsjson.results})
						setStore({peoplehome:responseAsjson.results.filter((e) => e.uid < 5)})
					}
				).catch(errorpeople=>{
					console.error(errorpeople.message)
				})
			},
// ---------------------------------------DATA  DE LAS NAVES ---------------------------------------------------

			dataStarships: () => {
				fetch(
					"https://www.swapi.tech/api/starships/"
				).then(response => {
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading starships")
				}).then(
					responseAsjson => {
						setStore({starships:responseAsjson.results})
						setStore({starshipshome:responseAsjson.results.filter((e) => e.uid < 10)})
					}
				).catch(errorstarships => {
					console.error(errorstarships.message)
				})
			},

		

			getPlanetsById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/planets/`.concat(uid)
				).then(response => {
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading getPlanetByuid")
				}).then(responseAsjson=>{

					setStore({planetdetails:[responseAsjson.result.properties]})
				}
				).catch(errorGetPlanetById => {
					console.error(errorGetPlanetById.message)
				})
			},

			getStarshipsById: (uid) => {
				
					fetch("https://www.swapi.tech/api/starships/"+uid
					).then(response=>{
						if(response.ok){
							return response.json()
						}
						throw new Error ("Fail loading starships")
					}).then(responseAsjson=>{
						setStore({starshipsDetails:[responseAsjson.result.properties]})
					}).catch(errorStarshipsDetails=>{
						console.error (errorStarshipsDetails.message)
					})
			},



//----------------------------------------GET PEOPLE BY UID------------------------------------------------------
			getPeopleById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/people/`.concat(uid)
				).then(response => {
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading getPeopleByUid")
				}).then(responseAsjson=>{
					setStore({peopledetails:[responseAsjson.result.properties]})
				}
				).catch(errorGetPeopleById => {
					console.error(errorGetPeopleById.message)
				})
			},
		}
		};
};



export default getState;

