import { useState } from 'react'
import styled from 'styled-components'






const HeaderComponent = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;

`

const AppNameComponent = styled.div`

display: flex;
flex-direction: row;
align-items: center;

`

const SearchIcon = styled.img`

width:1rem;
height:1rem;
filter:invert(35%);
`

const AppIcon = styled.img`

width:2rem;
height:2rem;
margin:1rem;
`
const SearchComponent = styled.div`

display: flex;
flex-direction: row;
background-color: white;
align-items: center;
padding: .5rem;
border-radius: .3rem;
width: 50%;

`

const SearchInput = styled.input`

border:none;
outline:none;
font-size: 16px;
font-weight: bold;
margin-left: 1rem;
width: 100%;

`

export function Header(props) {
    
    
    // console.log(props);
    // const updateRecipeList = props.updateRecipeList;

    const {onTextChange} = props;
    return (
        // <Container>
          <HeaderComponent>
            <AppNameComponent>
              <AppIcon src='/hamburger.svg'/>
              Recipe Finder
            </AppNameComponent>
            <SearchComponent>
              <SearchIcon src='/search-icon.svg'/>
              <SearchInput placeholder='Search Recipe' type="text" onChange={onTextChange}/>
            </SearchComponent>
          </HeaderComponent>
          
        // </Container>
      );
}