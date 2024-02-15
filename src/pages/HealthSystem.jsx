import "tailwindcss/tailwind.css";
export default function Health() {
    return (
        <div className="bg-gray-900 text-white w-full h-full">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">Health System</h1>
                <p className="text-lg">A Flight Booking System Made With Python</p>
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Design and Development Insights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                                Our Health Management System is constructed with precision in Python, and operated through a console interface that emphasizes functionality and ease of use.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Upon accessing the doctor management feature, users can effortlessly search for doctors by name or ID, displaying a depth of information with minimal input. The addition of new doctors is streamlined, reflecting the sophistication of the system&apos;s backend logic crafted in Python.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Patients are treated with the same level of finesse, where their information can be browsed, accessed, and managed with straightforward commands. Adding a new patient is as simple as filling in the details, which the system processes and stores with robust Python programming acumen.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                The facility management component unfolds a catalog of services, each with associated costs, presented in a clear and concise format. This functionality not only showcases the available healthcare amenities but also demonstrates the system&apos;s capability to handle financial aspects with ease.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Adding a new facility is a demonstration of the system&apos;s flexible data architecture, which allows for seamless integration of new services and cost structures. This aspect highlights the adaptable and scalable nature of the Python code at the heart of the system.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Dive into our Health Management System, where Python&apos;s powerful scripting capabilities meet the no-nonsense efficiency of a console application. It is not just a tool; it&apos;s a comprehensive solution that epitomizes our dedication to making healthcare management accessible, intuitive, and reliable for users of all levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://github.com/karmdesai13/HealthSystem.git">GitHub</a>
                    </span>
                </div>
            </section>
            <footer className="text-center py-4">
                <p>© 2023 HealthSystem. All rights reserved.</p>
            </footer>
        </div>
    );
};
