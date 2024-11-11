import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <img src="" alt="" />
            <nav>
                <ul>
                    <li> 
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Novidades</Link>
                    </li>
                    <li>
                        <Link>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}