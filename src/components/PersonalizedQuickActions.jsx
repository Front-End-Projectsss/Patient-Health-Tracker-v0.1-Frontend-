export default function PersonalizedQuickActions ({ icon:Icon, quickActionTitle }) {
    return (
        <div className="flex gap-3 border border-gray-300 px-2 py-1 font-semibold rounded-lg hover:bg-blue-700 hover:cursor-pointer hover:scale-102 hover:text-white">
            <Icon className="w-5" />
            <span>{quickActionTitle}</span>
        </div>
    )
}