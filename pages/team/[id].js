export default function Team({ data }) {
    console.log(data)

    const conference = data.conference.name

    return (
        <div className="bg-theme-blue-medium">
            <div className="flex flex-col content-center items-center p-8">
                <img
                    src={data.team.logo}
                    alt={`${data.team.name} Logo`}
                    width={450}
                    height={450}
                />
                <h1 className="text-3xl mt-8 text-white ">{data.team.name}</h1>
                <div className="text-lg text-white my-4">Conference: {conference.charAt(0).toUpperCase() + conference.slice(1)}</div>
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