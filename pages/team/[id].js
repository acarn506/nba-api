import { useState } from 'react'
import Select from '../../components/Select'

export default function Team({ data21, data20, data19 }) {
    const [teamStats, setTeamStats] = useState(data21)
    const [year, setYear] = useState('2021')
    const conference = teamStats.conference.name

    console.log('TEAM DATA', teamStats)

    const handleYearChange = (e) => {
        e.preventDefault()
        setYear(e.target.value)

        if (e.target.value === 2020) {
            setTeamStats(data20)
        } else if (e.target.value === 2019) {
            setTeamStats(data19)
        } else {
            setTeamStats(data21)
        }
    }

    return (
        <div className="bg-theme-blue-medium flex">
            <div className="flex flex-col content-center items-center pt-8 flex-1">
                <img
                        src={teamStats.team.logo}
                        alt={`${teamStats.team.name} Logo`}
                        width={325}
                        height={325}
                />
                <h1 className="text-3xl mt-8 text-theme-black ">{teamStats.team.name}</h1>
                <div className="text-lg text-theme-black my-4 mb-8">Conference: {conference.charAt(0).toUpperCase() + conference.slice(1)}</div>
            </div>


            <div className='flex flex-col content-center items-center py-8  flex-1'>
                <Select value={year} onChange={handleYearChange}/>
                <div className='bg-theme-white p-8 mt-8 flex flex-col items-center gap-y-3 border-2 border-theme-grey-dark rounded-md'>
                    <div>Season {teamStats.season}</div>
                    <div>Conferenece Rank: {teamStats.conference.rank}</div>
                    <div className='flex content-between gap-x-3 p-2'> 
                        <h1 className='text-green-600 font-medium'>Wins</h1>
                        <div>Home: {teamStats.win.home}</div>
                        <div>Away: {teamStats.win.away}</div>
                        <div className='font-bold'>Total: {teamStats.win.total}</div>
                    </div>
                    <div className='flex content-around gap-x-3 p-2'> 
                        <h1 className='text-red-500 font-medium'>Losses</h1>
                        <div>Home: {teamStats.loss.home}</div>
                        <div>Away: {teamStats.loss.away}</div>
                        <div className='font-bold'>Total: {teamStats.loss.total}</div>
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
    const URL21 = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021&team=${params.id}`
    const URL20 = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2020&team=${params.id}`
    const URL19 =`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2019&team=${params.id}`

    const [res21, res20, res19] = await Promise.all([fetch(URL21, options), fetch(URL20, options), fetch(URL19, options)])
    let [data21, data20, data19] = await Promise.all([res21.json(), res20.json(), res19.json()])

    data21 = data21.response[0]
    data20 = data20.response[0]
    data19 = data19.response[0]
  
    // Pass team to the page via props
    return { props: { data21, data20, data19 } }
}