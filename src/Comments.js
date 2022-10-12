import {leaning_df, leaning_df2} from './data.js';
import "./Comments.css"
import * as d3 from 'd3'

// d3.selectAll("td.red").style("background-color", function(d) {
//     if (d === "R") {
//         return "red";
//     } else {
//         return "blue";
//     }
// });

//took help from https://www.c-sharpcorner.com/article/how-to-handle-conditional-styling-in-reactjs/ for conditional styling

const red = {
    backgroundColor: 'red',
    fontSize: '15px',
}
const blue = {
    backgroundColor: 'blue',
    fontSize: '15px',
}


export function Comments(){
    // console.log(leaning_df2)
    const DisplayData=leaning_df2.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.title}</td>
                    <td>{info.comment}</td>
                    {/* <td className='red'>{info.author_leaning}</td> */}
                    <td style={info.author_leaning==="R" ? red : blue}> {info.author_leaning} </td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Post</th>
                    <th>Comment</th>
                    <th>author leaning</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
}
export default Comments;