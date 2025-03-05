import Layout from './Layout';
import styled from 'styled-components';


const StyledList = styled.ul`
    list-style-type: square;
    margin-top: 2vw;
    padding-inline-start: 40px;
    box-sizing: border-box;
`;

const StyledListItem = styled.li`
    font-family: 'Space Grotesk', sans-serif;
    background: #f7f1ed;
    padding: 0.5vw;
    margin: 0.8vw;
    border-radius: 5px;
    width: 80%
`;

const StyledListTitle = styled.h2`
    font-family : 'Space Grotesk', sans-serif;
    color: #bc6266;
    padding-bottom: 0;
    padding-top: 2vw;
    padding-left: 2vw;
    margin: 0;
`;

export default function EducationPage() {
    return (
        <Layout>
            <StyledListTitle>Education</StyledListTitle>
            <StyledList>
                <StyledListItem>
                    Master of Science in Computer Science
                    Silicon Valley Institute of Technology (SVIT) – Palo Alto, CA
                    Graduation Year: 2018
                </StyledListItem>
                <StyledListItem>
                    Bachelor of Science in Computer Science
                    Pacific Coast University – San Diego, CA
                    Graduation Year: 2016
                </StyledListItem>
                <StyledListItem>
                    High School Diploma
                    Westbrook High School – Seattle, WA
                    Graduation Year: 2012
                </StyledListItem>
            </StyledList>
            <StyledListTitle>Certifications</StyledListTitle>
            <StyledList>
                <StyledListItem>AWS Certified Solutions Architect – Associate (2020)</StyledListItem>
                <StyledListItem>Google Professional Cloud Developer (2019)</StyledListItem>
                <StyledListItem>Microsoft Azure Fundamentals (2021)</StyledListItem>
            </StyledList>
            <StyledListTitle>Additional Education</StyledListTitle>
            <StyledList>
                <StyledListItem>
                    Deep Learning Specialization
                    Coursera / DeepLearning.ai
                    Completed: March 2019
                </StyledListItem>
                <StyledListItem>
                    Full-Stack Web Development Bootcamp
                    Tech Accelerator Institute – San Francisco, CA
                    Completed: Summer 2017
                </StyledListItem>
            </StyledList>
        </Layout>
    );
}