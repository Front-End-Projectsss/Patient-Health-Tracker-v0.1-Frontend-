import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard"
import Patients from "./pages/Patients";
import { patients } from "./data/patientsData.js";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Setttings";
import Profile from "./pages/Profile";
import System from "./pages/System";
import Notifications from "./pages/Notifications";
import Thresholds from "./pages/Thresholds";
import { appointments } from "./data/appointmentData";
import AddPatientPage from "./pages/AddPatientPage";
import { vitals } from "./data/vitals.js";
import PatientsDetail from "./pages/PatientsDetail.jsx";
import PersonalizedOverview from "./pages/PersonalizedOverview.jsx";
import PersonalizedAppointments from "./pages/PersonalizedAppointments.jsx";
import PersonalizedNotes from "./pages/PersonalizedNotes.jsx";



function App() {
 
  //State to update the appointments list
  const [appointmentsList, setAppointmentsList] = useState(appointments);

  //Lift patients state here so multiple routes/components can access it
  const [patientsArray, setPatientsArray] = useState(patients);
  const [vitalsArray, setVitalsArray] = useState(vitals);


  return (
    <Router> {/* Navigation manager of the whole app */}
        <Routes> {/*Container that holds all the route rules*/}
        {/*Main Pages*/}
        <Route path="/" element={<HomePage />}/> {/*Defines one specific path and the component that should load*/}
        
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/*DashboardLayout renders sidebar + outlet, hence why all the nested routes live in the parent route*/} 
            <Route index element={<Dashboard appointmentsList={appointmentsList} />} />{/*Default child route, this is what will be shown in outlet by default when dashboard is clicked*/}
            {/*Actual Patients Page*/}
            <Route path="patients" element={<Patients 
            patientsArray={patientsArray}
            vitalsArray={vitalsArray} />} />
            {/*Add Patients page*/}
            <Route path="patients/addpatientpage" element={<AddPatientPage 
            patientsArray={patientsArray} 
            setPatientsArray={setPatientsArray}
            vitalsArray={vitalsArray}
            setVitalsArray={setVitalsArray} />} />
            {/*Patients Details Page*/}
            <Route path="patients/patientsdetail/:id" element={<PatientsDetail />} >
            <Route path="overview" element={<PersonalizedOverview />} />
            <Route path="appointments" element={<PersonalizedAppointments />}/>
            <Route path="notes"element={<PersonalizedNotes />} />
            </Route>
            
            
            {/*React router appends /dashboard automatically because it is nested*/} 
            <Route path="appointments" element={<Appointments appointmentsList={appointmentsList} setAppointmentsList={setAppointmentsList} />} />
            
            {/*Settings Page with nested routes */}
            
            <Route path="settings" element={<Settings />}>
              <Route path="profile" element={<Profile />} />
              <Route path="system" element={<System />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="thresholds" element={<Thresholds />} />
            </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
