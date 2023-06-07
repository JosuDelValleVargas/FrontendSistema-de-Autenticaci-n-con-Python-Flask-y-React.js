import axios from "axios";

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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login:async (userEmail,userPassword) => {
				console.log(userEmail,userPassword);
				try{
					
					let response = await axios.post ("https://josudelvallevargas-supreme-orbit-7g7rx96qv4qhgq6-3000.preview.app.github.dev/login",{
						email:userEmail,
						password:userPassword
					})
					console.log(response);
					if (response.status ===200){
						localStorage.setItem("myToken", response.data.access_token)
						return true;
					}

					return true;
				}catch(err){
					console.log(err);
					if(err.response.status === 401){
					return false;
					}
				}
			},

			logout:()=>{
				let token = localStorage.getItem("myToken")
				console.log(token);
				if (token === null) return false
				localStorage.removeItem("myToken")
				return true
				
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
