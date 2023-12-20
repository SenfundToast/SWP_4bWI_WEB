const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data) => {
    let team = data.find((team) => (team.teamInfoId == id));
    console.log(team);
}))


{
    /* <div class="bg-Bg2 h-[10vh] max-w-screen grid grid-cols-3 items-center text-center text-white ">
                <div class="grid grid-cols-5">
                    <div class="col-span-1"></div>
                    <div class="col-span-2 ">LOGO</div>
                    <div class="col-span-2"></div>
                </div>

                <div class="grid grid-cols-6">
                    <div class="col-span-6 text-3xl">FC Bayern Münschen</div>

                </div>

                <div class="grid grid-cols-5">
                    <div class="col-span-2"></div>
                    <div class="col-span-2">LOGO</div>
                    <div class="col-span-1"></div>
                </div>
            </div> */
}