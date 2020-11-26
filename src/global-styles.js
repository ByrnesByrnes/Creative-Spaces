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

    .main {
        width: 1250px;
        margin: 100px auto;

        &-profile {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        
    }

    .add-space {
        
        position: relative;
        background: url('/images/barley-field.jpg');
        background-position: center;
        border-radius: 12px;
        height: 680px;
        max-width: 1200px;
        width: 100%;
        padding: 0 80px;
        margin: 100px  auto;

        &__form {
            position: absolute;
            display: flex;
            bottom: -10px;
            right: 50px;
            max-height: 350px;
        }
    }
`