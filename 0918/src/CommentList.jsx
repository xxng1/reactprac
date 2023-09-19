import React from "react";
import Comment from "./Comment";

function CommentList() {
    const listItems = [
      {id:1 , name:"Kimgacheon", comment:"안녕하세요~"},
      {id:2, name:"CaCaOj", comment:"ㅎㅇㅎㅇ"},
      {id:3, name:"GaSoon", comment:"ㅇㄴㅎㅅㅇ~~~"}
      ]
    return (
    <div>
          {listItems.map((user)=> <Comment key={user.id} name={user.name}
                         comment={user.comment}/>)}
</div> );
}
export default CommentList;