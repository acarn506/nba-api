
export default function Teams({ teams }) {
    console.log('TEAMS', teams)
    return (
        <div>Teams</div>
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

    const res = await fetch('https://api-nba-v1.p.rapidapi.com/teams', options)
    const teams = await res.json()

    return {
        props: { teams, }, // will be passed to the page component as props
    }
}

