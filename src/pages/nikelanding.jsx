import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function Nike() {
    return (
        <div className="bg-gray-900 text-white w-full h-full">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">Nike</h1>
                <p className="text-lg">Landing Page With Figma</p>
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./nike/nike1.png" alt="Home Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./nike/nike2.png" alt="Login In Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./nike/nike3.png" alt="Notification Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Design and Development Insights</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                            Our Nike landing page is engineered with precision in Figma and brought to life through a harmonious blend of React and Tailwind CSS, prioritizing both aesthetics and user experience.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            As visitors enter the virtual storefront, they are greeted by a visually striking display of the latest Nike sneakers, ensuring instant engagement. Users can smoothly navigate through the product selection, propelled by a clean and intuitive interface that highlights Nike cutting-edge designs with minimal effort.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            The shopping experience is refined to be as swift as the athletes who don Nike gear. A seamless search function allows users to filter products by style, size, or sport, offering detailed information and personalized recommendations with just a few clicks. Adding new items to the cart reflects the sophistication of the sites responsive design, as well as the robust JavaScript logic that powers user interactions.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://www.figma.com/proto/zq08XCjuho4GtGpn6VRct6/Untitled?node-id=2-3">Figma</a>
                    </span>
                    <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
                </div>
            </section>
            
            <footer className="text-center py-4">
                <p>© 2025 Nike Landing Page. All rights reserved.</p>
            </footer>
        </div>
    );
};
