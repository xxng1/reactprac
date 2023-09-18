import React from "react";
import Comment from "./Comment";

function CommentList() {
    const listItems = [
      {id:1 , name:"Kimgacheon", comment:"zxc"},
      {id:2, name:"CaCaOj", comment:"qwe"},
      {id:3, name:"GaSoon", comment:"asd"}
      ]
    return (
    <div>
          {listItems.map((user)=> <Comment key={user.id} name={user.name}
                         comment={user.comment}/>)}
</div> );
}
export default CommentList;