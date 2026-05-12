export default function Toast({ statement }) {
    return (
        <div className="fixed bottom-1/4 left-1/2 z-10000 bg-gray-800 text-white p-3 rounded-lg shadow-lg">
            <span>{statement}</span>
        </div>
    );
}