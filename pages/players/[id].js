export default function Players({ players }) {

    console.log('PLAYERS DATA', players)
    return (
        <div className="grid bg-theme-blue-light row-auto grid-cols-4">
            {
                players.map( (player, i) => (
                    <div key={i} className='p-2 border-2 border-theme-grey-medium rounded-md text-white'>
                        <h1>{player.firstname + " " + player.lastname}</h1>
                        <div>Height: {player.height.feets + "'" + player.height.inches}</div>
                    </div>
                ))
            }
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