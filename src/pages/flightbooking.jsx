import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function FlightBooking() {
    return(
        <div className="bg-gray-900 text-white w-full h-full">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">Flight Booking System</h1>
                <p className="text-lg">A Flight Booking System Made With C#</p>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./FlightBooking/Flights.png" alt="Flights Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./FlightBooking/FlightsDisplay.png" alt="Flights Display Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./FlightBooking/Code.png" alt="Reservation Code Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300 " />
                <img src="./FlightBooking/Update.png" alt="Update Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300"  />
                <img src="./FlightBooking/Search.png" alt="Reserve Search Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300 " />
                <img src="./FlightBooking/Flights.png" alt="Flights Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Design and Development Insights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                                Our FlightBooking System is a testament to sophisticated software architecture, designed meticulously with C# and XAML to ensure a seamless user experience. The application’s UI harnesses the flexibility and power of XAML, presenting an intuitive interface that brings flight browsing and booking into the modern era with style and efficiency.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Navigating to the Flights tab unfolds a world of possibilities, where selections not only showcase available flights but also populate the reservation form effortlessly, symbolizing the integration of form and function. On making a reservation, the system cleverly generates a unique code, encapsulating the complexity of backend C# logic in a simple, user-friendly output.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                The robust search functionality, driven by a combination of XAML prowess and C# backend algorithms, enables users to filter flights by arrival and departure airports and dates. The UI lays out the options for any given day with precision, making it a breeze for travelers to plan their journeys.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                In the Reservations tab, users are greeted with their booking details, reflecting the seamless synchronization between the Flights and Reservation tabs. This page is not just a static view but a dynamic interface allowing updates and modifications, showcasing the malleable nature of the underlying XAML interface elements, all underpinned by the robust C# backend.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                The reservation lookup feature, empowered by a sophisticated C# search algorithm, accepts reservation codes and swiftly retrieves booking details, further exemplifying the system&apos;s commitment to user-centric design and technological excellence.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Experience the FlightBooking System, where the amalgamation of C# precision and XAML design aesthetics transports you to your destination. It&apos;s more than just a booking platform; it&apos;s a journey in luxurious efficiency, crafted to make every traveler&apos;s experience memorable and hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300 ">
                        <a href="https://github.com/karmdesai13/FlightBooking.git"> GitHub</a>
                    </span>
                    <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
                </div>
            </section>
            
            <footer className="text-center py-4">
                <p>© 2025 FlightBooking. All rights reserved.</p>
            </footer>
        </div>
    );
};
