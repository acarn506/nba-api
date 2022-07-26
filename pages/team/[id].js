import { useState, useEffect, useRef } from 'react'
import Select from '../../components/Select'
import axios from "axios";

export default function Team({ data }) {
    console.log(data)
    const [teamStats, setTeamStats] = useState(data)
    const [year, setYear] = useState('2021')
    // const isMounted = useRef(false)
    const conference = teamStats.conference.name


    const handleYearChange = (e) => {
        e.preventDefault()
        setYear(e.target.value)
    }

    /* useEffect( () => {

        if (isMounted.current) {
            const options = {
                method: 'GET',
                url: 'http://localhost:8000/stats',
                params: {id : teamStats.team.id, year : year}
            }
    
            axios.request(options).then((response) => {
                console.log('New Data', response.data.response[0])
                setTeamStats(response.data.response[0])
            }).catch((err) => console.log(err))
        } else {
            isMounted.current = true
        }
       
    }, [year]) */


    return (
        <div className="bg-theme-blue-medium flex">
            <div className="flex flex-col content-center items-center pt-8 flex-1">
                <img
                        src={teamStats.team.logo}
                        alt={`${teamStats.team.name} Logo`}
                        width={375}
                        height={375}
                />
                <h1 className="text-3xl mt-8 text-white ">{teamStats.team.name}</h1>
                <div className="text-lg text-white my-4">Conference: {conference.charAt(0).toUpperCase() + conference.slice(1)}</div>
            </div>


            <div className='flex flex-col content-center items-center pt-8 flex-1'>
                <Select onChange={handleYearChange}/>
                <div className='bg-theme-white p-8'>
                    <div>Season {teamStats.season}</div>
                    <div>Conferenece Rank: {teamStats.conference.rank}</div>
                    <div className='flex content-between gap-x-3'> 
                        <h1>Wins</h1>
                        <div>Home {teamStats.win.home}</div>
                        <div>Away {teamStats.win.away}</div>
                        <div>Total {teamStats.win.total}</div>
                    </div>
                    <div className='flex content-around gap-x-3'> 
                        <h1>Losses</h1>
                        <div>Home {teamStats.loss.home}</div>
                        <div>Away {teamStats.loss.away}</div>
                        <div>Total {teamStats.loss.total}</div>
                    </div>
                </div>

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
    const res = await fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021&team=${params.id}`, options)
    let data = await res.json()

    data = data.response[0]
  
    // Pass team to the page via props
    return { props: { data } }
}