import { useState } from "react";
import SearchInput from "../components/SearchInput";
import TeamsTable from "../components/TeamsTable";

export default function Teams({ teams }) {
    console.log('TEAMS', teams)

    const [searchValue, setSearchValue] = useState('')

    const filteredTeams = teams.filter( team => 
        team.name.toLowerCase().includes(searchValue) ||
        team.code.toLowerCase().includes(searchValue)
    )

    const onChangeInput = (e) => {
        e.preventDefault()

        setSearchValue(e.target.value.toLowerCase())
    }

    return (
        <div className="">
            <SearchInput onChange={onChangeInput}/>
            <TeamsTable teams={filteredTeams}/>
        </div>
        
    )
}

export async function getStaticProps() {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NBA_API_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    const res = await fetch('https://api-nba-v1.p.rapidapi.com/teams?league=standard', options)
    const data = await res.json()
    // filter just the NBA teams
    const teams = data.response.filter( team => {
       return team.nbaFranchise ===  true && team.name !== 'Home Team Stephen A'
    }) 

    return {
        props: { teams, }, // will be passed to the page component as props
    }
}

