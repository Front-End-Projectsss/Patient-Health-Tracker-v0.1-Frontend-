export default function Input ( {inputLabel, inputValue} ) {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-semibold ">{inputLabel}</label>
            <input value={inputValue} className="px-3 py-1 w-full bg-gray-100 border border-gray-300 rounded-md" />
        </div>
    )
}