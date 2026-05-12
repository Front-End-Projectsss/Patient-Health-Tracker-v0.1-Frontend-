import { Outlet } from "react-router-dom";
import { SettingsIcon } from "lucide-react"
import IndividualNavLink from "../components/IndividualNavLink";


export default function Settings () {
    return(
        <main className="relative flex flex-col mb-5 min-h-screen px-7">
            <header className="mb-8">
                <div className=" flex flex-row  gap-1.5 mt-5 text-2xl font-bold w-60 pt-1">
                    <SettingsIcon className="mt-0.5 h-8 w-8 mb-3 text-blue-500" />
                    <h1 className="mt-0.5">
                        Settings
                    </h1>
                </div>
                <p className="text-gray-500">Manage your profile and preferences</p>
            </header>
            
            {/*NAV LINKS*/}
            <nav className="bg-gray-200 flex flex-row w-95 gap-2 px-2 py-2 mb-7 font-semibold text-gray-500 rounded-xl">
                <IndividualNavLink to="profile" name="Profile" />
                <IndividualNavLink to="system" end name="System" />
                <IndividualNavLink to="notifications" end name="Notifications" />
                <IndividualNavLink to="thresholds" end name="Thresholds" />
                
            </nav>

            <div>
                <Outlet />
            </div>
        
            

        </main>
        
    )
}