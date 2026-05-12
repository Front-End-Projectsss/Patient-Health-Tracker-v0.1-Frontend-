
export default function IndividualNotification ({ children, title, subtitle }) {
    return (
        <div className="flex justify-between items-center border-b border-b-gray-200 mb-5">
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{title}</h3>
                <span className="text-gray-500 mb-2">{subtitle}</span>
            </div>
            {children}
        </div> 
    )
}