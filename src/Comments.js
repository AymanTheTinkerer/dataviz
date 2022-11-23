import { leaning_df, leaning_df2 } from "./data.js";
import {leaning_df3} from "./data2.js"
import {grouped} from "./data3.js"
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

const republican = {
  backgroundColor: "#ef8a62",
  fontSize: "15px",
};
const democrat = {
  backgroundColor: "#67A9CF",
  fontSize: "15px",
};
const neutral = {
  backgroundColor: "grey",
  fontSize: "15px",
};
const support = {
  backgroundColor: "#A1D76A",
  fontSize: "15px",
  color: "black",
};
const against = {
  backgroundColor: "#E9A3C9",
  fontSize: "15px",
  color: "black",
};


export function Comments() {
  // console.log(leaning_df2)
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState("test");
  const [title, setTitle] = React.useState("title");
  const [data, setData] = React.useState(true);

  var temp2 = leaning_df;

  const dataSet = () => {
    if (data) {
      temp2 = temp2.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        }
      });
    } else {
      temp2 = temp2.sort((a, b) => {
        if (a.score < b.score) {
          return -1;
        }
      });
    }
    
    setData(!data);
    console.log(data);
  }
  const handleOpen = (infoprop) => {
    setBody(infoprop.body);
    setTitle(infoprop.title)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
  console.log(1);
  var temp = temp2.filter(info => info.no < 801 && info.score > 30);
  const DisplayData = temp.map((info) => {
    return (
      //   <div>
      <tr>
        <td onClick={() => handleOpen(info)}>{info.title}</td>
        <td>{info.comment}</td>
        <td>{info.score}</td>
        <td>{info.num_comments}</td>
        {/* <td style={info.author_leaning === "R" ? republican : democrat}> */}
        <td style={info.author_leaning === "Republican" ? republican : (info.author_leaning === "Democrat" ? democrat : neutral)}>
          {info.author_leaning}
        </td>
        <td style={info.is_same_stance === "Support" ? support : against}>
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
          <div className="mb-2" style={{ height:"55px", marginTop:'8px', paddingBottom:'6px'}}>
              <h1 style={{width:'100%', textAlign: 'center', fontWeight: '600', color: 'white'}}>{title}</h1>
            </div>
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
            <th width="10%">Post</th>
            <th width="50%">Comment</th>
            <th width="5%" onClick={dataSet}>Score</th>
            <th width="5%">Num of comments</th>
            <th width="5%">author leaning</th>
            <th width="5%">is same stance</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
export default Comments;
