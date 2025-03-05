import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    height: auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #bc6266;
    list-style: none;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 900px) {
        height: 8vh;
        width: 100%;
        flex-direction: row;
`;

const StyledUL = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 900px) {
        flex-direction: row;
        padding-bottom: 5vw;
`;

const StyledLI = styled.li`
    padding: 0.5vw 1vw;
    background-color: #d27d54;
    border-radius: 30px;
    margin-top: 2vw;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: calc(4px + 1.6vw);
    font-weight: bold;
    color: white;
`;
export default function Navigation() {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLI><StyledLink to="/">Home</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/education">Education</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/experience">Experience</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/references">References</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/projects">Projects</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/skills">Soft Skills</StyledLink></StyledLI>
            </StyledUL>
        </StyledNav>
    )
}