import './About.css';

const About = () => {
    return (
        <div id="aboutme" className="aboutContent">
            <h1 className="aboutTitle">About me.</h1>
            <p className="text">
                I've always liked computer science and even though my dream was being a childhood education teacher
                I've recently discovered that this is my passion too<br />
                After years working with kids, I wanted to rebuild my professional career and the pandemic made that possible in so many ways.
                Having a Frontend Architect, with me at home, has helped me to learn in a different way and learning some other things rather than what bootcamp gave me.
                I'm eager to keep learning and join some team that allows me that.
            </p>
            <div className="cardsAboutContent">
                <div className={`${"content"} ${"contentTech"} `}>
                    <div className={"headerContent"}>
                        <div className={`${"headerCircleTechs"} ${"circle"} ${"circle1"}`}></div>
                        <div className={`${"headerCircleTechs"} ${"circle"}`}></div>
                        <div className={`${"headerCircleTechs"} ${"circle"}`}></div>
                    </div>  
                    <div className={"descriptionContent"}>
                        <h1 className={`${"title"} ${"techTitle"}`}>Techs</h1>
                        <div className={"techs"}>
                            <div>
                                <p>React</p>
                                <p>TypeScript</p>
                                <p>JavaScript</p>
                                <p>React-testing-library</p>
                            </div>
                            <div>
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>SCRUM</p>
                                <p>Jira</p>
                            </div>
                            <div>
                                <p>Axios/Fetch</p>
                                <p>Context API</p>
                                <p>Hooks</p> 
                        </div>
                        </div>
                    </div>
                </div>
                <div className={`${"content"} ${"contentAptitud"}`}>
                    <div className={`${"headerContent"} ${"headerContentTech"} `}>
                        <div className={`${"headerCircleTechs"} ${"circle"}  ${"circle1"}`}></div>
                        <div className={`${"headerCircleTechs"} ${"circle"}`}></div>
                        <div className={`${"headerCircleTechs"} ${"circle"}`}></div>
                    </div>  
                    <div className={"descriptionContent"}>
                        <h1 className={`${"title"} ${"aptitudTitle"}`}>Aptituds</h1>
                        <div>
                            <p className={"textDescription"}>Constant self-study</p>
                            <p className={"textDescription"}>Professionalism and responsibility</p>
                            <p className={"textDescription"}>Team-player</p>
                            <p className={"textDescription"}>Imagination, creativity and pleasure for visual aesthetics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;