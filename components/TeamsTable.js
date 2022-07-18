import Image from "next/image"

export default function TeamsTable({ teams }) {
    
    return (
        <div className="mx-5">
            <div className="flex p-5 text-center items-center">
                <button className="flex-1 text-left font-bold">
                    <div>Name</div>
                </button>
                <div className="flex-1 font-bold">City</div>
                <div className="flex-1 font-bold">Abbreviation</div>
                <div className="w-16 h-16"></div>
            </div>
            {teams.map((team, i) => (
                <div key={i} className='flex p-5 text-center bg-theme-grey-light rounded-md mb-4 items-center'>
                    <div className="flex-1 text-left">{team.name}</div>
                    <div className="flex-1">{team.city}</div>
                    <div className="flex-1">{team.code}</div>
                    <img
                    className=""
                    src={team.logo}
                    alt="Team Logo"
                    width={80}
                    height={80}
                    />
                </div>
            ))}
        </div>
    )
}