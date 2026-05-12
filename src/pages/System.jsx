import { ShieldIcon   } from "lucide-react";
import SystemSetings from "../components/SystemSettings";
import SaveChanges from "../components/SaveChanges";


export default function System () {
    return (  
                <section className="flex flex-col gap-5">

                    {/*System Preferences*/}
                    <section className="min-w-0 ">
                        <div className="flex flex-col border border-gray-200 shadow-sm rounded-xl px-6 py-8 bg-white">
                            <header className="flex flex-row gap-1">
                                <ShieldIcon className="h-8 w-8 p-1"/>
                                <h1 className="font-bold text-2xl">
                                    System Preferences
                                </h1>
                            </header>
                            <span className="text-gray-600 mb-5">General system configuration</span>
                                
                                {/*Critical Alerts*/}
                                   <SystemSetings label="Data refresh rate" option1="Every 5 seconds" option2="Every 30 seconds" option3="Every 1 minute" />

                                {/*Time Zone*/}
                                <SystemSetings label="Time Zone" option1="Eastern Time (UTC-5)" option2="Pacific Time (UTC-8)" option3="UTC" />
                                            
                                {/*Date Format*/}
                            <SystemSetings label="Date Format" option1="MM/DD/YYYY" option2="DD/MM/YYYY" option3="YYYY-MM-DD"/>
                        
                        </div>
                    </section>
                    <SaveChanges />
                </section>
    )
}