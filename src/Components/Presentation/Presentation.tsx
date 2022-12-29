import { useState } from 'react';
import './Presentation.css';

const Presentation = () => {
    const [hoverPic, setHoverPic] = useState<Boolean>(false);
    const [hoverConfetti, setHoverConfetti] = useState<Boolean>(false);
    const [hoverCode, setHoverCode] = useState<Boolean>(false);
        
    const handleClickCode = () => {
        window.location.href = "https://github.com/SheilaPerez";
    }

    return (
        <div className="presentationContent">
            <div className="photoContainer">
                {hoverPic ? <section>
                                <span className="imageHover span"></span>
                                <span className="imageHover span"></span>
                                <span className="imageHover span"></span>
                                <span className="imageHover span"></span>
                            </section> 
                          : <div>
                                <div className="photoMarc"></div> 
                                <div className="imageHover"></div>                        
                            </div>}
                {hoverConfetti && <div className="doubleConfetti"></div>}
            </div>
            <div className="descriptionContainer">
                {hoverConfetti && <div className="confetti"></div>}  
                <h2 onMouseOver={() => setHoverPic(!hoverPic)} className="name">Hi, I'm Sheila</h2>
                <h1 className="description">frontend developer, and I <span className="borderLetter" onMouseOver={() => setHoverConfetti(!hoverConfetti)}>like</span> make diferents projects with <span onMouseOver={() => setHoverCode(!hoverCode)} onClick={handleClickCode} className="borderLetter">code</span>.</h1>
                {hoverCode &&
                    <div>
                        <p className="code">
                            <span className="titleWord1">&lt;a&gt;</span>
                            <span className={`${"titleWord"} ${"titleWord2"}`}>https:</span>
                            <span className={`${"titleWord"} ${"titleWord3"}`}>//github.com/</span>
                            <span className={`${"titleWord"} ${"titleWord4"}`}>SheilaPerez</span>
                            <span className={"titleWord1"}>&lt;/a&gt;</span>
                        </p>
                    </div>
                }  
            </div>
        </div>     
    )
};

export default Presentation;