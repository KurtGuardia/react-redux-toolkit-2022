import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  let clickInc = () => {
    setCount((oldState) => setCount(oldState + 1));
  };
  let clickDec = () => {
    setCount((oldState) => setCount(oldState - 1));
  };
  let clickby5 = () => {
    setCount((oldState) => setCount(oldState + 5));
  };

  return (
    <React.Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <p className='h3'>{count}</p>
                <button onClick={clickInc} className='btn btn-success m-1'>
                  Increment
                </button>
                <button onClick={clickDec} className='btn btn-warning m-1'>
                  Decrement
                </button>
                <button onClick={clickby5} className='btn btn-danger m-1'>
                  Increment by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
