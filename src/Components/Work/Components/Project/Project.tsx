import { FC } from 'react';
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
        <div className="projectContent" onClick={() => handleClickOpenProject(projectName)}>
            <div className={`${projectStyle} ${"imageStyle"}`}></div>
            <div className="explicationContent">
                <p className="titleProject">{projectName}</p>
                <p className="descriptionProject">{descriptionProject}</p>
                <p className="descriptionProject">{techsDescription}</p>
            </div>
        </div>
    )
};

export default Project;