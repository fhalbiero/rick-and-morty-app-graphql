import styled from 'styled-components';

export const Container = styled.div`
    perspective: 1000px; 

    &:hover .card-container {
        transform: rotateY(180deg);
    }

    .card-container {
        position: relative;       
        width: 320px;
        height: 363px;
        margin: 26px;
        transition: transform .4s;
        transform-style: preserve-3d;
    }

    
    .card-front, .card-back {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: rgba(0,0,0,.3) 8px 8px 16px;

        width: 100%;
        height: 100%;
        padding: 26px;
        backface-visibility: hidden;
    }

    .card-front {
        background: #242a33;
        padding: 26px;

        h2 {
            font-size: 20px;
            font-weight: 500;
            color: #fff;
            padding-top: 8px;
        }

        span {
            font-size: 14px;
            font-weight: 500;
            color: #909090;
            padding: 2px 0 16px 0;
            text-align: left;
        }

        img {
            margin-top: 20px;
            height: 280px;
        }


        .heart {
            position: absolute;
            top: 26px;
            left: 26px;
            font-size: 20px;
            color: #e85355;
        }
    }

    .card-back {
        transform: rotateY(180deg);
        background: #242a33;
        color: #fff;
        align-items: flex-start;
        
        span {
            padding: 2px 0;
            text-align: left;
            color: #909090;
        }

        .span-episodes {
            margin-top: 16px;
        }

        h4 {
            font-size: 20px;
            text-align: center;
            width: 100%;
            margin-bottom: 16px;
        }

        .episodes {
            width: 100%;
            margin-top: 8px;
            overflow: overlay;
            background: #015356;

            ul {
                background-color: transparent;
                height: 128px;
                text-align: left;

                li {
                    list-style: none;
                }
            }

        }

        .favorite-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            //transition: 0.4s cubic-bezier(1, -1, 0, 2);

            svg {
                font-size: 26px;
                color: rgba(255, 255, 255, 0.5);
                
                transition: all 0.4s ease;

                &:hover {
                    font-size: 32px;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }   

    
`;