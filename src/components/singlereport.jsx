import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { DownloadIcon } from "lucide-react";

export default function SingleReport ( { headerTitle, headerDescription, reportDate, reportTitle } ) {
    return (
            <div>
                <div className="flex flex-row justify-between items-center border border-gray-200 rounded-xl w-full px-8 py-8 bg-white">
                    <div className="flex flex-row items-center gap-4">
                        <DocumentTextIcon className="h-10 w-10 p-2 rounded-xl bg-blue-100 text-blue-500" />
                        <header className="flex flex-col">
                            <h3 className="font-semibold"> {headerTitle} </h3>
                            <span className="text-gray-500"> {headerDescription} </span>
                        </header>
                    </div>
                    
                    <div className="flex flex-row items-center gap-10">
                        <div className="flex flex-col">
                            <span className="text-gray-500"> {reportDate} </span>
                            <span className="flex justify-center font-semibold border border-slate-200 rounded-xl px-1 py-1"> {reportTitle} </span>
                        </div>
                        <DownloadIcon className="h-8"/>
                    </div>
                    
                </div>
            </div>
    )
} 