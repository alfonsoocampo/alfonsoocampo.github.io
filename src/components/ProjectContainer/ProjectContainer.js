import React from 'react';
import projects from '../../constants/List';

function ProjectContainer() {
    
        console.log(projects.projects);
        return (
            <div>
                {projects.projects.map((project, index) => (
                        <div key={index}> 
                            <h2>{project.name}</h2>
                            {<ul>
                                <li>{project.description}</li>
                                <li>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}{techIndex < project.technologies.length - 1 ? ', ' : ''}</span>
                                ))}
                                </li> 
                                <li>{project.img}</li>
                            </ul> }
                        </div>
                    ))
                }

            </div>
        )
}

export default ProjectContainer;