import { useEffect, useState } from "react";
import Card from "./Card";

export default function Person(){
    const [people, setPeople] = useState([]);

useEffect(()=>{
    fetch("https://65d5cb14f6967ba8e3bc959d.mockapi.io/Person").then(
        (res) => res.json().then((data) => {
            setPeople(data);
        })
    );
},   []);


    return(
        <div>
            <h1 className=""></h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {people.map(person => {
                return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle}/>
            })}
            </div>
        </div>
    )
}