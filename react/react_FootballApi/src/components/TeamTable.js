import React, { useEffect, useState } from 'react';
import Teaminfo from './Teaminfo';

export default function TeamTable() {
    const [teamsData, setTeamData] = useState([]);

    const fetchTeamData = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        fetch("https://api.openligadb.de/getbltable/bl1/2022")
            .then((res) => res.json())
            .then((data) => {
                const foundTeam = data.find((team) => team.teamInfoId === id);
                setTeamData(foundTeam);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    };

    useEffect(() => {
        fetchTeamData();
    }, []);

    return (
        <div>{
            teamsData.map((element, index) =>
                <Teaminfo teamPlace={index + 1} teamName={element.teamName} teamIconUrl={element.teamIconUrl} teamPoints={element.points}
                    teamMatches={element.matches} teamGoals={element.goals} teamGoalsConceded={element.opponentGoals}
                    teamWins={element.won} teamDraws={element.draw} teamLoses={element.lost} />)
        }

        </div>
    );

}
