import { DocumentTextIcon } from "@heroicons/react/24/outline"

export default function QuickActions ( { QuickActionTitle } ) {
    return (
        <div className="flex flex-row items-center gap-1 border border-gray-300 rounded-xl bg-gray-100 px-3 py-1 hover:cursor-pointer hover:scale-105"> 
            <DocumentTextIcon className="h-8 w-8 p-1"/>
            <span className="font-semibold"> {QuickActionTitle} </span>
        </div>
    )
}