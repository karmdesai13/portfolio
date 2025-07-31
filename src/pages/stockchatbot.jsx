import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function Stock() {
    return (
        <div className="bg-gray-900 text-white w-full h-full text-center">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-3">Stock Assistant ChatBot</h1>
                
            </section>
            <section className="flex flex-wrap justify-center gap-4 p-4">
                <img src="./StockChatBot/MainScreen.png" alt="Main Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./StockChatBot/StockPrice.png" alt="Stock Price Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./StockChatBot/EMA.png" alt="EMA Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./StockChatBot/RSI.png" alt="RSI Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./StockChatBot/MACD.png" alt="MACD Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
                <img src="./StockChatBot/Graph.png" alt="Graph Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />

                
            </section>
            <section className="py-12 px-6">
                <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center col-span-full">
                        <div className="text-center p-4">
                            <p className="text-white font-serif text-xl">
                            Unlock the power of informed investment with our AI-powered Stock Analysis Assistant. This innovative chatbot provides instant access to crucial stock market data and technical indicators, designed to empower both novice and experienced investors.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Simply ask about any publicly traded companys stock price, or delve deeper into its performance with advanced financial metrics. Our assistant can fetch the latest closing prices, helping you stay updated on market movements with ease.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Beyond basic prices, gain valuable insights by calculating key technical indicators. Explore the Simple Moving Average (SMA) and Exponential Moving Average (EMA) for various timeframes to identify trends and potential support/resistance levels.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Understand market momentum with the Relative Strength Index (RSI), a powerful tool for identifying overbought or oversold conditions. Additionally, analyze the Moving Average Convergence Divergence (MACD) to spot trend changes and momentum shifts.
                            </p>
                            <p className="text-white font-serif text-xl mt-4">
                            Visualize stock performance with dynamic charts. Request a plot of a companys stock price over the last year to quickly grasp its historical trajectory and identify patterns. Our assistant makes complex financial data accessible and actionable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
                <div className="flex justify-center gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300">
                        <a href="https://github.com/karmdesai13/Stock-Analysis-Chatbot.git"> GitHub</a>
                    </span>
                </div>
            </section>
            <Link href="/#projects" className='bg-blue-900 text-white rounded-lg  px-4 py-2'>Back</Link>
            <footer className="text-center py-4">
                <p>© 2025 Stock Assistant ChatBot. All rights reserved.</p>
            </footer>
        </div>
    );
}
