import React from "react";
import {render} from "@testing-library/react";
import PlayerCard from "./playerscard";

test('cards are visibile', ()=>{
    const {getByTestId} = render(<PlayerCard />);
    const playerCards = getByTestId(/playerdiv/)
    expect(playerCards).toBeVisible();
})