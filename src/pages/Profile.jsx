import { UserIcon , HospitalIcon, BadgeCheckIcon } from "lucide-react";
import { EnvelopeIcon, PhoneIcon, CalendarIcon, PencilSquareIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Certification from "../components/Certification";
import Input from "../components/Input";
import Info from "../components/Info";
import SaveChanges from "../components/SaveChanges";

export default function Profile () {
    return (
    <main>
        <section className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-5 min-h-screen">
            {/*This means 320px of profile card and the right gets the remaining space, 1fr*/}
            {/*Patient 1*/}
            <div className="row-span-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-8 bg-white">
                {/*Profile card spans two rows, that is the setting of the height and above we had set the width(320px)*/}
                <section className="flex flex-col ">
                    <div className="flex flex-col border-b border-b-gray-300 items-center justify-center">
                        <UserIcon className="w-20 h-20 p-3 rounded-full bg-blue-200 text-blue-600"/>
                        <h2 className="font-semibold text-2xl">Dr. Sarah Chen</h2>
                        <div className="flex flex-col items-center font-semibold text-gray-500 gap-1.5 mb-6">
                            <span>Interventional Cardiology </span>
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md"> Cardiology</span>
                        </div>
                    </div>


                    <div className="flex flex-col justify-end gap-1.5 text-gray-600 mt-5">
                        {/*Email*/}
                        <Info icon={EnvelopeIcon} spanValue="sarahchen@vitalwatch.com" />
                        {/*Phone Number*/}
                        <Info icon={PhoneIcon} spanValue="+1 (555) 123-4567" />
                        {/*Specialty*/}
                        <Info icon={HospitalIcon} spanValue="Cardiology" />
                        {/*Year of joining*/}
                        <Info icon={CalendarIcon} spanValue="Joined March 15, 2018" />
                    </div>
                </section>
            </div>

            {/*Personal Information*/}
            <div className="flex flex-col w-full border border-gray-200 shadow-sm rounded-xl px-6 py-5 bg-white">
                {/*Automatically slides into the next free cell, which is on the right side*/}
                <div className="flex justify-between">
                    <h2 className="font-semibold text-2xl mb-5">Personal Information</h2>
                    <button className="flex items-center px-2.5 h-10 gap-1 bg-gray-100 border border-gray-200 rounded-lg hover:text-black hover:scale-105 hover:bg-gray-300 hover:cursor-pointer">
                        <PencilSquareIcon className="h-6.5 w-7 p-1" />
                        <span>Edit</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input inputLabel="Full Name" inputValue="Dr Sarah Chen" />
                    <Input inputLabel="Phone" inputValue="+1 (555) 123-4567" />
                    <Input inputLabel="Education" inputValue="Harvard Medical School" />
                    <Input inputLabel="Email" inputValue="sarahchen@vitalcare.com" />
                    <Input inputLabel="License Number" inputValue="MD-2018-45678" />
                    <Input inputLabel="Experience" inputValue="12 years" />
                    
                </div>
            </div>

            {/*Certifications*/}
                {/*This container will automatically position itself at the bottom of personal info, because the left has already being taken
                Made use of grid-cols beacuse there are two cards placed side by side with each other.*/}
                <div className="flex flex-col gap-3 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-8 bg-white">
                    <div className="flex">
                        <BadgeCheckIcon className="h-9 w-9 p-1" />
                        <h2 className="font-semibold text-2xl  mb-3">Certifications</h2>
                    </div>
                        <div className="mt-3 flex flex-col gap-5">
                            <Certification certificationName="Board Certified Cardiologist" certificationYear="2018" />
                            <Certification certificationName="Advanced Cardiac Life Support" certificationYear="2020" />
                            <Certification certificationName="Echocardiography Certification" certificationYear="2023" />
                        </div>
                </div>
        </section>
       <SaveChanges />
    </main>
    
    )
}