import React, { useEffect, useState } from "react";
import "../../styles/home-counter.css";

const CounterItem = ({ target, title, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="col-lg-4 col-md-4 counter-bx">
      <div className="counter-box d-flex align-items-center">
        <div className="icon-box">
          <i className={icon}></i>
        </div>
        <div className="counter-content">
          <h2>{count} +</h2>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

function HomeCounter() {
  return (
    <section className="home-counter py-5">
      <div className="container">
        <div className="row">

          <CounterItem
            target={1500}
            title="Total Project"
            icon="fa-solid fa-gears"
          />

          <CounterItem
            target={196}
            title="Our Clients"
            icon="fa-solid fa-user-check"
          />

          <CounterItem
            target={10}
            title="Industry Expertise"
            icon="fa-solid fa-handshake"
          />

        </div>
      </div>
    </section>
  );
}

export default HomeCounter;
