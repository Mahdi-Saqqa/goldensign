import "../styles/Home.css";
const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl: "./works/1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "./works/2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: "./works/3.jpg",
  }
  // Add more projects as needed
];
const Home = () => {
  return (
    <div className="w-100 d-flex flex-column col">
      <div className="row m-0 landing">
        <div className="d-flex justify-content-center mb-3">
          <img
            src="./logo.png"
            className="w-50 mx-auto fade-in mt-5"
            alt="Web site logo"
          />
        </div>
      </div>
      <div className="row m-0 bg-dark-1">
        <div className="d-flex justify-content-center">
          <h1 className="text-center">Projects</h1>
        </div>
        <div className="project-gallery ">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                              {/* <div className="project-title">{project.title}</div> */}
            </div>

            </div>
          ))}
        </div>
        </div>




      </div>
  );
};

export default Home;
