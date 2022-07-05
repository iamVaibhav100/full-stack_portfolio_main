import React from "react";
import ContactStyle from "./ContactStyle";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MovingTextContainer from "../../components/ReactMovingTextContainer/MovingTextContainer"
import styled from "styled-components";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const date = new Date();
const year = date.getFullYear();

const ModifiedMovingTextContainer = styled(MovingTextContainer)`

@media only screen and (max-width: 336px){
    padding-left: 200%;
}
`;
const Contact = (props) => {

    // When link is clicked go to the top of the page
    const linkClickHandler = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    return (
        <ContactStyle>
            <div className="contact">
                <SectionHeading isSecondary={false}>Let's Talk</SectionHeading>
                <a href="mailto:vaibhavshukla1967@gmail.com" className="contact_mail">vaibhavshukla1967@gmail.com</a>
                <div className="contact_social_icon">
                    <a href="https://github.com/iamVaibhav100"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/iamvaibhav100/"><LinkedInIcon /></a>
                </div>
                <div className="contact_menu_link">
                    <Link onClick={linkClickHandler} to="/">Home</Link>
                    <Link onClick={linkClickHandler} to="/about">About</Link>
                    <Link onClick={linkClickHandler} to="/skill">Skill</Link>
                    <Link onClick={linkClickHandler} to="/projects">Project</Link>
                </div>
            </div>
            <div className="contact_moivng_text_footer">
                <ModifiedMovingTextContainer
                    movingTextText={`© ${year} Vaibhav Shukla`}
                    minFontSize="1vw"
                    maxFontSize="16px"
                    movingTextColor="#28282B"
                    movingTextFontWeight="900"
                />
            </div>
        </ContactStyle>
    )
}

export default Contact