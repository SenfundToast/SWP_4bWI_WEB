import React, { useEffect, useState } from 'react';

export default function Web2() {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        fetchTeam();
    }, []);

    const fetchTeam = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then((res) => res.json())
            .then((data) => {
                const foundTeam = data.find((team) => team.teamInfoId === id);
                setTeam(foundTeam);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    };

    return (
        <div className="bg-Bg2 h-screen">
            <div className="bg-Bg2 h-[10vh] max-w-screen grid grid-cols-3 items-center text-center text-white ">
                <div className="grid grid-cols-5">
                    <div className="col-span-1"></div>
                    <div className="col-span-2">LOGO</div>
                    <div className="col-span-2"></div>
                </div>
                <div className="grid grid-cols-6">
                    <div className="col-span-6 text-3xl">{team ? team.teamName : ''}</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-2"></div>
                    <div className="col-span-2">LOGO</div>
                    <div className="col-span-1"></div>
                </div>
            </div>
            <a className="bg-yellow w-2/4 h-28 left-1/4 bottom-10  border-yellow rounded-xl absolute flex justify-center items-center text-black text-4xl font-hind" href="web.html">View Full Table</a>
        </div>
    );
}
