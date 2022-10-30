import { leaning_df, leaning_df2 } from "./data.js";
import "./Comments.css";
import * as d3 from "d3";
import Modal from "@mui/material/Modal";
import React from "react";
import { text } from "d3";

// d3.selectAll("td.red").style("background-color", function(d) {
//     if (d === "R") {
//         return "red";
//     } else {
//         return "blue";
//     }
// });

//took help from https://www.c-sharpcorner.com/article/how-to-handle-conditional-styling-in-reactjs/ for conditional styling

const red = {
  backgroundColor: "red",
  fontSize: "15px",
};
const blue = {
  backgroundColor: "blue",
  fontSize: "15px",
};
const green = {
  backgroundColor: "green",
  fontSize: "15px",
};
const yellow = {
  backgroundColor: "yellow",
  fontSize: "15px",
  color: "black",
};

export function Comments() {
  // console.log(leaning_df2)
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState("test");
  const handleOpen = (textBody) => {
    setBody(textBody);
    setOpen(true);
    console.log(1);
  };
  const handleClose = () => {
    setOpen(false);
    console.log(2);
  };

  const sortTypes = {
    up: {
      class: "sort-up",
      fn: (a, b) => a.score - b.score,
    },
    default: {
      class: "sort",
      fn: (a, b) => a,
    },
  };

  const DisplayData = leaning_df2.map((info) => {
    return (
      //   <div>
      <tr>
        <td onClick={() => handleOpen(info.body)}>{info.title}</td>
        <td>{info.comment}</td>
        {/* <td className='red'>{info.author_leaning}</td> */}
        <td style={info.author_leaning === "R" ? red : blue}>
          {info.author_leaning}
        </td>
        <td style={info.is_same_stance === "T" ? green : yellow}>
          {info.is_same_stance}
        </td>
      </tr>
      //   </div>
    );
  });

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div
          className="modal-content"
          style={{
            width: "60%",
            marginTop: "20vh",
            height: "40vh",
            overflow: "auto",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            paddingBottom: "1rem",
            backgroundColor: "#282c34",
            marginLeft: "380px"
          }}
        >
          <div className="mb-2">
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                marginBottom: "15px",
                marginTop: "20px",
                paddingTop: "7px",
                width: "100%",
              }}
            >
              {body}
            </div>
          </div>
        </div>
      </Modal>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Post</th>
            <th>Comment</th>
            <th>author leaning</th>
            <th>is same stance</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
export default Comments;
