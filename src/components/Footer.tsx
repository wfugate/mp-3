import styled from 'styled-components';
import {Link} from "react-router-dom";

const FooterWrapper = styled.footer`
    width: 100%;
    height: fit-content;
    background: #bc6266;
    color: white;
    text-align: center;
    align-items: center;
    padding-bottom: 0.5vw;
    padding-top: 0.5vw;
    font-family : 'Space Grotesk', sans-serif;
    font-size: 1em;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            All Rights Reserved by William Fugate <Link to="">Credits</Link>&copy;
        </FooterWrapper>
    )
}