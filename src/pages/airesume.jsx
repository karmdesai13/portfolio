import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function GujjuHouse() {
    return (
        <div className="bg-gray-900 text-white w-full h-full text-center">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">AI Resume Critiquer</h1>
                
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./AIResume/MainScreen.png" alt="Main Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./AIResume/Upload.png" alt="Upload Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./AIResume/Output.png" alt="Output Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
              

                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                                <p className="text-white font-serif text-xl">
                                Introducing my AI powered Resume Critiquer. This innovative web application is designed to give you instant, intelligent feedback on your resume. It aims to help you quickly refine your resume for better job prospects.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                Built using Streamlit, this project provides a clean and interactive interface. You can easily upload your resume and get immediate insights.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                The core of its intelligence comes from advanced Prompt Engineering. I carefully crafted queries to interact with OpenAI powerful language models, ensuring you receive the most helpful and tailored advice for your specific resume.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                This project showcases my skills in developing AI applications, creating user friendly web interfaces, and leveraging cutting edge language models for practical solutions. It is a testament to blending AI capabilities with intuitive design.
                                </p>
                                <p className="text-white font-serif text-xl mt-4">
                                Discover how precise AI driven feedback can enhance your resume and boost your confidence in job applications. Get started with the AI Resume Critiquer today.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://github.com/karmdesai13/AI-Resume-Critique.git"> GitHub</a>
                    </span>
                </div>
            </section>
            <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
            <footer className="text-center py-4">
                <p>© 2025 AIResume Critiquer. All rights reserved.</p>
            </footer>
        </div>
    );
}
