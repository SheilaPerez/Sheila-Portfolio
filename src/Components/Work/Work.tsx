import './Work.css';

const Work = () => {
    return (
        <div id="work" className="workContent">
            <h1 className="workTitle">My projects.</h1>
            <div className="works">
                <div className="projectContent">
                    <div className={`${"advent"} ${"imageStyle"}`}></div>
                    <div className="explicationContent">
                        <p className="titleProject">advent calendar</p>
                        <p className="descriptionProject">Open the windows and enjoy Christmas!</p>
                        <p className="descriptionProject">React, CSS3, typescript</p>
                    </div>
                </div>
                <div className="projectContent">
                    <div className={`${"activities"} ${"imageStyle"}`}></div>
                    <div className="explicationContent">
                        <p className="titleProject">react activities</p>
                        <p className="descriptionProject">Do you wanna practice React? Try to do this exercices by yourself </p>
                        <p className="descriptionProject">React, CSS3, typescript</p>
                    </div>
                </div>
                <div className="projectContent">
                    <div className={`${"shop"} ${"imageStyle"}`}></div>
                    <div className="explicationContent">
                        <p className="titleProject">shop</p>
                        <p className="descriptionProject">Minimal web shop</p>
                        <p className="descriptionProject">React, CSS3, typescript</p>
                    </div>
                </div>
                <div className="projectContent">
                    <div className={`${"toDo"} ${"imageStyle"}`}></div>
                    <div className="explicationContent">
                        <p className="titleProject">to do list</p>
                        <p className="descriptionProject">(drag and drop) Organize your day</p>
                        <p className="descriptionProject">React, CSS3, typescript</p>
                    </div>
                </div>
                <div className="projectContent">
                    <div className={`${"nba"} ${"imageStyle"}`}></div>
                    <div className="explicationContent">
                        <p className="titleProject">nba</p>
                        <p className="descriptionProject">Consult the teams and see the files of your favorite players</p>
                        <p className="descriptionProject">React, CSS3, typescript</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Work;