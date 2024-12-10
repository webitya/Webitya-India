import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../../features/Counter/counderSlice"; // Import your actions

const ReduxP = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Button click handlers
  const handleIncrementClick = () => dispatch(increment());
  const handleDecrementClick = () => dispatch(decrement());
  const handleResetClick = () => dispatch(reset());
  const handleIncAmountClick = () => dispatch(incrementByAmount(Number(amount)));

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    gap: "20px",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f5f5f5",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    transition: "background-color 0.3s ease",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
  };

  const inputStyle = {
    padding: "8px",
    width: "120px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    textAlign: "center",
  };

  const countStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleIncrementClick}>
        +
      </button>
      <p style={countStyle}>{count}</p>
      <button style={buttonStyle} onClick={handleDecrementClick}>
        -
      </button>
      <button style={resetButtonStyle} onClick={handleResetClick}>
        Reset
      </button>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleIncAmountClick}>
        Increment By Amount
      </button>
    </div>
  );
};

export default ReduxP;
