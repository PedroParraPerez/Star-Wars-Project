const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			planets:[],
			planetshome:[],
			people:[],
			peoplehome:[],
			starships:[],
			starshipshome:[],
      peopledetails:[],
			starshipsDetails:[]
		},




	

			
		},
		actions: {
		

				/**	fetch().then().then(data => setStore({ "foo": data.bar }))*/
				
// ----------------------------------- DATA DE LOS PLANETAS -----------------------------------	
			dataPlanets: () => {

				fetch(
					"https://www.swapi.tech/api/planets/"
					).then(response => {
					console.log("aqui esta response de planets", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading planets")
				}).then(
					responseAsjson => {
						// console.log("aqui esta responseAsjson de planets", responseAsjson)
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
					// console.log("aqui esta response de people", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading people")
				}).then(
					responseAsjson => {
						// console.log("aqui esta responseAsjson de people", responseAsjson)
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
					// console.log("aqui esta response de starships", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading starships")
				}).then(
					responseAsjson => {
						// console.log("aqui esta responseAsjson de starships", responseAsjson)
						setStore({starships:responseAsjson.results})
						setStore({starshipshome:responseAsjson.results.filter((e) => e.uid < 10)})
					}
				).catch(errorstarships => {
					console.error(errorstarships.message)
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
						console.log("aqui esta getby ide starships", responseAsjson.result.properties)
						setStore({starshipsDetails:[responseAsjson.result.properties]})
						console.log("details enflux",getStore().starshipsDetails)
					}).catch(errorStarshipsDetails=>{
						console.error (errorStarshipsDetails.message)
					})
			},



//----------------------------------------GET PEOPLE BY UID------------------------------------------------------
			getPeopleById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/people/`.concat(uid)
				).then(response => {
					console.log("aqui esta response de getPeopleByUid", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading getPeopleByUid")
				}).then(responseAsjson=>{
					console.log("aqui esta getby ide people", responseAsjson.result.properties)
					setStore({peopledetails:[responseAsjson.result.properties]})
					console.log("details enflux",getStore().peopledetails)
				}
				).catch(errorGetPeopleById => {
					console.error(errorGetPeopleById.message)
				})
			},



			

		}
		};
};



export default getState;
