
export default function VitalSigns ( { vital, vitalname, vitalsymbol, label1, inputValue1, label2, inputValue2, onThresholdChange  } ) {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-semibold"> {vitalname} ({vitalsymbol}) </h3>
            <div className="flex gap-5 border-b border-b-gray-200 pb-8">
                <div className="flex flex-col gap-1 w-1/2">
                    <label className="font-semibold"> {label1} </label>
                    <input value={inputValue1} 
                    className="border border-gray-200 bg-gray-100 rounded-lg py-1.5 px-2"
                    onChange={(e) => console.log(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                    <label className="font-semibold">{label2}</label>
                    <input value={inputValue2} 
                    className="border  border-gray-200 bg-gray-100 rounded-lg py-1.5 px-2" 
                    onChange={(e) => console.log(e.target.value)}/>
                </div> 
            </div>
        </div>
)
}