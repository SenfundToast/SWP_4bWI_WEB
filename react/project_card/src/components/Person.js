import { useEffect, useState } from "react";
import Card from "./Card";

export default function Person(){
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] =useState([]);

useEffect(()=>{
    fetch("https://65d5cb14f6967ba8e3bc959d.mockapi.io/Person").then(
        (res) => res.json().then((data) => {
            setPeople(data);
            setFilteredPeople(data);
        })
    );
},   []);

const filterPeople = (filter) =>{
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
}

    return(
        <div className="p-4">
            <div className="fixed border bg-white w-11/12 h-28 p-8">
                <input className="border p-4" type="text" placeholder="Search" onChange={(el)=>{
                        console.log(el.target.value);
                        filterPeople(el.target.value);
                }}/>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-8 pt-32">
                {filteredPeople.map((person) => {
                    return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle}/>
            })}
            </div>
        </div>
    )
}