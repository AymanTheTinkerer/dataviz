import {leaning_df2, test} from './data.js';

var i = 0;


// export const Comments = () => {
    // return (
    //     <div className="comment-container">
    //         {leaning_df2.map((key) => {
    //             return (
    //                 console.log(key[i].title),
    //                 console.log(i),
    //                 <div key={i}>
    //                     {
    //                         key[i++].comment
    //                     }
    //                 </div>
    //             );
    //         })}
    //     </div>
    // )
// }

export function Comments(){
    console.log(leaning_df2)
    const DisplayData=leaning_df2.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.title}</td>
                    <td>{info.comment}</td>
                    <td>{info.author_leaning}</td>
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