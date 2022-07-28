import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {

    const router = useRouter()

    return (
        <nav className='flex justify-between items-center p-6 border-b-4 border-theme-black bg-theme-grey-light'>
            <Image
             src="/basketballLogo.png"
             alt="Picture a basketball with flames"
             width={150}
             height={150}
            />
            <ul className='flex items-center space-x-6'>
            <li className={router.pathname == '/' ? 'cursor-none' : 'bg-red-700'}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/teams">
                        <a>Teams</a>
                    </Link>
                </li>
                <li>
                    <Link href="/players">
                        <a>Players</a>
                    </Link>
                </li>
                <li>
                    <Link href="/scores">
                        <a>Scores</a>
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        <a>News</a>
                    </Link>
                </li>
            </ul>
            

        </nav>
    )
}