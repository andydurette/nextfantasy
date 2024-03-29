import Head from "next/head";
import React from "react";

const Accreditation = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="accreditation-page">
        <div className="page-content">
          <h1 data-testid="about-text">Creative Commons Art</h1>
          <p>
            A special thanks to the artists who listed their art pieces as
            creative commons so that people like myself could use them for
            creative endeavours like my own to create this website about a
            fantasy world.
          </p>
          <div id="accreditation-box">
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/dominuself"
                target="_blank"
                rel="noreferrer"
              >
                dominuself
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/shiprock"
                target="_blank"
                rel="noreferrer"
              >
                shiprock
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.artstation.com/fjftoledo"
                target="_blank"
                rel="noreferrer"
              >
                fjftoledo
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/captdiablo"
                target="_blank"
                rel="noreferrer"
              >
                captdiablo
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/feael"
                target="_blank"
                rel="noreferrer"
              >
                feael
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/greyevilowl"
                target="_blank"
                rel="noreferrer"
              >
                greyevilowl
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/jameszapata"
                target="_blank"
                rel="noreferrer"
              >
                jameszapata
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/sephiroth-art"
                target="_blank"
                rel="noreferrer"
              >
                sephiroth-art
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/t3hSpoon"
                target="_blank"
                rel="noreferrer"
              >
                T3hSpoon
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/jayxon84"
                target="_blank"
                rel="noreferrer"
              >
                JayXon84
              </a>
            </div>
            <div className="accreditation">
              <a
                href="https://www.deviantart.com/arnieSpace"
                target="_blank"
                rel="noreferrer"
              >
                arnieSpace
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Accreditation;
