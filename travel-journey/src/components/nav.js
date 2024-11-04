import globe from '../images/Globe.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={globe} alt="globe logo"></img>
            <p>My Travel Journey</p>
        </nav>
    )
}