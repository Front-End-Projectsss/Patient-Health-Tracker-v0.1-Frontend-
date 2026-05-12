export default function StatCard ({cardLabel, CardValue, icon: Icon, iconColor}) {
    return (
        <div className="flex flex-row justify-between items-center border border-gray-200 shadow-sm rounded-xl w-full px-6 py-8 bg-white">
            <div className="flex flex-col gap-1">
                <h2 className="text-gray-500">{cardLabel}</h2>
                <span className="font-bold text-2xl">{CardValue}</span>
            </div>
            <Icon className={`h-12 w-12 p-1.5 ${iconColor}`}/>
        </div>

    )
}