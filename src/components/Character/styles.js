import styled from 'styled-components';



export const Container = styled.div`
    perspective: 1000px;

    .card-container {
        position: relative;       
        width: 280px;
        height: 363px;
        margin: 16px;
        transition: transform .4s;
        transform-style: preserve-3d;

        ${ ({ showCardBack }) => showCardBack && `transform: rotateY(180deg);`} 
    }

    
    .card-front, .card-back {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        box-shadow: rgba(0,0,0,.3) 8px 8px 16px;

        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-front {
        background: #242a33;
        padding: 26px;

        h2 {
            font-size: 18px;
            font-weight: 500;
            color: #fff;
            padding: 10px 0;
        }

        span {
            font-size: 14px;
            font-weight: 500;
            color: #909090;
            padding: 2px 0 16px 0;
            text-align: left;
        }

        img {
            width: 258px;
            margin-top: 0px;
        }


        .favorite-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: transparent;
            border: none;
            cursor: pointer;

            svg {
                font-size: 26px;
                color: rgba(255, 255, 255, 0.7);

                ${ ({ isFavorite }) => isFavorite && `color: #e60d23;`} 
                
                transition: all 0.2s ease;

                &:hover {
                    font-size: 28px;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }


        .more-info-btn {
            background-color: #ffcd00;
            font-size: 16px;
            border: none;
            padding: 8px 26px;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 4px;

            svg {
                font-size: 14px; 
                margin-right: 8px;   
            }

            &:hover {
                opacity: 0.8;
            }
        }
    }

    .card-back {
        transform: rotateY(-180deg);
        background: #242a33;
        padding: 16px;
        color: #fff;
        align-items: flex-start;
        
        span {
            padding: 2px 0;
            text-align: left;
            color: #909090;
        }

        .span-episodes {
            margin-top: 16px;
            color: #fff;
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
            background: #9f9f9f;
            padding: 3px 7px;

            ul {
                background-color: transparent;
                height: 128px;
                text-align: left;
                color: #141a19;

                scrollbar-color: #000;

                li {
                    list-style: none;
                }
            }

            &::-webkit-scrollbar {
                width: 8px;
            }
            
            &::-webkit-scrollbar-track {
                background-color: rgba(39, 39, 49, 0.3);
            }
            
            &::-webkit-scrollbar-thumb {
                background-color: rgba(39, 39, 49, 0.5);
            }
        }

        .return-btn {
            position: absolute;
            top: 16px;
            left: 16px;
            background-color: transparent;
            border: none;
            cursor: pointer;

            svg {
                font-size: 18px;
                color: rgba(255, 255, 255, 0.5);
                
                transition: all 0.4s ease;

                &:hover {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }   

    
`;