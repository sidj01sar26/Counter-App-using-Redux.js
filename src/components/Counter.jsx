import React from 'react';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';
import { useDispatch } from 'react-redux';

const Counter = () => {

    const count = useSelector((state => state.counter.value));
    const dispatch = useDispatch();

    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#b9bbbe] flex-col gap-1'>
            <button
                className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => dispatch(increment())}
            >
                Increment <br /> +
            </button>

            <br />
            <br />
            <br />

            <div className="bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">{count}</div>

            <br />
            <br />
            <br />

            <button
                className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => dispatch(decrement())}>
                Decrement <br /> -
            </button>

        </div>
    )
}

export default Counter;