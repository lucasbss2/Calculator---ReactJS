import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calc = () => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [operation, setOperation] = useState();

  const inputNum = (e) => {
    const input = e.target.value;
    value === 0 ? setValue(input) : setValue(value + input);
  };

  const clearValue = () => {
    setValue(0);
  };

  const percentage = () => {
    setValue(value / 100);
  };

  const signHandler = () => {
    value > 0 ? setValue(-value) : setValue(value * -1);
  };

  const opHandler = (e) => {
    const operator = e.target.value;
    setOperation(operator);
    setOldValue(value);
    setValue(0);
  };

  const result = () => {
    if (operation === "-") {
      setValue(
        (parseFloat(oldValue) - parseFloat(value)).toLocaleString("pt-BR")
      );
    } else if (operation === "+") {
      setValue(
        (parseFloat(oldValue) + parseFloat(value)).toLocaleString("pt_BR")
      );
    } else if (operation === "/") {
      setValue(
        (parseFloat(oldValue) / parseFloat(value)).toLocaleString("pt-BR")
      );
    } else if (operation === "*") {
      setValue(
        (parseFloat(oldValue) * parseFloat(value)).toLocaleString("pt-BR")
      );
    }
  };

  return (
    <div>
      <Box m={10} />
      <Container maxWidth="xs">
        <div className="main">
          <div className="result">{value}</div>
          <button className="operator-gray" onClick={clearValue}>
            C
          </button>
          <button className="operator-gray" onClick={signHandler}>
            +/-
          </button>
          <button className="operator-gray" onClick={percentage}>
            %
          </button>
          <button className="operator-orange" onClick={opHandler} value={"/"}>
            /
          </button>
          <button className="number" onClick={inputNum} value={7}>
            7
          </button>
          <button className="number" onClick={inputNum} value={8}>
            8
          </button>
          <button className="number" onClick={inputNum} value={9}>
            9
          </button>
          <button className="operator-orange" onClick={opHandler} value={"*"}>
            x
          </button>
          <button className="number" onClick={inputNum} value={4}>
            4
          </button>
          <button className="number" onClick={inputNum} value={5}>
            5
          </button>
          <button className="number" onClick={inputNum} value={6}>
            6
          </button>
          <button className="operator-orange" onClick={opHandler} value={"-"}>
            -
          </button>
          <button className="number" onClick={inputNum} value={1}>
            1
          </button>
          <button className="number" onClick={inputNum} value={2}>
            2
          </button>
          <button className="number" onClick={inputNum} value={3}>
            3
          </button>
          <button className="operator-orange" onClick={opHandler} value={"+"}>
            +
          </button>
          <button className="zero" onClick={inputNum} value={0}>
            0
          </button>
          <button className="number" onClick={inputNum} value={","}>
            ,
          </button>
          <button className="operator-orange" onClick={result}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Calc;
