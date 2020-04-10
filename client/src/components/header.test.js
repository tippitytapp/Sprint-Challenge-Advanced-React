import React from "react";
import {render} from "@testing-library/react";
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

