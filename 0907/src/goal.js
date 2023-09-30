function Miss(){
  return <h1>sad</h1>;
}

function Made(){
  return <h1>good</h1>;
}

export default function Goal(props){
  const isGoal = props.isGoal;
  if (isGoal) {
    return <Made/>;
    }
  else
    return <Miss/>;
  }