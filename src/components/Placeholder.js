import React from 'react'
import styled from 'styled-components';

const PlaceholderContainer = styled.img`
    width:120px;
    height:120px;
    margin:200px;
    opacity:.5;
`;

export const Placeholder = (props) => {
    const {src} = props;
    return (
        <PlaceholderContainer src='hamburger.svg'/>
    );
}
