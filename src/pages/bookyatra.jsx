import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function GujjuHouse() {
    return (
        <div className="bg-gray-900 text-white w-full h-full text-center">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">BookYatra-Capstone</h1>
                <p className="text-lg">A App Design</p>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./Bookyatracap/Home.png" alt="Home Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./Bookyatracap/Hotel.png" alt="Hotel Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./Bookyatracap/IndividualHotel.png" alt="IndividualHotel Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                            Embark on a journey with BookYatra, an immersive travel booking platform meticulously crafted with Figma for my capstone project at SAIT. This comprehensive design encompasses a user-centric landing page, a resourceful home page, and detailed hotel and flight booking pages, each brimming with thoughtfully curated information.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            The landing page serves as a portal to adventure, offering a tantalizing glimpse into the possibilities that await. Its designed to captivate and guide users smoothly into the booking experience, where the essence of travel is beautifully captured in every layout.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Venture further into the home page, which stands as a central hub for travelers to start crafting their journeys. It is here where convenience meets choice, with accessible search functions and dynamic filters that allow users to seamlessly tailor their travel plans to their desires.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Hotel and flight selections have never been more intuitive. Each page is a testament to our dedication to detail—showcasing a breadth of options complete with high-resolution images, comprehensive descriptions, and transparent pricing. Every hotel and flight page is an invitation to explore, presenting options that cater to a range of preferences and budgets.
                            </p>
                           
                            <p className="text-white font-serif text-xl mt-4">
                            Dive into BookYatra, where Figmas design prowess meets the expansive world of travel. This project is not merely a tool but a gateway to discovery, embodying our commitment to delivering a seamless, inspiring, and reliable booking experience for globetrotters everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://www.figma.com/file/DdGskCae0fonibEMw5GWrP/BookYatra?type=design&node-id=0-1&mode=design&t=sPoFqo5FJAKDbemp-0"> Figma</a>
                    </span>
                </div>
            </section>
            <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
            <footer className="text-center py-4">
                <p>© 2023 GujjuHouse. All rights reserved.</p>
            </footer>
        </div>
    );
}
