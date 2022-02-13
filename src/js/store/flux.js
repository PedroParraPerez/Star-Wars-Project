const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			planets:[],
			planetshome:[],
			people:[],
			peoplehome:[],
			starships:[],
			starshipshome:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

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
						console.log("aqui esta responseAsjson de planets", responseAsjson)
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
					console.log("aqui esta response de people", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading people")
				}).then(
					responseAsjson => {
						console.log("aqui esta responseAsjson de people", responseAsjson)
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
					console.log("aqui esta response de starships", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading starships")
				}).then(
					responseAsjson => {
						console.log("aqui esta responseAsjson de starships", responseAsjson)
						setStore({starships:responseAsjson.results})
						setStore({starshipshome:responseAsjson.results.filter((e) => e.uid < 10)})
					}
				).catch(errorstarships => {
					console.error(errorstarships.message)
				})
			},

//----------------------------------------GET PEOPLE BY UID------------------------------------------------------
			getPeopleById: (uid) => {
				fetch(
					`https://www.swapi.tech/api/people/${uid}`
				).then(response => {
					console.log("aqui esta response de getPeopleByUid", response)
					if(response.ok){
						return response.json()
					}
					throw new Error ("Fail loading getPeopleByUid")
				}).then(
					responseAsjson => {
						console.log("aqui esta responseAsjson de getPeopleByUid", responseAsjson)
						setStore({getPeopleByUid:responseAsjson.results})
					}
				).catch(errorgetPeopleByUid => {
					console.error(errorgetPeopleByUid.message)
				})
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
