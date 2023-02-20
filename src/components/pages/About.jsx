import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../layout/general/index";
import AboutSection from "../layout/about/AboutSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(/assets/img/about-cover.jpg)" }}
        >
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Who We Are?</h2>
            <ol>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>About Us</li>
            </ol>
          </div>
        </div>

        <AboutSection />
      </main>
      <Footer />
      <div>
        <a
          href="#"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </div>
  );
};
export default About;
