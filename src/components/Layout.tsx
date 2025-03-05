import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const ContentWrapper = styled.div`
    width: 80vw;
    margin: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    background: #e7b9ab;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const Main = styled.main`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

export default function Layout({ children }) {
    return (
        <ContentWrapper>
            <Header />
            <Content>
                <Navigation />
                <Main>{children}</Main>
            </Content>
            <Footer />
        </ContentWrapper>
    );
}