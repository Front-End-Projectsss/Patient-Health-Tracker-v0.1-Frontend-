export default function InputComponent({label, type, placeholder, value, onChange }) {
    return (
            <div className="flex flex-col gap-1">
                <label className="font-semibold mt-2.5 ">{label}</label>
                <input 
                placeholder={placeholder}
                type={type}
                value={value} //makes the input display what is in the input box
                onChange={(e) => onChange && onChange (e)}
                className="px-3 py-1 w-full bg-gray-100 border border-gray-300 rounded-md" />
            </div>
    );
}