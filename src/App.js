import ProjectCard from "./components/projectCard/ProjectCard";
import './style.scss'
import Logo from './media/logo.png'
import { projects_card } from "./project_card";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="home">
      <div className="top_section">
        <img src={Logo} alt="PellegrinoPiccolo"/>
        <div className="text_section">
          <h2 className="h_page">THIS IS ONLY MY PROJECTS COLLECTION</h2>
          <h2 className="h_page">IF YOU WANT VISIT MY PORTFOLIO YOU CAN CLICK ON <a href="https://pellegrinopiccolo.github.io/" target="_blank">THIS LINK (pellegrinopiccolo.github.io)</a></h2>
        </div>
      </div>
      <h1 className="center h_page">My Projects</h1>
      <div className="card_container">
        {projects_card.map(project=>(
          <ProjectCard project={project}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
