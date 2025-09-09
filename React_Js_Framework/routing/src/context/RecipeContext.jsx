import React, { Children } from 'react'
import { createContext } from 'react'
import { useState } from 'react'


export const recipeContext = createContext(null)
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The RecipeContext component is the context provider for the recipe data.
 * It sets the initial state of the recipe data to an empty array and
 * provides the data and a function to update the data to its children
 * as a context value.
 *
 * @param {object} props The props object
 * @param {*} props.children The children of the component
 */
/*******  52393a6e-b95f-43bd-9bd1-7cb6e20f50e4  *******/
const RecipeContext = (props) => {


    const [data, setData] = useState([])



    return (
        <recipeContext.Provider value={{ data, setData }}>
          {props.children}
        </recipeContext.Provider>
    )
}

export default RecipeContext