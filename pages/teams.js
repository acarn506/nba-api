import SearchInput from "../components/SearchInput";
import TeamsTable from "../components/TeamsTable";

export default function Teams({ teams }) {
    console.log('TEAMS', teams)
    return (
        <>
            <SearchInput/>
            <TeamsTable teams={teams}/>
        </>
        
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
       return team.nbaFranchise ===  true
    }) 

    return {
        props: { teams, }, // will be passed to the page component as props
    }
}

