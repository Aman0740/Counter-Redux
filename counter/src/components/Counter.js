import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions/counterActions';
import { toggleTheme } from '../redux/actions/themeActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    color: theme === 'light' ? '#fff' : '#000',
  };

  return (
    <div style={themeStyles}>
      <h1>Counter: {count}</h1>
      <button style={buttonStyle} onClick={() => dispatch(increment())}>Increment</button>
      <button style={buttonStyle} onClick={() => dispatch(decrement())}>Decrement</button>
      <button style={buttonStyle} onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <button style={buttonStyle} onClick={() => dispatch(toggleTheme())}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default Counter;