import { useState, useEffect, useRef } from 'react'
import Select from '../../components/Select'
import axios from "axios";

export default function Team({ data }) {
    console.log(data)
    const [teamStats, setTeamStats] = useState(data)
    const [year, setYear] = useState('2021')
    const isMounted = useRef(false)
    const conference = teamStats.conference.name


    const handleYearChange = (e) => {
        e.preventDefault()
        setYear(e.target.value)
    }

    useEffect( () => {

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
       
    }, [year])



    return (
        <div className="bg-theme-blue-medium">
            <div className="flex flex-col content-center items-center pt-8">
                <img
                    src={teamStats.team.logo}
                    alt={`${teamStats.team.name} Logo`}
                    width={450}
                    height={450}
                />
                <h1 className="text-3xl mt-8 text-white ">{teamStats.team.name}</h1>
                <div className="text-lg text-white my-4">Conference: {conference.charAt(0).toUpperCase() + conference.slice(1)}</div>
            </div>
            <Select onChange={handleYearChange}/>
            <div> Season {teamStats.season}</div>
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