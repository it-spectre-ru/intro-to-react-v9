let counter = 0;

const Pizza = (props) => {
  counter = Date.now();

  return (
    <div
      className="pizza"
      onClick={() => {
        console.log("hi00");
      }}
    >
      <h1>
        {props.name} {counter}
      </h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
