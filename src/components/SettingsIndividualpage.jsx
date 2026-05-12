import { Link } from "react-router-dom";

export default function SettingsIndividualpage ({ name, to }) {
    return (
        <Link to={to}>
            <span>
                {name}
            </span>
        </Link>
    )
} 