export default function ActionCards({ action, actionInfo }) {
    return (
            <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl px-6 py-5 bg-white">
                <header className="font-semibold flex">{action}</header>
                <span className="text-gray-500">{actionInfo}</span>
            </div>

    )
} 