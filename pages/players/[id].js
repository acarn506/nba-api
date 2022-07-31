export default function Players({ players }) {

    console.log('PLAYERS DATA', players)
    return (
        <div>Players</div>
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