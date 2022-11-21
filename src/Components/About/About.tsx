import './About.css';

const About = () => {
    return (
        <div id="aboutme" className="aboutContent">
            <h1 className="aboutTitle">About me.</h1>
            <p className="text">The quick, brown fox jumps over a lazy dog.
                DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
                Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
                Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
                Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz.
                How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz.
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