export default function ResourcesPage() {
    return(
        <>
            <div className="w-full h-25" style={{ background: 'linear-gradient(36deg,rgba(255, 8, 8, 1) 0%, rgba(255, 128, 0, 1) 43%, rgba(37, 199, 217, 1) 77%, rgba(255, 128, 0, 1) 98%)' }}></div>
            <div className="w-full h-20 bg-gray-300"></div>
            <div className="w-full h-screen py-5">
                <div className="border rounded-2xl w-90 h-155 sticky left-5 top-30 p-5 items-center flex flex-col text-center">
                    <h1 className="text-center text-2xl font-bold border-b-2">Filters</h1><br />
                    <span>
                        <h1>age range</h1>
                        <span><input className="w-15 border" type="number" /> to <input className="w-15 border" type="number" /></span>
                    </span> <br /><br />
                    <span>
                        <h1>price range</h1>
                        <span><input className="w-15 border" type="number" /> to <input className="w-15 border" type="number" /></span><br />
                        <span className="flex space-x-2"><input type="checkbox" /><h1>free</h1></span>
                    </span> <br /><br />
                    <span>
                        <h1>date range</h1>
                        <span><input className="w-27 border" type="date" /> to <input className="w-27 border" type="date" /></span>
                    </span> <br /><br />
                    <span className="border-b-2 pb-4 w-full">
                        <h1>resource type</h1>
                        <select className="w-30 border">
                            <option value="all">Any</option>
                            <option value="event">Activity</option>
                            <option value="organization">Organization</option>
                            <option value="other">Other</option>
                        </select>
                    </span> <br />
                    <span>
                        <input className="border rounded-3xl px-2" type="text" placeholder="Search" />
                    </span><br /><br />
                    <span>
                        <button className="border rounded-3xl px-5 py-1 bg-blue-600 text-white hover:bg-blue-500">Apply</button>
                    </span>
                </div>
            </div>
        </>
    )
}