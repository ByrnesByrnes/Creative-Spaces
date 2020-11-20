import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle
`
    html, 
    body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            
            font-size: 16px;
            margin: 0;
            color: rgb(34, 34, 34);
            box-sizing: border-box;
            background-color: #fff;
    }

    .add-space {
        position: relative;
        background: url('/images/barley-field.jpg');
        border-radius: 12px;
        height: 500px;
        max-width: 1200px;
        width: 100%;
        margin: 100px  auto;

        &__form {
            position: absolute;
            display: flex;
            bottom: -140px;
            right: 50px;
        }
    }
`