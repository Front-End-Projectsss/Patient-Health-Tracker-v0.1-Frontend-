import { UserIcon } from "lucide-react"

export default function BasicPatientInfo ({ age, id, gender, condition, admitted, statusfunction, status }) {
    return  (
        <div className="flex flex-row items-center gap-3 md:gap-1 mt-2">
            <div className="flex flex-col gap-2 md:gap-0.5">
                    <div className="flex flex-row font-semibold gap-2 md:gap-x-0.5 text-gray-400">
                        <span> {age}y •</span>
                        <span>{gender} •</span>
                        <span>ID: {id} •</span>
                        <span>{condition}</span>
                    </div>
            </div>
        </div>
    )
}