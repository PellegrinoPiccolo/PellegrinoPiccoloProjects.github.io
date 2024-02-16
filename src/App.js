import Navbar from "./components/navbar/Navbar";
import ProjectCard from "./components/projectCard/ProjectCard";
import './style.scss'
import { projects_card } from "./project_card";

function App() {
  
  return (
    <div className="home">
      <h1>This is my projects collection</h1>
      <h2>For view my portfolio you can click on <a>this link</a></h2>
      <Navbar />
      <h1>My Projects</h1>
      <div className="card_container">
        {projects_card.map(project=>(
          <ProjectCard project={project}/>
        ))}
      </div>
    </div>
  );
}

export default App;
