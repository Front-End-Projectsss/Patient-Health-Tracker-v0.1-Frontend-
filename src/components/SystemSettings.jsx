
export default function SystemSetings ({ label, option1, option2, option3 }) {
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label className="font-semibold">{label}</label>
            <select className="border border-gray-200 rounded-lg px-2 py-1.5 w-full bg-gray-100 text-gray-600 mb-2">
                <option>{option1}</option>
                <option>{option2}</option>
                <option>{option3}</option>
            </select>
        </div>
    )
}