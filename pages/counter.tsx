import React from 'react';
import type { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import Layout from 'layouts/Main';
import { decrement, increment } from 'store/reducers/counter';
import type { RootState } from 'store';

const CounterPage: NextPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <Layout>
      <div className="flex">
        <button
          className="pointer-events-auto ml-8 rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="pointer-events-auto ml-8 rounded-md py-2 px-3 font-semibold leading-5 text-black">{count}</span>
        <button
          className="pointer-events-auto ml-8 rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </Layout>
  );
};

export default CounterPage;
