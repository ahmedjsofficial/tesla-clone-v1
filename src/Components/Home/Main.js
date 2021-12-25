import React from 'react';
import styled from 'styled-components';


const Main = ({ title, text, leftBtnTheme, rightBtnTheme, backgroundImg, dropDownArrow, ifDropDownExits, ifBlackColorBtn }) => {
    return (
        <>
            <Background style={{background: `url(${backgroundImg})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                <Container>
                    <TextItem>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </TextItem>
                    <ButtonItem>
                        <ButtonGroup>
                            <button type="button" className={`${ifBlackColorBtn && "BlackColor"}`}>{leftBtnTheme}</button>
                            {
                                rightBtnTheme &&
                                    <button type="button">{rightBtnTheme}</button>
                            }
                        </ButtonGroup>
                        {
                            ifDropDownExits &&
                                <img src={dropDownArrow} alt="DropDown/Arrow" />
                        }
                    </ButtonItem>
                </Container>
            </Background>
        </>
    );
};
const Background = styled.main`
    min-height: 100vh;
    scroll-snap-align: start;

    @media screen and (min-width: 768px) and (max-width: 1200px){
        min-height: 87vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        min-height: 77vh;
    }
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;

    display: flex;
    min-height: 91vh;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) and (max-width: 1200px){
        min-height: 83vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        min-height: 69vh;
    }
`;
const TextItem = styled.div`
    padding-top: 11rem;
    @media screen and (min-width: 768px) and (max-width: 1200px){
        padding-top: 9rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px){
        padding-top: 8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        padding-top: 4rem;
    }
    h1{
        font-size: 3rem;
        font-weight: 500 !important;
        @media screen and (min-width: 550px) and (max-width: 767px){
            font-size: 2.3rem;
        }
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 1.7rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 1.3rem;
        }
    }
    p{
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.8rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.7rem;
        }
    }
`;
const ButtonItem = styled.div`
    overflow: hidden;
    img{
        height: 24px;
        width: 24px;
        margin: 3vh 2rem 0 0;
        z-index: 2;
        position: relative;
        animation: animateDown 1.5s infinite;
        @media screen and (max-width: 991px){
            margin: 1vh 0rem 0 0;
            height: 17px;
            width: 17px;
            object-fit: cover;
        }
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
    }
    button{        
        outline: none;
        border: none;
        padding: 0.8rem 5rem;
        border-radius: 100px;
        opacity: 0.85;
        z-index: 1500;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 400 !important;
        margin: 0 10px;    
        &:nth-child(1){
            color: #fff;
            background: #171A20CC;
        }
        &:nth-child(2){
            color: #000;
            background: #f9f9f9;
        }
        @media screen and (min-width: 425px) and (max-width: 991px){
            font-size: 11px;
            margin: 9px 0;
            width: 17rem;
        }
        @media screen and (min-width: 280px) and (max-width: 425px){
            margin: 5px 0;
            width: 14rem;
            padding: 0.55rem 2.5rem;
            font-size: 0.75rem;
        }
    }
`;
export default Main;
