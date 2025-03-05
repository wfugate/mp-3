import Layout from './Layout';
import styled from 'styled-components';
import Calculator from './Calculator';
const StyledTitle = styled.h2`
    color: #6b6158;
    padding: 2vw 0 0 2vw;
    font-size: 2em;
    font-family : 'Space Grotesk', sans-serif;
`;

const StyledNameTag = styled.h3`
    color: #6b6158;
    text-align: center;
    padding: 2vw 0 4vw 0;
    font-family : 'Space Grotesk', sans-serif;
`;

const StyledOuterList = styled.ul`
    list-style-type: none;

`;

const StyledList = styled.ul`
    list-style: square;
    font-family : 'Space Grotesk', sans-serif;
    padding-inline-start: 40px;
`;

const StyledTechTag = styled.h6`
    color: #6b6158;
    font-size: 1.3em;
    font-family : 'Space Grotesk', sans-serif;
    padding-bottom: 0.5vw;
`;

const StyledP = styled.p`
    color: #6b6158;
    font-size: 1.3em;
    font-family : 'Space Grotesk', sans-serif;
`;

const StyledListItem = styled.li`
    font-size: 1.2em;
    padding: 0.5vw;
    color: #6b6158;
`;

const StyledContainer = styled.div`
    margin-left: 3vw;
`;

export default function ProjectsPage() {
    return (
        <Layout>
            <StyledTitle>Projects</StyledTitle>
            <StyledOuterList>
                <li>
                    <StyledNameTag>AI-Powered Resume Analyzer</StyledNameTag>
                    <StyledContainer>
                        <StyledTechTag>Technologies: Python, NLP (spaCy, NLTK), Flask, MongoDB, React</StyledTechTag>
                        <StyledP>Description:
                            Developed a web application that analyzes resumes and job descriptions to assess
                            compatibility using Natural Language Processing (NLP).</StyledP>
                        <StyledList className="inside-list">
                            <StyledListItem>Achieved 85% accuracy in predicting job fit by using TF-IDF and word embeddings.</StyledListItem>
                            <StyledListItem>Implemented automated skill extraction, categorizing experience levels for job
                                matching.
                            </StyledListItem>
                            <StyledListItem>Created a responsive React UI for resume upload, feedback, and job recommendations.</StyledListItem>
                            <StyledListItem>Optimized query performance with MongoDB, reducing response time by 40%.</StyledListItem>
                        </StyledList>
                    </StyledContainer>
                </li>
            </StyledOuterList>
            <Calculator />
        </Layout>
    );
}