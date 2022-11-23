import React from "react";
import { grouped } from "./data3.js";
import MultiProgress from "react-multi-progress";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export class StackView extends React.Component {
  render() {
    console.log(grouped);

    const support = 30;
    const against = 70;
    const democrat = 20;
    const neutral = 40;
    const republican = 40;
    return (
      <div>
        <p>Posted by u/xxx, karma:xyz</p>
        <AiOutlineArrowUp style={{ position: "relative", right: "300px" }} />
        <p style={{ position: "relative", right: "300px" }}>189</p>
        <AiOutlineArrowDown style={{ position: "relative", right: "300px" }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MultiProgress
            elements={[
              {
                value: 65,
                color: "green",
              },
              {
                value: 35,
                color: "pink",
              },
            ]}
          />
        </div>
        <br></br>

        <MultiProgress
          elements={[
            {
              value: 33,
              color: "blue",
            },
            {
              value: 33,
              color: "grey",
            },
            {
              value: 34,
              color: "orange",
            },
          ]}
        />
        <p>Equip me on the debate on global warming</p>
      </div>
    );
  }
}
