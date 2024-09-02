import { useEffect, useState } from "react"

const Clock = () => {

    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    useEffect( ()=>{
      
        setInterval( () => {
          const currTime = new Date();
            setTime(currTime.toLocaleTimeString());
        }, 1000)
        setDate(new Date().toLocaleDateString())
    })

    return(
        <>
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5 counter-container" tabIndex="-1" role="dialog" id="modalSheet">
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-header border-bottom-0">
                  <h1 className="modal-title fs-5">Clock</h1>
                </div>
                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                  <div style={{textAlign:"center", fontSize:"40px"}}>Date & Time <br />{time}</div>
                  <div style={{textAlign:"center", fontSize:"40px"}}>{date}</div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Clock