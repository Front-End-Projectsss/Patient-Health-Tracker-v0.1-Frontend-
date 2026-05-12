export default function Info ( {icon:Icon, spanValue} ) {
    return (
        <span className="flex items-center">
            <Icon className="h-8 w-8 p-1.5" />
            {spanValue}
        </span>
    )
}