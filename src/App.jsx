import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <div className="min-h-screen bg-bgColor font-outfit overflow-x-hidden ">
      <div className="container mx-auto pt-8">
        <Navbar />
        <main className="flex flex-col gap-20 px-4 md:px-8 lg:px-12">
          <Profile />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Footer />
          <ScrollTopButton />
        </main>
      </div>
    </div>
  );
}

export default App;
