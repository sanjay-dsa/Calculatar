import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "%",
    "+",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Calculator
        </h1>

        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-16 text-right text-2xl px-4 rounded-lg bg-gray-700 text-white mb-4 outline-none"
        />

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearInput}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
          >
            AC
          </button>

          <button
            onClick={deleteLast}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg"
          >
            DEL
          </button>

          <button
            onClick={() => handleClick("(")}
            className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg"
          >
            (
          </button>

          <button
            onClick={() => handleClick(")")}
            className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg"
          >
            )
          </button>

          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg text-xl"
            >
              {btn}
            </button>
          ))}

          <button
            onClick={calculate}
            className="col-span-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-2xl font-bold"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
