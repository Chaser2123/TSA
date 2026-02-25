export default function RequestPage() {
    return(
        <>
            <div className="w-full h-25" style={{ background: 'linear-gradient(36deg,rgba(8, 255, 78, 1) 0%, rgba(0, 148, 27, 1) 29%, rgba(104, 114, 32, 1) 43%, rgba(121, 108, 33, 1) 68%, rgba(217, 76, 37, 1) 87%, rgba(255, 128, 0, 1) 98%)' }}></div>
            <div className="w-full h-20 bg-gray-300"></div>
            <form className="h-screen w-full flex items-center justify-center flex-col">
                <h1 className="text-4xl font-bold mb-8">Resource Request Form</h1>
                <div className="h-150 w-260 bg-white flex flex-row justify-around rounded-4xl border-8 text-center">
                    <div className="flex justify-center items-center flex-col space-y-7 w-full">
                        <div className="flex space-x-3">
                            <span className="flex flex-col">
                                <label htmlFor="name">Name</label>
                                <input className="h-8 w-30 border-2" type="text" name="name" id="name" />
                            </span>
                            <span className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input className="h-8 w-50 border-2" type="email" name="email" id="email" />
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label htmlFor="resourceTitle">Resource Title</label>
                        <input className="h-8 border-2 w-40" type="text" name="resourceTitle" id="resourceTitle" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label htmlFor="description">Description</label>
                        <textarea className="border-2 w-40 h-20" name="description" id="description"></textarea>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="flex flex-col">
                            <label htmlFor="date">Date</label>
                            <input className="h-8 border-2 w-40" type="date" name="date" id="date" />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="ageRange">Age Range</label>
                            <span><input className="h-8 border-2 w-10 text-center" type="number" name="ageRangeStart" id="ageRangeStart" /> to <input className="h-8 border-2 w-10 text-center" type="number" name="ageRangeEnd" id="ageRangeEnd" /></span>
                        </span>
                    </div>
                    <button type="submit" className="p-3 bg-blue-600 rounded-3xl">Submit</button>
                </div>
                <div className="border-l-2 h-full flex items-center justify-center w-full flex-col">
                    <h1 className="text-2xl font-bold mb-4">Upload File</h1>
                    <div className="border-2 w-90 h-90">
                        <input style={{ backgroundImage: 'url("file.svg")', width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} type="file" accept="image/*" />
                    </div>
                </div>
                </div>
            </form>
        </>
    );
}