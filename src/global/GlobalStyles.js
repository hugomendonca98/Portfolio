import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #1C1C1C !important;
    }

body::-webkit-scrollbar-track
{
	
	background-color: #404040;
}

body::-webkit-scrollbar
{
	width: 10px;
	background-color: #404040;
}

body::-webkit-scrollbar-thumb
{
	background-color: #2d2d2d;
    
}


`

export default GlobalStyle;