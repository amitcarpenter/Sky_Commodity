import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import AffiliateImg from "../assets/home-banner-bg.png";

const Web1 = () => {
  return (
    <>
      <section
        id="web_hero"
        className="web_hero"
        style={{ backgroundImage: `url(${AffiliateImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Welcome to the Sky Commodity API & WebSocket</h1>
              <form>
                <input
                  type="search"
                  placeholder="Search"
                  id="search"
                  name="search"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </section>

      <setion id="web_section" className="web_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="web">
                <h6>INTRODUCTION</h6>
                <Nav.Link as={Link} to={"/web1"}>
                  <button id="button_active">Introduction</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web2"}>
                  <button>Requirements and Limitations</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web3"}>
                  {" "}
                  <button>API Derivatives Trading</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web4"}>
                  <button>Open Source Libraries</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web5"}>
                  <button>Changelog</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web6"}>
                  <button>Showcase</button>
                </Nav.Link>
                <h6>REST</h6>
                <Nav.Link as={Link} to={"/web7"}>
                  <button>General</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web8"}>
                  <button>Public Endpoints</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web9"}>
                  <button>Authenticated Endpoints</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web10"}>
                  <button>Reading the Documentation (REST)</button>
                </Nav.Link>
                <h6>WEBSOCKET</h6>
                <Nav.Link as={Link} to={"/web11"}>
                  <button>General</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web12"}>
                  <button>Public Channels</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web13"}>
                  <button>Authenticated Channels</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web14"}>
                  <button>Reading the Documentation (WS)</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web15"}>
                  <button>WebSocket Checksum</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web16"}>
                  <button>Abbreviation Glossary</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/web17"}>
                  <button>Flag Values</button>
                </Nav.Link>
              </div>
            </div>
            <div className="col-lg-8 summary">
              <h2>Introduction</h2>
              {/* <h5>Last updated 30 November, 2022</h5> */}
              <h3>What is an API?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h3>What is the intended use of the Sky Commodity API?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h3>What makes our API special?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </setion>
    </>
  );
};

export default Web1;
