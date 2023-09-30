
function Car(props) {
  return <table >
  <tr>
    <td class="qwe-qwe-qwe"> [{props.id}] </td>
    <td>{props.brand} </td>
    <td>{props.price} </td>
    <td class="asd-asd-asd">{props.cha} </td>
  </tr>
  {props.id === 2 ?  <tr>.....</tr> : null}

</table>;
}

function List() {
  const cars = [
    { id: 1, brand: 'GRANDEUR', price: 4500 ,cha: "Graceful design" },
    { id: 2, brand: 'BMW', price: 7800 ,cha: "Functional of high level" },
    { id: 5, brand: 'GENESIS', price: 6700 ,cha: "Popular Car" }
  ];

  return (
    <>
      <h1> Car List </h1>
      <ul>
        {cars.map((car, index) => 
        <Car key={car.id} id={car.id} brand={car.brand} price={car.price} cha={car.cha} />)}
      </ul>
    </>
  );
}


export default List;