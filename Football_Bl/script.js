function loadTable() {
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
        result.json().then((result) => {
            insertTable(result);
        });
    });
};


function insertTable(data) {
    const element = document.getElementById("table_1");

    let output = '';
    array.forEach(team => {
        html += `<div class="grid grid-cols-9">
        <div class="col-span-1"> ${team.draw} </div>
        <div class="col-span-1">logo</div>
        </div>`;
    });

    element.innerHTML = output
        //strg + d um gewisse sachen zu markieren
        //strg + k + c

    //     
    //     <div class="col-span-5 hover:text-clifford">Team name</div>
    //     <div class="col-span-2">Matches</div>
    // </div>

    // <div class="grid grid-cols-3">
    //     <div class="col-span-1">W</div>
    //     <div class="col-span-1">D</div>
    //     <div class="col-span-1">L</div>
    // </div>

    // <div class="grid grid-cols-4">
    //     <div class="col-span-2">Goals</div>
    //     <div class="col-span-2">Points</div>
    // </div>
}

const data = loadTable();