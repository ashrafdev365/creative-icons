import React from "react";

const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./logo.svg" alt="ashraf" />
          <h1>Creative Icons</h1>
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
            Get All the <span>Icons</span> Free
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            asperiores magnam numquam ratione aspernatur mollitia eos sint
            temporibus, natus doloribus asperiores magnam numquam ratione
            aspernatur mollitia eos sint temporibus, natus doloribus!
          </p>
          <button>Get Icons</button>
        </div>

        <img src="./hero.png" alt="ashraf" />
      </header>

      <article>
        <h2>About Creative Icons</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          asperiores magnam numquam ratione aspernatur mollitia eos sint
          temporibus, natus doloribus asperiores magnam numquam ratione
          aspernatur mollitia eos sint temporibus, natus doloribus!
        </p>
        <img src="./about.png" alt="ashraf" />
      </article>

      <main>
        <h1>About Aouther</h1>
        <div className="aouther">
          <img src="./ashraf.jpg" alt="ashraf" />
          <div className="aouther_content">
            <h1>About Me</h1>
            <p>
              {" "}
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
