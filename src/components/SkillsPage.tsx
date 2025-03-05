import Layout from './Layout';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: #6b6158;
    padding: 2vw 0 0 2vw;
    font-size: 2em;
    font-family : 'Space Grotesk', sans-serif;
`;
const StyledSkill = styled.h2`
    padding: 2vw;
    color: #6b6158;
    font-family : 'Space Grotesk', sans-serif;
`;
const StyledList = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin: 0;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
`;

const StyledListItem = styled.li`
    padding: 0.6vw 0;
    color: #6b6158;
    font-size: 1.2em;
    font-family : 'Space Grotesk', sans-serif;
`;

export default function SkillsPage() {
    return (
        <Layout>
            <StyledTitle>Soft Skills (By Category)</StyledTitle>
            <StyledSkill>Problem-Solving & Critical Thinking</StyledSkill>
            <StyledList>
                <StyledListItem>Strong analytical and troubleshooting abilities</StyledListItem>
                <StyledListItem>
                    Ability to break down complex problems into manageable solutions
                </StyledListItem>
                <StyledListItem>
                    Quick adaptability to new challenges and technologies
                </StyledListItem>
            </StyledList>
            <StyledSkill>Communication & Collaboration</StyledSkill>
            <StyledList>
                <StyledListItem>
                    Effective technical and non-technical communication
                </StyledListItem>
                <StyledListItem>
                    Experience explaining complex topics to non-technical audiences
                </StyledListItem>
                <StyledListItem>
                    Strong team collaboration skills in agile and cross-functional environments
                </StyledListItem>
            </StyledList>
            <StyledSkill>Creativity & Innovation</StyledSkill>
            <StyledList>
                <StyledListItem>
                    Thinking outside the box for problem-solving
                </StyledListItem>
                <StyledListItem>
                    Ability to develop creative solutions and optimize workflows
                </StyledListItem>
                <StyledListItem>
                    Enthusiasm and dedication to improving software and user experience
                </StyledListItem>
            </StyledList>

        </Layout>
    );
}