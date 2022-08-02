import Image from "next/image"
import { orderBy } from "../util/helperfunctions"
import ArrowPostion from "./ArrowPosition"
import { useState } from "react"
import Link from "next/link"

export default function TeamsTable({ teams }) {
    const [direction, setDirection] = useState()
    
    const orderedTeams = orderBy(teams, direction)

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc')
        } else if (direction === 'desc') {
            setDirection('asc')
        } else {
            setDirection('desc')
        }
    }
    
    return (
        <div className="mx-5">
            <div className="flex p-5 text-center items-center">
                <div className="flex-1 text-left">
                <button className="flex font-bold shadow-md rounded-md py-2 px-4" onClick={ () => switchDirection()}>
                    Name
                    <ArrowPostion direction={direction} />
                </button>
                </div>
                <div className="flex-1 font-bold">City</div>
                <div className="flex-1 font-bold">Abbreviation</div>
                <div className="w-16 h-16"></div>
                <div className="flex-1 font-bold">Team & Player Info</div>
            </div>
            { orderedTeams.length > 0 ? orderedTeams.map((team, i) => (
                    <div  key={i} className='flex p-5 text-center bg-theme-grey-light rounded-md mb-4 items-center ease-in-out duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer'>
                        <div className="flex-1 text-left font-bold text-lg text-theme-blue-dark">{team.name}</div>
                        <div className="flex-1 ">{team.city}</div>
                        <div className="flex-1 ">{team.code}</div>
                        <img
                            src={team.logo}
                            alt="Team Logo"
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col flex-1 gap-3 items-center">
                            <Link  className='' href={`team/${team.id}`}>
                                <button className="w-32 font-bold text-white shadow-md rounded-md py-2 px-3 bg-theme-blue-medium hover:bg-theme-blue-light">Team</button>
                            </Link>
                            <Link href={`players/${team.id}`}>
                                <button className="w-32 font-bold text-white shadow-md rounded-md py-2 px-3 bg-theme-blue-medium hover:bg-theme-blue-light">Players</button>
                            </Link>
                        </div>
                    </div>
                
                
            )) : <div className='text-center text-xl m-10 font-bold text-red-600'>Search Not Found</div>
            }
        </div>
    )
}

