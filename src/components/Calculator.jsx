import { useState } from "react"

const Calculator = () => {
    const value = ['C', '=', '/', '*', '7', '8', '9', '+', '4', '5', '6', '-', '1','2', '3', '.', '0', '00', 'Del']    

        let [calVal, setCalVal] = useState("")
      
        const onButtonClick = (buttonText) =>{
          if(buttonText === 'C'){
            setCalVal("")
          }else if(buttonText === '='){
            const result = eval(calVal)
            setCalVal(result)
          }else if(buttonText === 'Del'){
            let newDisplayValue = String(calVal)
            newDisplayValue = newDisplayValue.substring(0, newDisplayValue.length-1)
            setCalVal(newDisplayValue)
          }
          else{
            const newDisplayVlaue = calVal + buttonText;
            setCalVal(newDisplayVlaue)
          }
        }
    return (
        <>
        <div className="modal modal-sheet position-static d-block bg-body-secondary" tabIndex="-1" role="dialog" id="modalSignin">
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow ">
              <center>
                <h1 className="fw-bold mb-0 fs-2 p-3">Calculator</h1>
               </center>

              <div className="modal-body p-5 pt-0">
                <div className="">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3 fs-1" 
                    value={calVal} id="floatingInput" readOnly/>
                  </div>
                  <div className="calc-container">
                    {value.map((sign, i) => <button className="calc-button" type="submit" key={i} onClick={() => onButtonClick(sign)}>{sign}</button>)}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </>

        
    )
}
export default Calculator





            {/* <div className="calculator card">

<input type="text" className="calculator-screen z-depth-1" value="" disabled />

<div className="calculator-keys">

  <button  type="button" data-mdb-button-init className="operator btn btn-info" value="+">+</button>
  <button  type="button" data-mdb-button-init className="operator btn btn-info" value="-">-</button>
  <button  type="button" data-mdb-button-init className="operator btn btn-info" value="*">&times;</button>
  <button  type="button" data-mdb-button-init className="operator btn btn-info" value="/">&divide;</button>

  <button  type="button" data-mdb-button-init value="7" data-mdb-ripple-init className="btn btn-light waves-effect">7</button>
  <button  type="button" data-mdb-button-init value="8" data-mdb-ripple-init className="btn btn-light waves-effect">8</button>
  <button  type="button" data-mdb-button-init value="9" data-mdb-ripple-init className="btn btn-light waves-effect">9</button>


  <button  type="button" data-mdb-button-init value="4" data-mdb-ripple-init className="btn btn-light waves-effect">4</button>
  <button  type="button" data-mdb-button-init value="5" data-mdb-ripple-init className="btn btn-light waves-effect">5</button>
  <button  type="button" data-mdb-button-init value="6" data-mdb-ripple-init className="btn btn-light waves-effect">6</button>


  <button  type="button" data-mdb-button-init value="1" data-mdb-ripple-init className="btn btn-light waves-effect">1</button>
  <button  type="button" data-mdb-button-init value="2" data-mdb-ripple-init className="btn btn-light waves-effect">2</button>
  <button  type="button" data-mdb-button-init value="3" data-mdb-ripple-init className="btn btn-light waves-effect">3</button>


  <button  type="button" data-mdb-button-init value="0" data-mdb-ripple-init className="btn btn-light waves-effect">0</button>
  <button  type="button" data-mdb-button-init className="decimal function btn btn-secondary" value=".">.</button>
  <button  type="button" data-mdb-button-init className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

  <button  type="button" data-mdb-button-init className="equal-sign operator btn btn-default" value="=">=</button>

</div>
</div> */}