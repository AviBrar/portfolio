import "./Projects.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/imgs/home.png";
import projImg2 from "../../assets/imgs/nav-bar.png";
import projImg3 from "../../assets/imgs/add-league.png";
import projImg4 from "../../assets/imgs/warehouses.png";
import projImg5 from "../../assets/imgs/inventory.png";
import projImg6 from "../../assets/imgs/search-inv.png";
import projImg7 from "../../assets/imgs/chatbox-main.png";
import projImg8 from "../../assets/imgs/chatbox.png";
import projImg9 from "../../assets/imgs/chatbox-q.png";
import colorSharp2 from "../../assets/imgs/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const project1 = [
    {
      title: "Home Page",
      description: "Displaying all leagues allows CRUD operations.",
      imgUrl: projImg1,
    },
    {
      title: "Nav Bar",
      description: "Animated with css and tailwind",
      imgUrl: projImg2,
    },
    {
      title: "League Registration",
      description: "Submits an API post request to add a new league.",
      imgUrl: projImg3,
    },
  ];
  const project2 = [
    {
      title: "Warehouses Page",
      description: "Displaying all warehouses from backend.",
      imgUrl: projImg4,
    },
    {
      title: "Inventory Page",
      description: "Displaying all inventory items from backend.",
      imgUrl: projImg5,
    },
    {
      title: "Inventory Search",
      description: "Displays search results from backend.",
      imgUrl: projImg6,
    },
  ];
  const project3 = [
    {
      title: "Chatbutton Main Page",
      description: "Able to be elegantely integrated into any website.",
      imgUrl: projImg7,
    },
    {
      title: "Chatbox",
      description: "Powered by OpenAI and tailored for the vendors needs.",
      imgUrl: projImg8,
    },
    {
      title: "Customers asking questions",
      description: "Any question can be asked and answered by the chatbot.",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="project__text">
                    <strong>Project Highlights:</strong> Developed a full CRUD
                    sports statistics tracker, enhancing data management skills.
                    Participated in an Agile development project, refining
                    teamwork and Scrum practices. Created an AI-powered chatbot
                    in a hackathon, advancing my AI integration and
                    problem-solving capabilities.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {project1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div className="project__links">
                          <a href="https://github.com/AviBrar/avi-brar-capstone-client">
                            GitHub Repository Client
                          </a>
                          <a href="https://github.com/AviBrar/avi-brar-capstone-server">
                            GitHub Repository Server
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
