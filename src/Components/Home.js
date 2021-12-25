import React from 'react';
import styled from 'styled-components';
import Main from './Home/Main';

import bgImg1 from './Images/tesla-car-1.jpg';
import bgImg2 from './Images/tesla-car-2.jpg';
import bgImg3 from './Images/tesla-car-3.jpg';
import bgImg4 from './Images/tesla-car-4.jpg';
import bgImg5 from './Images/solar-panels.jpeg';
import bgImg6 from './Images/solar-roof.jpg';
import bgImg7 from './Images/Desktop-Accessories.jpg';

import downArrow from './Images/down-arrow.svg';

const Home = () => {
    return (
        <>
            <Section>
                <Main
                    title="Model S"
                    text="Order Online for Touchless Delivery"
                    leftBtnTheme="Custom Order"
                    rightBtnTheme="Existing Inventory"
                    backgroundImg={bgImg1}
                    dropDownArrow={downArrow}
                    ifDropDownExits
                />
                <Main
                    title="Model Y"
                    text="Order Online for Touchless Delivery"
                    leftBtnTheme="Custom Order"
                    rightBtnTheme="Existing Inventory"
                    backgroundImg={bgImg2}
                />
                <Main
                    title="Model 3"
                    text="Order Online for Touchless Delivery"
                    leftBtnTheme="Custom Order"
                    rightBtnTheme="Existing Inventory"
                    backgroundImg={bgImg3}
                />
                <Main
                    title="Model X"
                    text="Order Online for Touchless Delivery"
                    leftBtnTheme="Custom Order"
                    rightBtnTheme="Existing Inventory"
                    backgroundImg={bgImg4}
                    ifBlackColorBtn
                />
                <Main
                    title="Lowest Solar Panels in America"
                    text="Money Back Guarantee"
                    leftBtnTheme="Order Now"
                    rightBtnTheme="Learn More"
                    backgroundImg={bgImg5}
                    ifBlackColorBtn
                />
                <Main
                    title="Solar for New Roofs"
                    text="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                    leftBtnTheme="Order Now"
                    rightBtnTheme="Learn More"
                    backgroundImg={bgImg6}
                    ifBlackColorBtn
                />
                <Main
                    title="Accessories"
                    text=""
                    leftBtnTheme="Shope Now"
                    backgroundImg={bgImg7}
                    ifBlackColorBtn
                />
            </Section>
        </>
    );
};
const Section = styled.section`
    scroll-snap-type: y mandatory;
    overflow: auto;
    height: 100vh;
`;
export default Home;
