import React from "react";
import {render} from "@testing-library/react";
import PlayerCard from "./playerscard";
import '@testing-library/jest-dom/extend-expect';

test('cards are visibile', ()=>{
    const data = [ { name: "Alex Morgan", country: "United States", searches: 100 },
    { name: "Megan Rapinoe", country: "United States", searches: 99 }];
    const {getByTestId} = render(<PlayerCard playerData={data}/>);
    const playerCards = getByTestId(/playerdiv/)
    expect(playerCards).toBeVisible();
})