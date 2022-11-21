import './Contact.css';

const Contact = () => {
    const handleClickLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/sheilaperezg/"
    }

    return (
        <div id="contact" className="contactContent">
            <h1 className="contactTitle">Get in touch!</h1>
                <div className='infoContainer'>
                    <div className="icons">
                        <div onClick={handleClickLinkedin}  className="iconDescriptionContent">
                            <div className={`${"linkedin"} ${"iconStyle"}`}></div>
                            <p>Linkedin</p>
                        </div>
                        <a href="mailto:sheilapg26@gmail.com" className="iconDescriptionContent">
                            <div className={`${"email"} ${"iconStyle"}`}></div>
                            <p>E-mail</p>
                        </a>
                    </div>
                    <div className="girlContainer">
                        <div className="girlImage"></div>
                        <div className="whiteDiv"></div>
                    </div>
                </div>
        </div>
    )
};

export default Contact;