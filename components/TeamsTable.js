
export default function TeamsTable({ teams }) {
    return (
        <div>
            <div>
                <button>
                    <div>Name</div>
                </button>
            </div>
            {teams.map((team, i) => (
                <div key={i} className='flex space-x-6 '>
                    <div>{team.name}</div>
                    <div>{team.code}</div>
                    <div>{team.city}</div>
                </div>
            ))}
        </div>
    )
}