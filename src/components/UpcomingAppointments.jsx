import { UserIcon } from "lucide-react"
export default function IndividualupcomingAppointment ( { name, type, timing, } ) {
    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-xl p-5">
            <div className="flex flex-row gap-3">
                <UserIcon className="rounded-full bg-gray-200 text-gray-500 p-2 h-10 w-10"/>
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <span className="text-gray-500">{timing}</span>

                </div>
            </div>
            <div className="flex gap-3 items-center">
                <button className="border border-gray-200 px-4 py-1 text-sm h-12 rounded-full font-semibold">
                    {type}
                </button>
            </div>
        </div>
    )
}