import './Work.css';
import Project from './Components/Project';

const Work = () => {
    const openProjects = (projectname: string) => {
        switch (projectname) {
            case "advent calendar":
                window.location.href = "https://sp-advent.netlify.app";
                break;
            case "react activities":
                window.location.href = "https://sp-reactactivities.netlify.app";
                break;
            case "shop":
                window.location.href = "https://sp-webshop.netlify.app";                
                break;
            case "to do list":
                window.location.href = "https://sp-todo-list.netlify.app";
                break;
            case "nba":
                window.location.href = "https://sp-nba.netlify.app";
                break;
        }
    }

    const gitDireccion = (projectname: string) => {
        switch (projectname) {
            case "react activities":
                window.location.href = "https://github.com/SheilaPerez/React-Activities";
                break;
            case "advent calendar":
                window.location.href = "https://github.com/SheilaPerez/Advent-calendar";
                break;
            case "shop":
                window.location.href = "https://github.com/SheilaPerez/web-shop";                
                break;
            case "to do list":
                window.location.href = "https://github.com/SheilaPerez/ToDoList-draganddrop";
                break;
            case "nba":
                window.location.href = "https://github.com/SheilaPerez/NBA";
                break;
        }
    }

    return (
        <div id="work" className="workContent">
            <h1 className="workTitle">My projects.</h1>
            <div className="works">
                <Project handleClickOpenProject={openProjects} projectName={"react activities"} descriptionProject={"Do you want to practice React? Try to do this exercices by yourself"} techsDescription={"React, CSS3, typescript"} projectStyle={"activities"} handleClickGitDireccion={gitDireccion}></Project>
                <Project handleClickOpenProject={openProjects} projectName={"advent calendar"} descriptionProject={"Open windows and enjoy Christmas!"} techsDescription={"React, CSS3, typescript"} projectStyle={"advent"} handleClickGitDireccion={gitDireccion}></Project>
                <Project handleClickOpenProject={openProjects} projectName={"shop"} descriptionProject={"Minimal web shop"} techsDescription={"React, CSS3, typescript"} projectStyle={"shop"} handleClickGitDireccion={gitDireccion}></Project>
                <Project handleClickOpenProject={openProjects} projectName={"to do list"} descriptionProject={"(drag and drop) Organize your day"} techsDescription={"React, CSS3, typescript"} projectStyle={"toDo"} handleClickGitDireccion={gitDireccion}></Project>
                <Project handleClickOpenProject={openProjects} projectName={"nba"} descriptionProject={"Consult the teams and see the files of your favorite players"} techsDescription={"React, CSS3, typescript, API"} projectStyle={"nba"} handleClickGitDireccion={gitDireccion}></Project>
            </div>
        </div>
    )
};

export default Work;