import Layout from './Layout';
import styled from 'styled-components';
const StyledDiv = styled.div`
    padding: 0;
`;

const StyledList = styled.ul`
    list-style-type: none;
    
`;

const StyledListItem = styled.li`
    margin: 0 0 0 2vw;
`;

const StyledTitle = styled.h2`
    color: #6b6158;
    padding: 2vw 0 0 2vw;
    margin: 0;
    font-size: 2em;
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledSubtitle = styled.h6`
    color: #6b6158;
    font-size: 1.3em;
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledDescription = styled.p`
    color: #6b6158;
    font-size: 1.3em;
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledInsideList = styled.ul`
    list-style: square;
    padding-inline-start: 30px;
`;

const StyledInsideListItem = styled.li`
    font-size: 1.2em;
    padding: 0.5vw;
    color: #6b6158;
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledSmallerTitle = styled.h3`
    color: #6b6158;
    text-align: center;
    padding: 2vw 0 4vw 0;
    font-family : 'Space Grotesk', sans-serif;
`;
export default function ExperiencePage() {
    return (
        <Layout>
            <StyledDiv>
                <StyledTitle>Experience</StyledTitle>
                <StyledList>
                    <StyledListItem>
                        <StyledSmallerTitle>Junior Software Developer</StyledSmallerTitle>
                        <StyledSubtitle>Innovatech Labs – Palo Alto, CA</StyledSubtitle>
                        <StyledDescription>June 2018 – February 2020</StyledDescription>
                        <StyledInsideList>
                            <StyledInsideListItem>Contributed to the development of cloud-based solutions using AWS and Docker for containerization.</StyledInsideListItem>
                            <StyledInsideListItem>Assisted in the optimization of database queries, improving application performance by 20%.</StyledInsideListItem>
                            <StyledInsideListItem>Developed and maintained internal tools that streamlined team communication and task management.</StyledInsideListItem>
                            <StyledInsideListItem>Worked on a team to integrate machine learning models for predictive analytics in client projects.</StyledInsideListItem>
                            <StyledInsideListItem>Conducted rigorous unit and integration testing to ensure reliable and bug-free releases.</StyledInsideListItem>
                        </StyledInsideList>
                    </StyledListItem>

                    <StyledListItem>
                        <StyledSmallerTitle>Intern – Frontend Developer</StyledSmallerTitle>
                        <StyledSubtitle>BrightFuture Tech – Mountain View, CA</StyledSubtitle>
                        <StyledDescription>June 2017 – August 2017</StyledDescription>
                        <StyledInsideList>
                            <StyledInsideListItem>Assisted in the creation of responsive web pages with HTML5, CSS3, and JavaScript.</StyledInsideListItem>
                            <StyledInsideListItem>Participated in the design and user interface (UI) testing, ensuring optimal user experience (UX).</StyledInsideListItem>
                            <StyledInsideListItem>Worked with senior developers to implement interactive features for the company's e-commerce platform.</StyledInsideListItem>
                            <StyledInsideListItem>Performed debugging and code optimization to improve page load times and mobile compatibility.</StyledInsideListItem>
                            <StyledInsideListItem>Collaborated in daily stand-up meetings and sprint planning using Agile methodologies.</StyledInsideListItem>
                        </StyledInsideList>
                    </StyledListItem>
                </StyledList>
            </StyledDiv>
        </Layout>
    );
}