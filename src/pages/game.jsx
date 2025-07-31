import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function Game() {
    return (
        <div className="bg-gray-900 text-white w-full h-full text-center">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">C++ Game</h1>
                
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./C++Game/Main.png" alt="Main Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./C++Game/Hint.png" alt="Upload Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./C++Game/Move.png" alt="Output Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
              

                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                               <p className="text-white font-serif text-xl">
                                Just wrapped up a really cool project from my University of Lethbridge class: a text-based adventure game built in C++. Our team created an interactive story with different scenarios, an inventory system, and even NPCs you can talk to.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                I am super proud of how we designed it using Object-Oriented Programming  for a clean, modular structure. We also tied everything together with dynamic game logic for compelling gameplay.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                This project was a fantastic experience in bringing a narrative to life through code. It includes features like interactive input parsing, a robust hint system, and strategic item usage to solve puzzles and advance the story.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                We ensured code quality and reliability through comprehensive unit testing using Google Tests. This was a crucial step in our software development lifecycle.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                We also collaborated effectively as a team using Git and GitLab for managing our codebase and tracking changes. It was a challenging yet incredibly rewarding experience to bring this game to life.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href= "https://github.com/karmdesai13/A-Text-Based-Adventure-Game.git"> GitHub</a>
                    </span>
                </div>
            </section>
            <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
            <footer className="text-center py-4">
                <p>© 2025 C++ Game. All rights reserved.</p>
            </footer>
        </div>
    );
}
