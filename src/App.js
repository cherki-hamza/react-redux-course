import { useSelector, useDispatch } from "react-redux";

function App() {

  // 4) -access data from redux store reducer with useSelector
  const counter = useSelector(state => state.COUNTER.counter);

  const auth = useSelector(state => state.AUTH.isLog);

  const dispatchCounter = useDispatch();

  console.log(counter, auth);

  return (
    <div className="container">

      <h2 className='text-success my-5'>This just mini project react Redux</h2>

      {
        (auth === true) ? (<h3 className="text-success">Your login  with success</h3>) : (<h3 className="text-danger">Your not login</h3>)
      }

      <div className='card card-primary border-danger'>

        <div className='card-header'>
          <h3 className='text-info'>Counter: <span className="text-warning">{counter}</span></h3>
        </div>

        <div className='card-body'>
          <button onClick={() => dispatchCounter({ type: 'INCREMENT' })} className='btn btn-primary mx-5'>Increment</button>

          <button onClick={() => dispatchCounter({ type: 'DECREMENT' })} className='btn btn-danger mx-5'>Decrement</button>

          <button onClick={() => dispatchCounter({ type: 'RESET' })} className='btn btn-dark mx-5'>Reset</button>

          <br /><br />

          <button onClick={() => dispatchCounter({ type: 'IsLogin' })} className='btn btn-info mx-5'>Make User</button>

          <button onClick={() => dispatchCounter({ type: 'NotLogin' })} className='btn btn-info mx-5'>Not User</button>
        </div>

      </div>
    </div>
  );
}

export default App;
