export default function DashboardCard ({icon:Icon, iconColor, cardTitle, action, children}) {
    return (
        <div className="flex flex-col border border-gray-200 shadow-sm rounded-xl w-full gap-4 px-4 py-6 bg-white">
            <header className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center font-semibold">
                    <Icon className={`h-8 w-10 ${iconColor}`} />
                    <h2>{cardTitle}</h2>
                </div>
            </header>
            {children}
        </div>
    )
}