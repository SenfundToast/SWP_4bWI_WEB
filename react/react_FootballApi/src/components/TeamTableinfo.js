import React from 'react'
import { Link } from 'react-router-dom'

export default function Teaminfo(props) {
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
            <Link to="/"><div className="bg-yellow w-2/4 h-28 left-1/4 bottom-10  border-yellow rounded-xl absolute flex justify-center items-center text-black text-4xl font-hind">View Full MatchTable
            </div></Link>
        </div>

    )
}
