
function Car(props) {
  return <li>I am a  {props.brand.name }  {props.brand.model } </li>;
}

function Garage() {
  const carinfo = { name: "asd", model: "mnb"};

  return (
    <>

      <h1>Who lives in my garage?</h1>
      <ul>
      <Car brand={carinfo}/>
      </ul>
    </>
  );
}


export default Garage;