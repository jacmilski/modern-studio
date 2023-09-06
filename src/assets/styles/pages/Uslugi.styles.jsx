// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { StyledList } from '../../../components/StyledList/StyledList.styles';
import HighLightedHeading from '../../../components/HighLightedHeading/HighLightedHeading';

export const StyledHighligtedHeading = styled(HighLightedHeading)`
    margin-bottom: 50px;
`;

export const Hero = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95vh;
    margin-bottom: 100px;

    h1 {
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.headingMobile};

        ${({ theme }) => theme.mq.tablet} {
            width: 60%;
        }
    }

    ${({ theme }) => theme.mq.tablet} {
        height: 70vh;
    }

    ${({ theme }) => theme.mq.desktop} {
        height: 80vh;

        h1 {
            max-width: 500px;
            align-self: center;
        }
    }
`;

export const HeroInfo = styled.div`

    a {
        color: black;
        font-weight: 700;
        text-decoration: none;
        position: relative;
        left: 30px;
        
        &::before {
            display: inline-block;
            content: '';
            position: absolute;
            background-image: url("${({ data }) => data.arrow.publicURL}");
            background-repeat: no-repeat;
            background-size: contain;
            width: 20px;
            height: 20px;
            top: 50%;
            left: -30px;
            background-position: 0 50%;
            transform: translateY(-50%) rotate(90deg);
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;

        &::before {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: ${({ theme }) => theme.color.steel};
            transform: translateY(-30px);
        }
    }

    p {
        margin: 0;
        max-width: 60%;
    }
`;

export const HeroImage = styled(({ imageSource, ...props }) => <div {...props} />)`
    background-image: url("${({ imageSource }) => imageSource}");
    background-position: 50% 50%;
    background-size: cover;
    width: 90%;
    height: 60%;
    position: absolute;
    z-index: -1;
    top: 9%;
    right: 0;

    ${({ theme }) => theme.mq.tablet} {
        width: 70%;
        top: 12%;
    }

    ${({ theme }) => theme.mq.desktop} {
        width: 60%;
        height: 65%;
        top: 10%;
    }
`;

export const ServicesStyledList = styled(StyledList)`
    margin-top: 80px;

    li {
        margin-top: 20px;
        max-width: 500px;
    }

    svg {
        margin-bottom: 25px;
    }

    ${({ theme }) => theme.mq.desktop} {
        grid-gap: 40px;
    }
`;
