import Layout from "../components/Layout";
import styled from "styled-components";
const profilePicture = '/profile_picture.png';

const StyledTitle = styled.h2`
    color: #6b6158;
    padding-left: 4vw;
    padding-top: 0;
    font-size: 2em;
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledParagraph = styled.p`
    display: flex;
    align-items: center;
    padding: 1vw 4vw;
    color: #6b6158;
    font-size: calc(1em);
    font-family: 'Space Grotesk', sans-serif;
`;

const StyledImage = styled.img`
    margin: 6vw auto;
    display: block;
    padding: 0;
    max-width: 100%;
`;

export default function HomePage() {
    return (
        <Layout>
            <StyledImage src={profilePicture} alt="Profile picture" />
            <StyledTitle>About Me</StyledTitle>
            <StyledParagraph>
                Hello, my name is William Fugate, and I am a third-year Computer Science undergraduate student at Boston University with a minor in Data Science. As a dedicated and motivated Computer Science student, I am passionate about leveraging technology to solve real-world problems. With a solid foundation in programming, algorithms, and data structures, I am eager to apply my skills in software development, problem-solving, and analytical thinking to a team while continuing to grow professionally in the field of technology.
            </StyledParagraph>
        </Layout>
    );
}

