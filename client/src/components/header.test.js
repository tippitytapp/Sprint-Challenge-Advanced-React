import React from "react";
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "./header";

test('header is visible', () => {
    //Arrange
    const {getByText} = render(<Header />)
    const headerText = getByText(/women's world cup players/i)
    //ACT 
    //NONE
    //ASSERT
    expect(headerText).toBeVisible();
})

test('darkmode button visible', () => {
    //ARRANGE
    const {getByText} = render(<Header />)
    const darkButton = getByText(/dark mode/i)
    //ASSERT
    expect(darkButton).toBeVisible();
})

test('click darkmode', ()=>{
    //ARRANGE
    const {getByText} = render(<Header />)
    const darkButton = getByText(/dark mode/i)
    //ACT
    fireEvent.click(darkButton)
})