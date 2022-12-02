import { FC } from 'react';
import { FaGithub } from "react-icons/fa";
import './Project.css';
interface Props {
    handleClickOpenProject: (projectName: string) => void;
    projectName: string;
    descriptionProject: string;
    techsDescription: string;
    projectStyle: string;
    handleClickGitDireccion: (projectName: string) => void;
}

const Project: FC<Props> = ({handleClickOpenProject, projectName, descriptionProject, techsDescription, projectStyle, handleClickGitDireccion}) => {

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
                    <div onClick={() => handleClickGitDireccion(projectName)} className='gitIcon'><FaGithub size={20} /></div>
                </div>
            </div>
        </div>
        

    )
};

export default Project;