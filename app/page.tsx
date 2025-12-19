import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCollegeReg from "./components/aboutcollege_reg";
import Schools from "./components/schools";
import CourseList from "./components/course";
import ContactForm from "./components/contactform";
import GoogleReviewsSection from "./components/GoogleReviewsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
           <GoogleReviewsSection />
      <AboutCollegeReg />
      <Schools />
      <CourseList />
      
      <ContactForm />
      
    </div>
  );
}
