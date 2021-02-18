import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    width: 100%;
    padding: 0 46px;
    background-color: #242a33;
    z-index: 999;

    display:flex;
    flex-wrap: wrap;                        
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        font-weight: 400;
        color: #ffcd00;
        padding: 16px 0;
    }

    .div-buttons {
        display:flex;                        
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        button, a {
            border: none;
            background-color: transparent;
            margin: 0 8px;
            cursor: pointer;

            svg {
                color: #909090;
                font-size: 26px;
            }

        }
    }
`;