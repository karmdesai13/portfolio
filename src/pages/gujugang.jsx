import Link from 'next/link';
import "tailwindcss/tailwind.css";
export default function GujjuHouse() {
    return(

        <div className="bg-gray-900 text-white w-full h-full text-center">
     
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-3">Gujju House</h1>
        <p className="text-lg">A Restaurant App for Indian Street Food</p>
      </section>

      
      <section className="flex flex-wrap justify-center gap-4 p-4">
        
        <img src="./gujjuhouse/SignIn.png" alt="Sign In Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./gujjuhouse/Location.png" alt="LocationPage" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./gujjuhouse/Food.png" alt="FoodPage" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./gujjuhouse/Drinks.png" alt="Drinks Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./gujjuhouse/Checkout.png" alt="CheckOut Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./gujjuhouse/Order.png" alt="Order Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />

        
        
      </section>

      

      
      <section className="py-12 px-6">
  <h2 className="text-3xl font-semibold mb-6 text-center">Technical Overview</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="flex flex-col items-center justify-center col-span-full">
      <div className="text-center p-4">
        <p className="text-white font-serif text-xl">
          Gujju House is engineered to provide an immersive and intuitive user experience, reflecting the rich tapestry of Indian culture through its vibrant UI design. Our app boasts 
          a responsive layout that adapts fluidly across devices, ensuring that the journey from menu browsing to order placement is seamless on any screen 
          size.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          The apps architecture leverages modern front-end frameworks to deliver dynamic content with swift, smooth transitions. Our Menu Page exemplifies 
          this, with high-definition images and real-time price updates that showcase our dishes in vivid detail.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Each page of the app, from locating franchises to checking out, is optimized for performance and speed. Our backend systems ensure secure and efficient 
          data handling, allowing for a robust and reliable ordering process with multiple payment integration options.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Innovative features such as real-time order tracking and custom user preferences set the Gujju House app apart. The Settings and Login pages are designed 
          with user-centric principles, prioritizing accessibility and ease of use while maintaining high-security standards.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Gujju Houses app is not just about functionality but also about creating an aesthetic that resonates with our bran's ethos. The use of traditional Indian motifs 
          and a color palette inspired by spices and flavors enhances the overall gastronomic experience.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Join us on this tech-savvy journey of culinary discovery where every click is a step towards a feast for your senses.
        </p>
      </div>
    </div>
  </div>
</section>




      
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
        <div className="flex justify-center gap-4">
          <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300 ">
             <a href="https://www.figma.com/file/PyhsFlNj0SUyFWkAqZMWky/Reasturant-app?type=design&node-id=0%3A1&mode=design&t=aBjWFY1GnmvZcRHW-1"> Figma</a>
          </span>
          
          
        </div>
      </section>

      <Link href="./page">Back</Link>
      
      <footer className="text-center py-4">
        <p>© 2023 GujjuHouse. All rights reserved.</p>
      </footer>
    </div>
  );
    

};