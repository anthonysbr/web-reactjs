import React from 'react';
import './Project.css';
// import ProjectTree from './projectTree/ProjectTree'
// import ProjectGallery from './projectGallery/ProjectGallery';
function Project() {
    return (
        <div className="project">
            <div className="projectHeader">Some Projects</div>
            <div className="text-center orange">Goes here with GreenSock or 3Djs</div>
            {/* <div className="d-flex justify-content-center"><ProjectTree/></div> */}
            {/* <div className="projectHeader mt-4">Projects Gallery</div> */}
            {/* <div className="mb-4"> <ProjectGallery/> </div> */}
        </div>
    );
}
export default Project;