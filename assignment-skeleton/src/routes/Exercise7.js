import Form from "../components/Form";

function Exercise7() {
  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;
