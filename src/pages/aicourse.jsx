import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function GujjuHouse() {
    return (
        <div className="bg-gray-900 text-white w-full h-full text-center">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">AI Course Scheduler</h1>
                
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <video controls src="./CourseScheduler/AIProject.mp4" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300">
                        Your browser does not support the video tag.
                </video>
              

                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                                 <p className="text-white font-serif text-xl">
                                 Introducing my Interactive Course Scheduler. This advanced desktop application, built with Python and PyQt5, simplifies complex academic planning. It helps students and advisors efficiently manage course prerequisites and generate optimized study schedules.
                                 </p>
                                 <p className="text-white font-serif text-xl mt-4">
                                 The application uses advanced graph algorithms to model and analyze course dependencies. It intelligently detects cycles within prerequisites, preventing impossible study paths.
                                 </p>
                                 <p className="text-white font-serif text-xl mt-4">
                                 A core feature is its implementation of the A star search algorithm. This allows users to find the optimal prerequisite chain to a desired course, considering an estimated work hour cost for each.
                                 </p>
                                 <p className="text-white font-serif text-xl mt-4">
                                 It also incorporates sophisticated logic for assigning courses to terms. This respects constraints like maximum courses per term, elective limits, and balances workload based on course difficulty levels.
                                 </p>
                                 <p className="text-white font-serif text-xl mt-4">
                                 This project showcases blending complex algorithmic solutions with an intuitive user experience. It allows users to add courses, simulate schedules, generate reports, and save or load academic plans.
                                 </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://github.com/karmdesai13/AI-course-Scheduler.git"> GitHub</a>
                    </span>
                </div>
            </section>
            <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
            <footer className="text-center py-4">
                <p>© 2025 AICourse Scheduler. All rights reserved.</p>
            </footer>
        </div>
    );
}
