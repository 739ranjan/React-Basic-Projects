import { useState } from "react"

const Timer = () => {

    let [hour, setHour] = useState(0)
    let [minute, setMinute] = useState(0)
    let [second, setSecond] = useState(0)

    const handleOnHourChange = (e) => {
        if(hour < 0 || hour > 24){
            alert("Hour cannot be less then 0 and greater then 24")
            setHour(0)
        }
        else    setHour(e.target.value);
    }
    const handleOnMinuteChange = (e) => {
        if(minute < 0 || minute > 59){
            alert("Minute cannot be less then 0 and greater then 59")
            setMinute(0)
        }
        else    setMinute(e.target.value);
    }
    const handleOnSecondChange = (e) => {
        if(second < 0 || second > 59){
            alert("Second cannot be less then 0 and greater then 59")
            setSecond(0)
        }
        else    setSecond(e.target.value);
    }

    const onStart = () => {
        let h = hour
        let m = minute
        let s = second

        setInterval(()=>{
            if(s>0){
                s--; 
                setSecond(s); 
            }else if(m > 0){
                m--
                setMinute(m)
                s = 59
                setSecond(s)
            }else if(h>0){
                h--;
                setHour(h)
                m = 59
                setMinute(m)
            }
        }, 1000) 
    }

    const onReset = () => {
        setHour(0)
        setMinute(0)
        setSecond(0)
    }

    return (
        <>
            <div className="container m-5">
              <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">Timer</h1>
                <hr />
                <div className="container text-center d-flex flex-column justify-content-center">
                  <div className="row d-flex justify-content-center mt-5 mb-3">
                    <div className="col col-3">
                        <div className="input-group input-group-lg">
                            <input type="number" className="form-control" placeholder="Hours" onChange={handleOnHourChange} value={hour} />
                            <span className="input-group-text" id="inputGroup-sizing-lg">HH</span>
                        </div>
                    </div>
                    <div className="col  col-1"><h1>:</h1></div>
                    <div className="col  col-3">
                        <div className="input-group input-group-lg">
                            <input type="number" className="form-control" placeholder="Minutes" onChange={handleOnMinuteChange}  value={minute} />
                            <span className="input-group-text" id="inputGroup-sizing-lg">MM</span>
                        </div>
                    </div> 
                    <div className="col  col-1"><h1>:</h1></div>
                    <div className="col  col-3">
                        <div className="input-group input-group-lg">
                            <input type="number" className="form-control" placeholder="Seconds" onChange={handleOnSecondChange} value={second} />
                            <span className="input-group-text" id="inputGroup-sizing-lg">SS</span>
                        </div>
                    </div>
                  </div>
                  <div className="pt-5 pb-5">
                    <button type="button" className="btn btn-primary me-5 px-5 rounded-5 fs-4" onClick={onStart}>Start</button>
                    <button type="button" className="btn btn-secondary ms-5 px-5 rounded-5 fs-4" onClick={onReset}>Reset</button>
                  </div>
                </div>
              </div>
            </div>


        
        </>
    )
}

export default Timer