import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>
            <h1>Services heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="services-list">
                <li>
                    <Link to="/services/Software-Development">
                        Software Development
                    </Link>
                </li>
                <li>
                    <Link to="/services/UI-UX-Design">UI/UX Design</Link>
                </li>
                <li>
                    <Link to="/services/Digital-Marketing">
                        Digital Marketing
                    </Link>
                </li>
            </ul>

            <img
                className="services-image"
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200"
                alt="People working together at a table"
            />
        </>
    );
}
