import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/actions/counterSliceAction";
import { selectCount } from "../../redux/reducers/counterSliceReducer";
import incrementAsync from "../../api/counterSliceApi";
import styles from "./counter.module.css";
import Button from "../../components/button/button";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        {console.log(styles.button)}
        <Button
          cutomStyle={styles.button}
          ariaLabel="Increment value"
          onClick={() => dispatch(increment())}
          label="+"
        />

        <span className={styles.value}>{count}</span>

        <Button
          cutomStyle={styles.button}
          ariaLabel="Decrement value"
          onClick={() => dispatch(decrement())}
          label="-"
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
