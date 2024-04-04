import React, { useEffect, useState } from 'react';
import './web1.css';
import { Link } from 'react-router-dom';

export default function Web1() {
    useEffect(() => {
        loadTable();
    }, []);

    function loadTable() {
        fetch("https://api.openligadb.de/getbltable/bl1/2022")
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                insertTable(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    function insertTable(data) {
        const element = document.getElementById("table_1");

        let html = "";

        data.forEach((team, index) => {
            html += `
            <div class="bg-firstplays max-w-full  grid grid-cols-3 items-center text-center text-black mt-5 border-2 border-neutral-900 row-span-4">
                
                <div class="grid grid-cols-9">
                    <div class="col-span-1 ">${index + 1}</div>
                    <div class="col-span-1"><img width="35px" src="${team.teamIconUrl}" alt="team-logo"></div>
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

        if (element) {
            element.innerHTML = html;
        }
    }

    return (
        <div>
            <div className="header">
                <div className="Bundesliga">
                    Bundesliga 1
                </div>
            </div>

            <div className="bg-Bg2">
                <div className="bg-background1 h-[10vh] max-w-screen grid grid-cols-3 items-center text-center text-white">
                    <div className="grid grid-cols-9">
                        <div className="col-span-1"></div>
                        <div className="col-span-1">Logo</div>
                        <div className="col-span-5">Team name</div>
                        <div className="col-span-2">Matches</div>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="col-span-1">W</div>
                        <div className="col-span-1">D</div>
                        <div className="col-span-1">L</div>
                    </div>

                    <div className="grid grid-cols-4">
                        <div className="col-span-2">Goals</div>
                        <div className="col-span-2">Points</div>
                    </div>
                </div>

                <div id="table_1" className="bg-clifford max-w-full h-full items-center text-center mt-5"></div>
            </div>
        </div>
    );
}
