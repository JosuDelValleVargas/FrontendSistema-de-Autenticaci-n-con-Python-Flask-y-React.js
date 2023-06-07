import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



export const FormLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {store, actions}=useContext(Context)
    let navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        let isLogged = await actions.login(email,password)
        console.log(email,password)
        if(isLogged){
            navigate("/")
        }
        
    }


    return (
        <form className=" container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};
