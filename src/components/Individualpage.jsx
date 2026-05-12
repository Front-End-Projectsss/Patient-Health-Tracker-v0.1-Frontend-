import { Link } from "react-router-dom";

export default function IndividualPage ( {Icon, name, to } ) {
    return (
        <Link to={to} className="flex flex-row  gap-1.5 px-5 w-50 pt-1 rounded-lg hover:bg-gray-200 hover:text-black hover:scale-105">
                {Icon ? <Icon className="mt-1 p-0.5 h-5.5 w-5.5 mb-3" /> : null}
                <span className="mt-1">
                    {name}
                </span>
        </Link>
    )
}