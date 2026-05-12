import { SaveIcon } from "lucide-react";

export default function SaveChanges() {
    return (
        <div className="flex justify-end mt-7">
            <button className="flex flex-row gap-2 bg-blue-600 px-4 py-2 text-white rounded-lg hover:scale-105 hover:bg-blue-800">
                <SaveIcon className="p-0.5"/>
                <span>Save Changes</span>
            </button>
        </div> 
    )
}