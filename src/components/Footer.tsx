import styled from 'styled-components';

const FooterWrapper = styled.footer`
    width: 100%;
    background: #bc6266;
    color: white;
    text-align: center;
    align-items: center;
    height: 2vw;
    padding-top: 0.5vw;
    padding-bottom: 1.56em;
    font-family : 'Space Grotesk', sans-serif;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            All Rights Reserved by William Fugate <a href="">Credits</a>&copy;
        </FooterWrapper>
    )
}