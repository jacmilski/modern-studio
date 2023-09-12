/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const StyledIconWrapper = styled.span`
    display: inline-block;
    margin: 0 20px;

    svg {
        width: 100%;
        height: auto;
    }

    svg path {
        fill: &{({ isDark }) => (isDark ? '#000' : '#fff')};
    }
`;
