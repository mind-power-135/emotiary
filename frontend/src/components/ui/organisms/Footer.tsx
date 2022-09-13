import React from "react"; 
import styled from "styled-components"; 

const FooterWrapper = styled.div`
    width: 100%; 
    margin: 0 auto;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`;

const About = styled.span`
    margin-bottom: 15px;
`;

const Copyright = styled.div`

`;

interface Props {
    children?: React.ReactNode;
  }  

const Footer: React.FC<Props> = (props: Props) => {
    const { children } = props;

    return (
        <FooterWrapper>
            <About>
                <a href="#x">About</a>
            </About>
            <Copyright>©2022 mindpower</Copyright>
        </FooterWrapper>
    );
};

export default Footer;
