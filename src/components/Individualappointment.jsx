import { UserIcon } from "lucide-react"
export default function IndividualAppointment ( { name, appointmentType, timing, duration, state } ) {
    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-xl p-5">
            <div className="flex flex-row gap-3">
                <UserIcon className="rounded-full bg-gray-200 text-gray-500 p-2 h-10 w-10"/>
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <span className="text-gray-500">{appointmentType}</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex flex-col">
                    <span>{timing}</span>
                    <span className="text-gray-500">{duration} min</span>
                </div>
                <button className="border border-gray-200 px-3 py-0.5 text-sm h-10 rounded-full font-semibold capitalize">
                    {state}
                </button>
            </div>
        </div>
    )
}