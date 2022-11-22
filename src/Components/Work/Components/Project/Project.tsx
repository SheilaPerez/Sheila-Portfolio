import { FC } from 'react';
import { FaGithub } from "react-icons/fa";
import './Project.css';
interface Props {
    handleClickOpenProject: (projectName: string) => void;
    projectName: string;
    descriptionProject: string;
    techsDescription: string;
    projectStyle: string;
}

const Project: FC<Props> = ({handleClickOpenProject, projectName, descriptionProject, techsDescription, projectStyle}) => {

    return (
        <div className="projectContent" >
            <div onClick={() => handleClickOpenProject(projectName)}>
                <div className={`${projectStyle} ${"imageStyle"}`}></div>
            </div>
            <div className="explicationContent">
                <p className="titleProject">{projectName}</p>
                <p className="descriptionProject">{descriptionProject}</p>
                <div className='flexGithub'>
                    <p className="descriptionProject">{techsDescription} </p>
                    <p className='gitIcon'><FaGithub size={20} /></p>
                </div>
            </div>
        </div>
        

    )
};

export default Project;