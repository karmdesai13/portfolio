import "tailwindcss/tailwind.css";
export default function LearnOCity() {
    return(

        <div className="bg-gray-900 text-white w-full h-full">
     
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-3">LearnOCity</h1>
        <p className="text-lg">An Learning Management System </p>
      </section>

      
      <section className="flex flex-wrap justify-center gap-4 p-4">
        
        <img src="./LearnOCity/HomePage.png" alt="HomePage" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./LearnOCity/CourseInfo.png" alt="Course Info" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./LearnOCity/InstructorCourse.png" alt="Instructor Course" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./LearnOCity/InstructorPage.png" alt="Instructor Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./LearnOCity/StudentPage.png" alt="Student Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        <img src="./LearnOCity/Course.png" alt="Course Page" className="max-w-sm rounded-lg transition-transform hover:scale-110 duration-300" />
        

        
        
      </section>

      

      
      <section className="py-12 px-6">
  <h2 className="text-3xl font-semibold mb-6 text-center">Design and Development Insights</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="flex flex-col items-center justify-center col-span-full">
      <div className="text-center p-4">
        <p className="text-white font-serif text-xl">
          LearnOCity is an advanced Learning Management System (LMS) developed with a robust backend in C# 
          and a stable database foundation using MariaDB. Leveraging the powerful querying capabilities of 
          HeidiSQL, LearnOCity offers an intuitive and seamless educational experience. The Home Page serves 
          as a gateway, with a user-friendly interface that allows easy navigation to the Course Page – a 
          curated selection of educational resources and programs.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Each course is equipped with a 'More Info' button, deftly coded to provide detailed course 
          information upon interaction. This feature is engineered for performance, fetching data 
          dynamically with optimized SQL queries to ensure a responsive user experience.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          The Student Page presents a personalized profile dashboard, incorporating the courses enrolled by 
          the user. It is carefully designed to include pertinent course and schedule information, employing 
          complex C# logic to handle diverse data types and relationships. This personalization extends to 
          the Schedule Page, which displays a tailored timetable, all rendered through a responsive UI for 
          accessible at-a-glance viewing.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          The Instructor Page mirrors the student dashboard in utility but is customized for the educator’s 
          perspective, providing a cohesive ecosystem within the LMS. It is the result of meticulous object-oriented 
          programming in C#, ensuring that both students and instructors interact with information that's relevant 
          and necessary to their unique roles.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          LearnOCity’s interface was engineered with an emphasis on accessibility and user-centric design. 
          The structured database schema in MariaDB, paired with HeidiSQL’s efficient data handling, forms 
          the backbone of an LMS that is both powerful and easy to use, embodying the essence of digital learning.
        </p>
        <p className="text-white font-serif text-xl mt-4">
          Step into the realm of LearnOCity, where coding meets education, and every interaction is a step 
          towards knowledge. It's not just a platform; it's a learning journey crafted through the synergy 
          of cutting-edge development tools and educational foresight.
        </p>
      </div>
    </div>
  </div>
</section>





      
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Technical Stack And Visit the Project</h2>
        <div className="flex justify-center gap-4">
          <span className="bg-gray-700 px-4 py-2 rounded transition-transform hover:scale-110 hover:underline duration-300 ">
             <a href="https://github.com/karmdesai13/LearnOCity.git"> GitHub</a>
          </span>
          
          
        </div>
      </section>

      

      
      <footer className="text-center py-4">
        <p>© 2023 LearnOCity. All rights reserved.</p>
      </footer>
    </div>
  );
    

};