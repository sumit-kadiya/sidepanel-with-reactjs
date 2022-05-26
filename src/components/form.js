import React, { useEffect, useRef, useState } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("555555555555555");
  }, [inputRef]);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random() * 100,
      text: input,
    });

    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add movie/TV show"
          ref={inputRef}
        />
        <button onClick={props.onAdd}>{props.edit ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default Form;
