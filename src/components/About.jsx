import React from "react";
import "../App.css";
import profilePicture from '../assets/heroImage.png'; // Import your image

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className=" w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14 flex items-center"> {/* Flex container for bio and image, items-center for vertical alignment */}

        {/* Bio Text Container */}
        <div className="mr-8"> {/* Add some right margin to separate text and image */}
          <h1 className="text-6xl font-bold">
            <span id="Vamsi">About Me</span>
          </h1>
          <p className="pt-4 text-xl leading-8">
            Hello! Bhaskara Sai here, passionate about bringing great web and iOS ideas to life.  From sleek interfaces to robust backends, I build user-friendly applications with a focus on innovation.  Let's connect and see how we can create something amazing together!
            <br></br>
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0"> {/* Prevent image from shrinking */}
        <img
            src={profilePicture}
            alt="Your Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-purple1"
          />

        </div>

      </div>
    </div>
  );
};

export default About;