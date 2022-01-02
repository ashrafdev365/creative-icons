import React from "react";
import "../styles/pages/home/home.css";

const Home = () => {

  return (
    <>
      <nav>
        <div className="logo">
          <img src="./logo.svg" alt="ashraf" />
          <h1>
            Creative <span>Icons</span>
          </h1>
        </div>
        <ul>
          <a href="">Home</a>
          <a href="">Icons</a>
          <a href="">About Us</a>
          <a href="">Policy</a>
        </ul>
        <button>Get Icons</button>
      </nav>

      <header>
        <div className="content">
          <h1>
            Get All the <br />
            <span>Icons</span> Free
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            asperiores magnam numquam ratione aspernatur mollitia eos sint
            temporibus, natus doloribus asperiores magnam numquam ratione
            aspernatur mollitia eos sint temporibus, natus doloribus!
          </p>
          <button>Get Icons</button>
        </div>

        <div className="hero">
          <img src="./hero.svg" alt="ashraf" />
          <div></div>
        </div>
      </header>

      <article>
        <h2>
          About Creative <span>Icons</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          asperiores magnam numquam ratione aspernatur mollitia eos sint
          temporibus, natus doloribus asperiores magnam numquam ratione
          aspernatur mollitia eos sint temporibus, natus doloribus!
        </p>
        <img src="./main.svg" alt="ashraf" />
      </article>

      <main>
        <h1>
          About <span>Icons</span>
        </h1>
        <div className="aouther">
          <img src="./ashraf.svg" alt="ashraf" />
          <div className="aouther_content">
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              asperiores magnam numquam ratione aspernatur mollitia eos sint
              temporibus, natus doloribus asperiores magnam numquam ratione
              aspernatur mollitia eos sint temporibus, natus doloribus!
            </p>
            <button>View Portfolio</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer_logo">
          <img src="./logo.svg" alt="ashraf" />
          <h1>Creative Icons</h1>
        </div>

        <ul>
          <a href="">Home</a>
          <a href="">Icons</a>
          <a href="">About Us</a>
          <a href="">Policy</a>
        </ul>

        <div className="social">
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="">
            <i className="fab fa-github"></i>
          </a>
          <a href="">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
