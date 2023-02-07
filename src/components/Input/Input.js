import React from "react";

function Input({ handleAddGuess, disabled }) {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.length < 5) {
            return;
          }

          handleAddGuess(value);
          setValue("");
        }}
      >
        <input
          id="guess"
          disabled={disabled}
          type="text"
          maxLength={5}
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default Input;
