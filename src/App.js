import styled from 'styled-components'
import { Header } from "./components/Header";
import { RecipeCard } from './components/RecipeCard';
import { useState } from 'react'
import Axios from 'axios';
import { Placeholder } from './components/Placeholder';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const RecipeListContainer = styled.div`

display: flex;
justify-content: space-evenly;
flex-direction: row;
// padding; 30px;
gap: 20px;
flex-wrap: wrap;
margin:30px;

`

const APP_ID = '75f7625f';
const APP_KEY = 'fbf14e643d547aaa337db3c18144077d';

// const APP_ID = process.env.REACT_APP_APP_ID;
// const APP_KEY = process.env.REACT_APP_APP_KEY;


function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    updateRecipeList(response.data.hits);
    
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateTimeoutId(setTimeout(() => {
      // console.log("API called ", event.target.value);
      fetchRecipe(event.target.value)
    }, 500));
  };
  
  return (
    <Container>
      <Header onTextChange = {onTextChange}/>

      <RecipeListContainer>
       
        {recipeList.length ?
          recipeList.map((recipeObj)=> {
            const recipe = recipeObj.recipe;
            console.log(recipeObj)
            return (
              <RecipeCard recipe = {recipe}/>     
            )
          })
          :
          <Placeholder/>
        }
      </RecipeListContainer>
    </Container>
  );
}

export default App;
