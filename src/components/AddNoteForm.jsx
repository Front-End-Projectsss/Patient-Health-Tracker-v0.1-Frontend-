import { useState } from "react";

export default function AddNoteForm ({ setIsNoteFormOpen, setNotesList, patientId }) {
    
    const  [noteData, setNoteData] = useState ({
        content: "",
    });

    const handleSubmit = (e) => {
            e.preventDefault();
            
            const newNote = {
                ...noteData,
                createdAt: Date.now()
            };

            //LOGIC FOR ADDING NOTES AND THEN READING OR RENDERING IT 
        
            //Getting existing notes from localStorage
            const storedNotes = localStorage.getItem("patientsNotes");
            const parsedNotes = storedNotes ? JSON.parse(storedNotes) : {};

            //Adding the notes to the patients array
            if (!parsedNotes[patientId]) {
                parsedNotes[patientId] = [];
            }
            parsedNotes[patientId].push(newNote);

            //Save back to localStorage
            localStorage.setItem("patientsNotes", JSON.stringify(parsedNotes));

            //Update state for immediate recovery
            setNotesList(parsedNotes[patientId]);
             
            setNoteData({ content: "" });
            setIsNoteFormOpen(false);

        };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col fixed w-9/12 top-3/10 sm:mx-25 lg:left-28  border border-gray-200 shadow-sm rounded-xl px-6 py-5 bg-white">
                <div className="flex justify-center">
                    <h2 className="font-semibold text-2xl mb-5">Notes Section</h2>
                </div>
                <div className="flex flex-col gap-4">
                 <textarea
                 rows={8}
                 className="outline-0 rows" 
                 placeholder="Enter clinical notes, observations, or updates..."
                 value={noteData.content}
                 onChange={(e) => {
                    setNoteData({...noteData, content: e.target.value})
                 }}>

                 </textarea>

                    
                    <button type="submit"
                    className="border rounded-md border-gray-300 bg-blue-500 text-white py-1 mt-5"> 
                    Add Note
                    </button>
                </div>
            </div>
                    
        </form>
    )
}