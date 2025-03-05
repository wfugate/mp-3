import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 80vw;
    margin: auto;
    `;

const StyledHeader = styled.header`
    font-family : 'Space Grotesk', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background: #bc6266;
    color: white;
    padding: 1vw;
    @media screen and (max-width: 900px) {
        align-items: center;
        width:100%
    }
    `;

const StyledTitle = styled.h1`
    margin: 0;
    font-size: calc(1rem + 1vw);
`;

const StyledSubtitle = styled.p`
    margin: 0;
    font-size: 0.8rem;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;

    @media screen and (max-width: 900px) {
        width:100%;
        margin-bottom: 2vw;
    }
`;
export default function Header() {
    return (
        <HeaderWrapper>
            <StyledHeader>
                <StyledDiv>
                <StyledTitle>William Fugate</StyledTitle>
                <StyledSubtitle>William Fugate's Online Resume</StyledSubtitle>
                </StyledDiv>
            </StyledHeader>
        </HeaderWrapper>
    )
}