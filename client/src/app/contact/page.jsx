export default function ContactPage() {
    return(
        <>
            <div className="w-full h-25" style={{ background: 'linear-gradient(90deg, #0700b8 0%, #00ff88 100%)' }}></div>
            <div className="w-full h-20 bg-gray-300"></div>
            <div>
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-4xl font-bold text-center mt-10">Contact Us</h1>
                    <p className="text-center mt-5 text-lg">Any questions, suggestions, or feedback? Please reach out to us!</p>
                    <div className="w-200 h-110 m-10 p-10 rounded-2xl border-3 flex flex-col text-center items-center">
                        <span className="flex justify-around w-full mb-5">
                        <span className="flex flex-col">
                            <label className="mb-2" htmlFor="name">Name</label>
                            <input className="w-40 border-2" type="text" name="name" id="name" placeholder="John Doe" />
                        </span>
                        <span className="flex flex-col">
                            <label className="mb-2" htmlFor="email">Email</label>
                            <input className="w-60 border-2" type="email" name="email" id="email" placeholder="john.doe@example.com" />
                        </span>
                    </span>
                    <span className="flex flex-col items-center">
                        <label className="mb-2" htmlFor="message">Message</label>
                        <textarea className="border-2 w-125 h-50" name="message" id="message" placeholder="Your message here..." rows="5"></textarea>
                    </span>
                        <button type="submit" className="bg-blue-500 text-white w-40 px-4 py-2 rounded mt-5 hover:bg-blue-600">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    );
}