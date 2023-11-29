function loadTable() {
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
        result.json().then((result) => {
            console.log(result)
            insertTable(result);
        });
    });
};


function insertTable(data) {
    const element = document.getElementById("table_1");

    let html = "";

    data.forEach((team, index) => {
        html += `
        <div class="bg-firstplays max-w-full  grid grid-cols-3 items-center text-center text-white mt-5 border-2 border-neutral-900 row-span-4">
            
            <div class="grid grid-cols-9">
                <div class="col-span-1 ">${index +1}</div>
                <div class="col-span-1"><img width="35px" src="${team.teamIconUrl}"></div>
                <a class="col-span-5 hover:text-clifford" href="footballInfo.html">${team.teamName}</a>
                <div class="col-span-2">${team.matches}</div>
            </div>

            <div class="grid grid-cols-3">
                <div class="col-span-1">${team.won}</div>
                <div class="col-span-1">${team.draw}</div>
                <div class="col-span-1">${team.lost}</div>
            </div>

            <div class="grid grid-cols-4">
                <div class="col-span-2">${team.goals}</div>
                <div class="col-span-2">${team.points}</div>
            </div>

        </div>`;
    });

    element.innerHTML = html;

    //strg + d um gewisse sachen zu markieren
    //strg + k + c

    //     
    //  <div class="grid grid-cols-9">
    //     <div class="col-span-1 ">num</div>
    //     <div class="col-span-1">logo</div>
    //     <div class="col-span-5">Team name</div>
    //     <div class="col-span-2">Matches</div>
    //  </div>

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
loadTable()