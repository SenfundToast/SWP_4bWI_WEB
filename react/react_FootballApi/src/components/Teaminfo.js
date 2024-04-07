import React from 'react'
import { Link } from 'react-router-dom'

export default function Teaminfo(props) {
    return (
        <div className="bg-firstplays max-w-full grid grid-cols-3 items-center text-center text-black mt-5 border-2 border-neutral-900 row-span-4">

            <div className="grid grid-cols-9">
                <div className="col-span-1 ">{props.teamPlace}</div>
                <div className="col-span-1"><img width="35px" src={props.teamIconUrl} alt="team-logo" /></div>
                <div className="col-span-5 hover:text-clifford"><Link to="teaminfos">{props.teamName}</Link></div>
                <div className="col-span-2">{props.matches}</div>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1">{props.won}</div>
                <div className="col-span-1">{props.draw}</div>
                <div className="col-span-1">{props.lost}</div>
            </div>

            <div className="grid grid-cols-4">
                <div className="col-span-2">{props.goals}</div>
                <div className="col-span-2">{props.points}</div>
            </div>
        </div>
    )
}
