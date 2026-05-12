import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
export default function Alerts () {
    return(
        <main className="flex flex-col min-h-screen px-7">
            <header className="mb-8">
                <div className="flex flex-row  gap-1.5 mt-5 text-2xl font-bold w-60 pt-1">
                    <ExclamationCircleIcon className="mt-0.5 h-8 w-8 mb-3 text-blue-500" />
                    <h1 className="mt-0.5">
                        Alerts
                    </h1>
                </div>
                <p className="text-gray-500">View and manage system alerts</p>
            </header>
            <section className="flex flex-col gap-5">

                {/*Patient 1*/}
                <div className="flex flex-row justify-between items-center border border-amber-300 shadow-sm rounded-xl w-full px-6 py-8 bg-amber-50">
                    <div className="flex gap-2 items-center">
                        <ExclamationCircleIcon className="h-8 w-8 text-amber-500" />
                        <div>
                            <h2 className="font-bold">High heart rate detected</h2>
                            <span className="flex font-semibold text-gray-500">John Smith</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 font-semibold">2 minutes ago</span>
                        <button className="text-blue-600 font-semibold">Resolve</button>
                    </div>
                </div>


                {/*Patient 2*/}
                <div className="flex flex-row justify-between items-center border border-red-300 shadow-sm rounded-xl w-full px-6 py-8 bg-red-50">
                    <div className="flex gap-2 items-center">
                        <ExclamationCircleIcon className="h-8 w-8 text-red-500" />
                        <div>
                            <h2 className="font-bold">Low oxygen saturation</h2>
                            <span className="flex font-semibold text-gray-500">Michael Chen</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 font-semibold">5 minutes ago</span>
                        <button className="text-blue-600 font-semibold">Resolve</button>
                    </div>
                </div>


                {/*Patient 3*/}
                <div className="flex flex-row justify-between items-center border border-amber-300 shadow-sm rounded-xl w-full px-6 py-8 bg-amber-50">
                    <div className="flex gap-2 items-center">
                        <ExclamationCircleIcon className="h-8 w-8 text-amber-500" />
                        <div>
                            <h2 className="font-bold">Temperature elevated</h2>
                            <span className="flex font-semibold text-gray-500">Sarah Johnson</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 font-semibold">2 minutes ago</span>
                        <button className="text-blue-600 font-semibold">Resolve</button>
                    </div>
                </div>


            </section>
        </main>
    )
}
