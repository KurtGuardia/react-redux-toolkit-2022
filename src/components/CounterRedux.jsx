import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementBy,
} from '../redux/features/counter.feature';

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <React.Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <p className='h3'>{counter}</p>
                <button
                  onClick={() => dispatch(increment())}
                  className='btn btn-success m-1'
                >
                  Increment
                </button>
                <button
                  onClick={() => dispatch(decrement())}
                  className='btn btn-warning m-1'
                >
                  Decrement
                </button>
                <button
                  onClick={() => dispatch(incrementBy(5))}
                  className='btn btn-danger m-1'
                >
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

export default CounterRedux;
