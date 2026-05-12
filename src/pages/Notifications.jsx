import { BellAlertIcon } from "@heroicons/react/24/outline";
import { SaveIcon } from "lucide-react";
import IndividualNotification from "../components/IndividualNotification";
import SaveChanges from "../components/SaveChanges";

export default function Notifications () {
    return (
                    <section className="min-w-0">
                        {/*Notifications*/}
                        <div className="flex flex-col border border-gray-200 shadow-sm rounded-xl px-6 py-8 bg-white">
                            <header className="flex flex-row gap-1">
                                <BellAlertIcon className="h-8 w-8 p-0.5"/>
                                <h1 className="font-bold text-2xl">
                                    Notifications
                                </h1>
                            </header>
                            <span className="text-gray-500 mb-7">Configure alert preferences</span>
                                
                                {/*Critical Alerts*/}
                                <IndividualNotification title="Critical Alerts" subtitle="Immediate notification for critical vitals"
                                children={
                                <div className="relative flex items-center w-10 h-5.5 rounded-full bg-blue-500">
                                    <div className="absolute right-0.5 w-4.5 h-4.5 rounded-full bg-white"></div>
                                </div>} 
                                />
                                
                                {/*Warning Alerts*/}
                                <IndividualNotification title="Warning Alerts" subtitle="Notifications for threshold warnings" 
                                children={
                                <div className="relative flex items-center w-10 h-5.5 rounded-full bg-gray-200">
                                    <div className="absolute left-0.5 w-4.5 h-4.5 rounded-full bg-white"></div>
                                </div>}/>

                                {/*Email Notifications*/}
                                <IndividualNotification title="Email Notifications" subtitle="Receive alerts via email" 
                                children={
                                <div className="relative flex items-center w-10 h-5.5 rounded-full bg-blue-500">
                                    <div className="absolute right-0.5 w-4.5 h-4.5 rounded-full bg-white"></div>
                                </div>}/>

                                {/*Sound Alerts*/}
                                <IndividualNotification title="Sound Alerts" subtitle="Audio Notification for alerts" 
                                children={
                                <div className="relative flex items-center w-10 h-5.5 rounded-full bg-gray-200">
                                    <div className="absolute left-0.5 w-4.5 h-4.5 rounded-full bg-white"></div>
                                </div>}/>
                        </div>

                        <SaveChanges />
                    </section>
    )
}