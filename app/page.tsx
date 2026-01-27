import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCollegeReg from "./components/aboutcollege_reg";
import CourseList from "./components/course";
import ContactForm from "./components/contactform";
import GoogleCarousel from "./components/GoogleCarousel";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Students Say
            </h2>
            <p className="text-md md:text-lg text-gray-600 mt-2">
              Real stories from learners who have grown with us.
            </p>
          </div>
          <GoogleCarousel />
        </div>
      </section>
      <AboutCollegeReg />
      <section id="courses">
        <CourseList />
      </section>
      
      <ContactForm />
      
    </div>
  );
}
