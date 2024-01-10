import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';



const RecipeContainer = styled.div`

display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;

`

const CoverImage = styled.img`
height: 200px;

`

const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 0.5rem 0;

`

const IngredientsText = styled.span`
  font-size: 18px;
  border: 1px solid green;
  color: green;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;

`

const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: 1px solid #eb3300;

`

export function RecipeCard(props) {

    const [show, setShow] = useState(false);
    const {recipe} = props;
    return (
      <>
        <Dialog open={show} key={recipe.label + "$"}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Ingredients
          </DialogTitle>
          <DialogContent>
            <b>{recipe.label}</b>
            <table>
              <thead>
                <th>Ingredients</th>
                <th>Weight</th>
              </thead>
              <tbody>
                {recipe.ingredients.map((ingredientObj)=> {
                  return (
                    <tr>
                      <td>{ingredientObj.text}</td>
                      <td>{ingredientObj.weight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <IngredientsText onClick={() => window.open(recipe.url)}>See More</IngredientsText>
            <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>
        
        <RecipeContainer key={recipe.label}>
          <CoverImage src={recipe.image}/>
          <RecipeName>{recipe.label}</RecipeName>
          <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
          <SeeMoreText onClick={() => window.open(recipe.url)}>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </>
    );
  }