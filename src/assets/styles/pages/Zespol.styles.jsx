/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

export const Hero = styled(({ image, ...props }) => <div {...props} />)`
    width: calc(100% + 40px);
    height: 90vh;
    background-image: url("${({ image }) => image}");
    background-size: cover;
    background-position: 10%;
    margin: 0 -20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    margin-bottom: 50px;

    h1 {
        font-size: ${({ theme }) => theme.font.size.heading};
        margin: 0;
    }

    h1, p {
        color: white;
        text-shadow: 0 0 20px black;
    }

    ${({ theme }) => theme.mq.desktop} {
        h1 {
        font-size: ${({ theme }) => theme.font.size.headingSmall};
        margin: 0;
    }
    }
`;

export const InfoItemContent = styled.div`
    h2 {
        margin: 10px 0;
    }

    p:first-of-type {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.font.size.heading};
        font-weight: 500;
        color: ${({ theme }) => theme.color.darkBeige};
        margin: 0 0 30px 0;
    }

    a {
        display: flex;
        align-items: center;
        margin: 15px 0;
        color: ${({ theme }) => theme.color.black};
        font-weight: 500;

        svg {
            margin-right: 10px;
        }
    }
`;

export const InfoItem = styled.article`
    margin: 100px 0;

    img {
        width: 100%;
    }

    ${({ theme }) => theme.mq.desktop} {
        max-width: 1300px;
        margin: 150px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        div {
            width: 50%;
        }

        img {
            width: 50%;
            max-width: 400px;
        }

        &:nth-child(odd) {
      ${InfoItemContent} {
        padding-right: 70px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      ${InfoItemContent} {
        padding-left: 70px;
      }
    }

    }
`;
