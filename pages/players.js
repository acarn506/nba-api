export default function Players({ players }) {

    console.log('PLAYERS', players)

    return (
        <div>

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

    const res = await fetch('https://api-nba-v1.p.rapidapi.com/players?name=lebron james', options)
    const data = await res.json()
    const players = data

    return {
        props: { players, }, // will be passed to the page component as props
    }
}
