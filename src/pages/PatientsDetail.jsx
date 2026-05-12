import { ThermometerIcon, ActivityIcon, CalendarIcon, DropletsIcon, HeartIcon, TriangleAlertIcon, ArrowRightIcon, AlertTriangleIcon } from "lucide-react";
import { Outlet, useParams } from "react-router-dom";
import { patients } from "../data/patientsData"; 
import { vitals } from "../data/vitals";
import BasicPatientInfo from "../components/BasicPatientInfo";
import PatientsVitalsCard from "../components/PatientsVitalsCard";
import ActionCards from "../components/ActionCards";
import IndividualNavLink from "../components/IndividualNavLink";
import { PatientDetailContext } from "../context/PatientDetailContext";
import PersonalizedQuickActions from "../components/PersonalizedQuickActions.jsx";
import { DocumentPlusIcon , DocumentTextIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import AddNoteForm from "../components/AddNoteForm.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";

export default function PateintDetail () {

    const [patientsArray] = useState(patients);
    const [vitalsArray] = useState(vitals);
    const [notesList, setNotesList] = useState([]);
    const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);
    const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
    const [appointmentsList, setAppointmentsList] = useState([]);

    // useParams is how a page reads info from the URL
    const { id } = useParams(); //this grabs <patient.id> from the URL    

    
    //LOGIC TO READ/RENDER NOTES IMMEDIATELY THE PAGE LOADS
    useEffect(() => {

        //loading notes from localStorage
        const storedNotes = localStorage.getItem("patientsNotes");
        const patientsNotesString = storedNotes ? storedNotes : "{}";
        const parsedPatientsNote = JSON.parse(patientsNotesString);
    
        //Identifying the particular patients note 
        const patientNotesForThisPatient = parsedPatientsNote[id]
        const personalizedPatientNote =  patientNotesForThisPatient ? patientNotesForThisPatient : [];
    
        //This is for a single patients note
        setNotesList(personalizedPatientNote);
    }, [id]);
    
    //LOGIC TO READ APPPOINTMENTS IMMEDIATLEY PAGE LOADS 
    useEffect(() => {
        //loading appointments from localStorage

        const storedAppointments = localStorage.getItem("patientsAppointments");
        const storedAppointmentsObj = storedAppointments ? JSON.parse(storedAppointments) : {};
        
        const patientAppointmentForThisPatient = storedAppointmentsObj[id];
        const personalizedPatientAppointment = patientAppointmentForThisPatient ? patientAppointmentForThisPatient : [];
        
        setAppointmentsList(personalizedPatientAppointment);
    }, [id]);
    //.find returns a single patient
    const patient = patientsArray.find(patient => patient.id === id);

    //Get their vitals too
    //.filter returns multiple vitals
    const patientVitals = vitalsArray.filter(vital => vital.patientId === id);

        const patientCompleteDetail = {
        ...patient,
         vitals: patientVitals
    };
    
    console.log(patientCompleteDetail);

    const latestVital = patientCompleteDetail.vitals.length > 0
        ? patientCompleteDetail.vitals.reduce((latest, current) => 
        new Date(current.recordedAt) > new Date(latest.recordedAt) 
        ? current : latest) 
        : null;
    

    return (
       <>
       {isAppointmentFormOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-10">
            <AppointmentForm
            setAppointmentsList={setAppointmentsList}
            setIsFormOpen={setIsAppointmentFormOpen}
            defaultPatientId={id}
            />
        </div>
        )}
        {isNoteFormOpen && (
                <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-10">
                <AddNoteForm
                setNotesList =  {setNotesList}
                setIsNoteFormOpen = {setIsNoteFormOpen}
                patientId={id}
                />
                </div>
            )}    
            <main className="p-5">
            <div className=" flex flex-col mb-5">
                {/*Basic Patient Information*/}
                    <div className="flex flex-col my-5">
                        <div className="flex flex-row gap-3">
                            <h2 className="font-bold text-2xl">{patientCompleteDetail.name}</h2>
                        </div>
                        <BasicPatientInfo
                        age={patientCompleteDetail.age}
                        id={patientCompleteDetail.id}
                        gender={patientCompleteDetail.gender}
                        condition={patientCompleteDetail.condition}
                        admitted={patientCompleteDetail.admitted}
                        /> 
                    </div>
                    {/*Quick Action Cards*/}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3">
                            <PersonalizedQuickActions icon={DocumentPlusIcon} quickActionTitle="Record Vitals" />
                            
                            {/*Appointment button*/}
                            <button onClick={() => {setIsAppointmentFormOpen(true)}}>
                                <PersonalizedQuickActions 
                                icon={CalendarIcon} 
                                quickActionTitle="+ Appointment" />
                            </button>

                            {/*Add Note button*/}
                            <button onClick={() => {setIsNoteFormOpen(true)}}>
                                <PersonalizedQuickActions 
                                icon={DocumentIcon} 
                                quickActionTitle="Add Note"
                                />
                            </button>
                        
                            <PersonalizedQuickActions icon={DocumentTextIcon} quickActionTitle="Generate Report" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        
                        {/*Heart Rate*/}
                        <PatientsVitalsCard 
                        icon={HeartIcon}
                        iconColor={"bg-red-100"}
                        iconTextColor={"text-red-600"}
                        vitalName= "Heart Rate"
                        vital="heartRate"
                        vitalRate={latestVital ?.heartRate}
                        unit="BPM"
                        
                        />

                        {/*Blood Pressure*/}
                        <PatientsVitalsCard 
                        icon={ActivityIcon}
                        iconColor={"bg-amber-100"}
                        iconTextColor={"text-amber-600"}
                        vitalName= "Blood Pressure"
                        vital="bloodPressure"
                        vitalRate={latestVital ?.bloodPressure}
                        unit="mmHg"
                        />

                        {/*Temperature*/}
                        <PatientsVitalsCard 
                        icon={ThermometerIcon}
                        iconColor={"bg-green-100"}
                        iconTextColor={"text-green-600"}
                        vitalName= "Temperature"
                        vital="temperature"
                        vitalRate={latestVital ?.temperature}
                        unit="°C"
                        />

                        {/*Blood Oxygen*/}
                        <PatientsVitalsCard 
                        icon={DropletsIcon}
                        iconColor={"bg-blue-100"}
                        iconTextColor={"text-blue-600"}
                        vitalName= "Blood Oxygen"
                        vital="oxygen"
                        vitalRate={latestVital ?.oxygen}
                        unit="%"
                        />
                    
                    </div>
                    
                    {/*Action Cards*/}
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-8"> 
                        <ActionCards 
                        action="View History"
                        actionInfo="Access past vital signs records"/>
                    
                        {/*AI Health Summary Card*/}
                        <ActionCards 
                        action="AI Health Summary"
                        actionInfo="Get AI-powered insights and trends from patient data"/>
                    </div>
                    
                    {/*NAV LINKS*/}
                    <nav className="bg-gray-200 flex flex-row w-80 gap-2 px-2 py-2 mb-7 font-semibold text-gray-500 rounded-xl">
                        <IndividualNavLink to="overview" name="Overview" />
                        <IndividualNavLink to="appointments" name="Appointments" />
                        <IndividualNavLink to="notes" name="Notes" notesList={notesList} />
                    </nav>

                    <div >
                        <PatientDetailContext.Provider value={{ patient, latestVital, notesList, setNotesList, appointmentsList, setAppointmentsList }} >
                            {/*So everything in here can now access the data*/}
                            <Outlet />
                        </PatientDetailContext.Provider> 
                    </div>

            </main>
        </>  
        
    )
}