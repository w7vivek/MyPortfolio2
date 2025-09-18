import React, { useState, useEffect } from "react";
import profile_image from "./profile_image.jpeg";
import "./s.css";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="main">
          <div className="conatiner">
            <div className="contobjec">
              {/* Theme Toggle Button */}
              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                <i>⚪</i>
              </button>

              <div className="status">
                <span className="dot"></span>
                Available to work
              </div>
              <h1 className="name">Vivek Mahesh Kumar Wadhwani</h1>

              <img src={profile_image} className="img" alt="profile" />
              <h1>Web Developer</h1>
            </div>

            <div className="about">
              <h1 className="int">About Me</h1>
              <h3>
                Vivek is a skilled Full-Stack web developer specializing in JavaScript,
                React.js, and backend technologies. Explore his projects and expertise to
                discover innovative solutions for your web development needs.
              </h3>

              <div className="about_in">
                <div className="address1">
                  <h3>Ahmedabad, India</h3>
                  <h3>Web Developer &amp; Product Designer</h3>
                </div>
                <div className="college">
                  <h3>Full Stack Developer &amp;&amp; Software Developer</h3>
                  <h3>GLS University</h3>
                </div>
              </div>
            </div>

            <div className="follow">
              <h3 className="int">Follow ME </h3>
              <button className="list">
                <a href="https://x.com/w_vivek181">Twitter</a>
              </button>
              <button className="list">
                <a href="https://www.linkedin.com/in/wadhwani-vivek-mahesh-kumar-b838a2259/">
                  Linkedin
                </a>
              </button>
              <button className="list">
                <a href="https://www.instagram.com/_w_vivek/">Instagram</a>
              </button>
            </div>
          </div>

          <div className="interest">
            <div className="myinterest">
              <h2 className="int">Interest</h2>
              <ul className="interestclass">
                <li className="interestlist">Coding</li>
                <li className="interestlist">Gaming</li>
                <li className="interestlist">Editing</li>
                <li className="interestlist">Sports</li>
              </ul>
            </div>

            <div className="done">
              <h1> Skills:</h1>
              <div className="tech">
                <button>HTML</button>
                <button>CSS</button>
                <button>BOOTSTRAP</button>
                <button>REACT.JS</button>
              </div>
              <div className="tech1">
                <button>NEXT.JS</button>
                <button>GIT & GITHUB</button>
              </div>

              <h1> Programming:</h1>
              <div className="prog">
                <button>C++</button>
                <button>JAVA</button>
                <button>Python</button>
              </div>

              <h1> Certificate:</h1>
              <div className="cert">
                <div className="certificate">
                  <div className="cert-card">
                    <p>
                      <a href="https://www.coursera.org/account/accomplishments/verify/S4M3NM8C2Z9W">
                        META Certificate for Front-End Developer
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW PROJECTS CARD */}
            <div className="projects">
              <h1 className="int">Projects</h1>
              <div className="project-list">
                <div className="project-card">
                  <h3>Text Converter</h3>
                  <p>
                     A React app that converts text to uppercase, lowercase,
                    counts words/characters, and offers quick clear actions and many more....
                  </p>
                  <a href="https://w7vivek.github.io/Text_Converter/">
                    GitHub
                  </a>
                </div>

                <div className="project-card">
                  <h3>ProductHub</h3>
                  <p>
                    E-commerce demo with React Router and GitHub Pages
                    deployment.
                  </p>
                  <a href="https://w7vivek.github.io/ProductHub/">
                    GitHub
                  </a>
                </div>

                {/* Add more projects here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
