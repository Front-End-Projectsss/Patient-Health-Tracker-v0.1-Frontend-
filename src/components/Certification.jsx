export default function Certification ({ certificationName, certificationYear }) {
    return (
        <div className="px-3 py-3 w-full flex justify-between font-semibold bg-gray-100 border border-gray-300 rounded-md">
            <span>{certificationName} </span>
            <span>{certificationYear}</span>
        </div>
    )
}