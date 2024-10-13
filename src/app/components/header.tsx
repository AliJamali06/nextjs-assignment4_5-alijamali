import Link from "next/link"
export default function Header(){
    return(
        <header className="header">
            <ul className="header-button">
                <li className="home"><Link href="/">Home</Link></li>
                <li className="about-us"><Link href="/About-us">About us</Link></li>
                <li className="contact-us"><Link href="/Contact-us">Contact us</Link></li>
                <li className="links"><Link href="/links">links</Link></li>
            </ul>
        </header>
    )
};