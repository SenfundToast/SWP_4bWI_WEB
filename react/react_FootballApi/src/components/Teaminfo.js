import React from 'react'
import { Link } from 'react-router-dom'

export default function Teaminfo(props) {
    return (

        <div className="bg-firstplays max-w-full grid grid-cols-3 items-center text-center text-black mt-5 border-2 border-neutral-900 row-span-4">

            <div className="grid grid-cols-9">
                <div className="col-span-1 ">{props.teamPlace}</div>
                <div className="col-span-1"><img width="35px" src={props.teamIconUrl} alt="team-logo" /></div>
                <div className="col-span-5 hover:text-clifford"><Link to="teaminfos">{props.teamName}</Link></div>
                <div className="col-span-2">{props.teamMatches}</div>

            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1">{props.teamWins}</div>
                <div className="col-span-1">{props.teamDraws}</div>
                <div className="col-span-1">{props.teamLoses}</div>
            </div>

            <div className="grid grid-cols-4">
                <div className="col-span-2">{props.teamGoals}</div>
                <div className="col-span-2">{props.teamPoints}</div>
            </div>
        </div>
    )
}
