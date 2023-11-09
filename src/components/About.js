import Toolkit from "./Toolkit";

import "../App.css";

import headshot from "../imgs/finalEdit.jpg";

export default function About(props) {
  return (
    <>
      <div className='about'>
        <div className='headshot'>
          <img
            src={headshot}
            alt='Jesus Olaiz in a black shirt with a small white dot pattern infront of a blue background'
          />
        </div>
        <div className='bio'>
          <p>
            {" "}
            Welcome to my portfolio! I'm a versatile full stack web developer
            adept at creating dynamic, responsive websites using a range of
            technologies. I specialize in harnessing the power of React and
            Express to build intuitive user interfaces and robust server-side
            applications. Leveraging Knex, I skillfully manipulate data through
            precise query construction, ensuring seamless functionality.
          </p>

          <p>
            My proficiency extends to a diverse set of languages and tools. I
            harness the potential of:
          </p>
          <ul>
            <li>
              JavaScript & TypeScript: Crafting interactive and efficient web
              applications.
            </li>
            <li>
              HTML, CSS, and SASS/SCSS: Designing engaging and responsive user
              interfaces.
            </li>
            <li>
              Node.js & MongoDB: Implementing scalable and high-performing
              backend solutions. MySQL & PostgreSQL: Building and managing
              efficient databases.
            </li>
          </ul>

          <p>
            Beyond coding, I find solace in the outdoors—hiking through scenic
            trails and exploring nature's beauty on two wheels. My passion for
            problem-solving and crafting elegant solutions drives my love for
            coding.{" "}
          </p>

          <p>
            With a keen eye for detail and a commitment to staying at the
            forefront of technological advancements, I'm dedicated to
            transforming ideas into seamless, user-centric web experiences.
            Let's collaborate to bring your unique vision to life!
          </p>
        </div>
        <Toolkit id="toolkit"/>
      </div>
      
    </>
  );
}
