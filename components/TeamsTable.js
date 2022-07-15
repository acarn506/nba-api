import Image from "next/image"

export default function TeamsTable({ teams }) {
    
    return (
        <div className="mx-3">
            <div className="flex p-5 text-center">
                <button className="flex-1 text-left font-bold">
                    <div>Name</div>
                </button>
                <div className="flex-1 font-bold">Code</div>
                <div className="flex-1 font-bold">City</div>
            </div>
            {teams.map((team, i) => (
                <div key={i} className='flex p-5 text-center bg-theme-grey-light rounded-md mb-4'>
                    <div className="flex-1 text-left">{team.name}</div>
                    <div className="flex-1">{team.code}</div>
                    <div className="flex-1">{team.city}</div>
                    <img
                    className=""
                    src={team.logo}
                    alt="Team Logo"
                    width={50}
                    height={50}
                    />
                </div>
            ))}
        </div>
    )
}