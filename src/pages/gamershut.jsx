import "tailwindcss/tailwind.css";
export default function GamersHut() {
    return(
        <div className="bg-gray-900 text-white w-full h-full">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">Gamers Hut</h1>
                <p className="text-lg">A Social Media Platform for Gamers</p>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./gamershut/Home.png" alt="Home Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./gamershut/LogIn.png" alt="Login In Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./gamershut/Notification.png" alt="Notification Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./gamershut/Server.png" alt="Server Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./gamershut/Gamers.png" alt="Gamers Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./gamershut/FriendOpinion.png" alt="Friends Opinion Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Design and Development Insights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                                Gamers Hut represents the zenith of UI/UX design, meticulously crafted using Figma, the industry-leading 
                                interface design tool. From conceptual wireframes to high-fidelity prototypes, each element of the app 
                                was iterated to perfection. The Home Page design echoes Instagrams intuitive storytelling, achieved 
                                by employing Figmas vector-based tools for responsive and fluid layouts that adapt to various devices.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                The Server Page is the fruit of collaborative real-time design sessions within Figma, allowing us to 
                                experiment with numerous user flow scenarios to optimize the communication experience. This space 
                                leverages Figmas interactive components and smart animate features to simulate the engagement and 
                                connectivity of real-time gaming environments.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                The Opinion Page is a result of extensive user testing facilitated by Figmas prototyping capabilities, 
                                ensuring a user-centric platform for discussions, similar to Reddit but fine-tuned for the gaming 
                                community. The design process involved constant feedback loops and iterative testing to achieve a 
                                seamless and engaging user interface.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                For live content streaming, Figmas collaborative environment enabled designers and developers to 
                                synchronize perfectly, ensuring the streamed content is displayed with minimal latency and optimal 
                                interactivity, providing a window to the gaming worlds luminaries.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Our chat feature was visualized and refined through Figmas prototyping tools, focusing on 
                                conversational design with instant previews to evaluate the chat's look and feel in real-time, 
                                mirroring a natural and intuitive conversational flow for gamers worldwide.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                                Embrace Gamers Hut, a fusion of technological prowess and design excellence, all rooted in the powerful 
                                capabilities of Figma. Its more than just an app; it&apos;s a platform where gaming culture is woven into 
                                the fabric of community and connection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300 ">
                        <a href="https://www.figma.com/file/2mbRF3ZKdFAZSdCP7VBuPs/Gamers-Hut?type=design&node-id=0%3A1&mode=design&t=BAnNvTUfKe15t8tS-1"> Figma</a>
                    </span>
                </div>
            </section>
            <footer className="text-center py-4">
                <p>© 2023 Gamers Hut. All rights reserved.</p>
            </footer>
        </div>
    );
}
