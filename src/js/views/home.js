import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";


export const Home = () => (
	<div className="px-3 mt-5">
          <h2 style= {{color: "red"}}>Characters</h2>
		  <div className="">
          <Card name="nombre"/>
		  </div>
	</div>
);
