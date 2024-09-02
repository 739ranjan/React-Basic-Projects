import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  return (
    <>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 counter-container" tabIndex="-1" role="dialog" id="modalSheet">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5">Counter</h1>
            </div>
            <div className="modal-body py-0">
              <p>This is a practice page where i am implementing counter.</p>
            </div>
            <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <div style={{textAlign:"center", fontSize:"40px"}}>Count value is {count}</div>
              <button type="button" className="btn btn-lg btn-primary" onClick={increment}>Increment</button>
              <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal"  onClick={decrement}>Decrement</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
