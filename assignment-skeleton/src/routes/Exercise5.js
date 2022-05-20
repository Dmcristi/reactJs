import { CodeBlock, dracula } from "react-code-blocks";

function Exercise5() {
  //If you want to use me, be aware I am a string not an Array.
  //So please just copy me in other variable
  const users = `[
    "Christopher Washington",
    "Ben Hayes",
    "Skye Roberts",
    "Hugo Gray",
    "Eddie Lee",
    "Hannah Reid",
  ];`;

  const userNames = [
    "Christopher Washington",
    "Ben Hayes",
    "Skye Roberts",
    "Hugo Gray",
    "Eddie Lee",
    "Hannah Reid"
  ];

  return (
    <div>
      <div>
        <p>
          Given an array:
          <CodeBlock
            customStyle={{ width: "20rem" }}
            text={users}
            language="js"
            showLineNumbers={false}
            theme={dracula}
          />
          <br />
          Use the map function to render the array in an unordered list.
        </p>
        <div className="solution-container">
          <ul>
            {userNames.map(name => <li>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Exercise5;
