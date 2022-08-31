import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import './App.css'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* other styles */
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  html{
    font-size: 10px;
  }
  i> svg{
    width: 2rem; height: 2rem;
  }
`;

export default GlobalStyle;
