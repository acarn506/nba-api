import { useState } from "react"
import ArrowPostion from "../../components/ArrowPosition"

export default function Players({ players }) {
    const [direction, setDirection] = useState()

    console.log('PLAYERS DATA', players)

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc')
        } else if (direction === 'desc') {
            setDirection('asc')
        } else {
            setDirection('desc')
        }
    }

    let filteredPlayers = players.filter( player => {
       return player.height.feets !== null
    })

    filteredPlayers = orderBy(filteredPlayers, direction)

    return (
        <div className="bg-theme-blue-light">
            <div className=" p-6">
                <div className="flex p-5 text-center items-center">
                    <div className="flex-1">
                    <button className="font-bold shadow-md rounded-md py-2 px-4" onClick={() => switchDirection()}>
                        Name
                        <ArrowPostion direction={direction} />
                    </button>
                    </div>
                    <div className="flex-1 font-bold">Height</div>
                    <div className="flex-1 font-bold">Weight</div>
                    <div className="flex-1 font-bold">NBA Start</div>
                    <div className="flex-1 font-bold">College</div>
                </div>
                {
                    filteredPlayers.map( (player, i) => (
                        <div key={i} className='p-5 border-2 border-theme-grey-dark rounded-md text-black flex text-center bg-theme-grey-light my-1'>
                            <h1 className="flex-1">{player.firstname + " " + player.lastname}</h1>
                            <div className="flex-1">{player.height.feets + "." + player.height.inches}</div>
                            <div className="flex-1">{player.weight.pounds} lbs</div>
                            <div className="flex-1">{player.nba.start}</div>
                            <div className="flex-1">{player.college}</div>
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}


export async function getServerSideProps({ params }) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NBA_API_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }; 

    // Fetch team from external API
    const URL = `https://api-nba-v1.p.rapidapi.com/players?team=${params.id}&season=2021`
    
    const response = await fetch(URL, options)
    const data = await response.json()
    let players = data.response
    
  
    // Pass team to the page via props
    return { props: { players} }
}


export const orderBy = (elements, direction) => {
    if (direction === 'asc') {
        return [...elements].sort( (a, b) => (a.firstname > b.firstname ? 1 : -1))
    }

    if (direction === 'desc') {
        return [...elements].sort( (a, b) => (a.firstname > b.firstname ? -1 : 1))
    }

    return elements
}
