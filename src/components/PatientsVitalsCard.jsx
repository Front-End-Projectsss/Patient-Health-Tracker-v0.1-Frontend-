export default function PatientsVitalsCard ({ icon: Icon, iconColor, iconTextColor, vital, vitalName, vitalRate, unit,  }) {
    
    
    return (
        <div className="flex flex-col gap-10 justify-between border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
            <header className="text-gray-500 font-semibold flex justify-between">
                <div className="flex gap-2 flex-col">
                    <Icon className={`w-10 h-10 p-2 mt-0.5 rounded-lg ${iconColor} ${iconTextColor}`} />
                    {vitalName}
                </div>
            </header>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                    <h2 className="font-bold text-2xl">{vitalRate}</h2>
                    <span className="text-gray-500 mt-2">{unit}</span>
                </div>
                <div className="flex text-gray-500">
                </div>
            </div>
        </div>
    )
}