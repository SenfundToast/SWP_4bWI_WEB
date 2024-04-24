import React, { useEffect, useState } from 'react';
import './web1.css';
import Teaminfo from './Teaminfo';



export default function MatchTable() {
    const [teamsData, setTeamsData] = useState([]);

    function loadTable() {
        fetch("https://api.openligadb.de/getbltable/bl1/2022")
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setTeamsData(data);
                console.log(data)
            })

            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        loadTable();
    }, []);




    return (


        <div>

            <div>
                <div className="header">
                    <div className="Bundesliga overflow-hidden">
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

                    {teamsData.map((element, index) =>
                        <Teaminfo teamPlace={index + 1} teamName={element.teamName} teamIconUrl={element.teamIconUrl} teamPoints={element.points}
                            teamMatches={element.matches} teamGoals={element.goals} teamGoalsConceded={element.opponentGoals}
                            teamWins={element.won} teamDraws={element.draw} teamLoses={element.lost} />)}

                    <div id="table_1" className="bg-clifford max-w-full h-full items-center text-center mt-5"></div>
                </div>
            </div>

        </div>


    );
}
