export default function DashboardQuickActions( {quickActionTitle, icon: Icon} ) {
    return (
        <div className="flex flex-row items-center border border-gray-200 shadow-sm rounded-xl w-full gap-2 px-3 py-3 bg-white hover:cursor-pointer hover:scale-102"> 
            <Icon className="h-8 w-8 p-1 text-blue-500"/>
            <span className="font-semibold"> {quickActionTitle} </span>
        </div>
    )
}