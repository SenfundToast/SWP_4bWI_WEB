import React from 'react'

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');



export default function web2() {
  return (
    <div>web2</div>
  )
}

fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data) => {
    let team = data.find((team) => (team.teamInfoId === id));
    console.log(team);
}))

