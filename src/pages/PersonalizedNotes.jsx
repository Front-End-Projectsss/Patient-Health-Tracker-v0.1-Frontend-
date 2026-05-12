import { useContext } from "react";
import { PatientDetailContext } from "../context/PatientDetailContext";


export default function PersonalizedNotes () {

    const { notesList } = useContext(PatientDetailContext)
    return (
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
        {notesList && notesList.length > 0 ? (
            notesList.map((note) => (
            <span key={note.createdAt}>{note.content}</span>
        ))
        ) : ( 
        <span>No notes entered for this patient</span>)}
    </div>
    )
}