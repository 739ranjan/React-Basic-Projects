import { useState } from "react"

const BgChanger = () => {
    const [color, setColor] = useState('white');
    const handleOnClick = (e) => {
        setColor(e.target.innerText)
    }
    return (
        <>
        <div className="bgchanger-container">
            <div className="bgchanger border"  style={{background:`${color}`}}>
                <div className="container text-center d-flex justify-content-center">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 border-6 color-pallate">
                    <div className="col color" style={{background:`Red`}} onClick={handleOnClick}>Red</div>
                    <div className="col color" style={{background:`Blue`}} onClick={handleOnClick}>Blue</div>
                    <div className="col color" style={{background:`Yellow`, color: 'black'}} onClick={handleOnClick}>Yellow</div>
                    <div className="col color" style={{background:`Pink`}} onClick={handleOnClick}>Pink</div>
                    <div className="col color" style={{background:`Violet`}} onClick={handleOnClick}>Violet</div>
                    <div className="col color" style={{background:`Purple`}} onClick={handleOnClick}>Purple</div>
                    <div className="col color" style={{background:`Orange`}} onClick={handleOnClick}>Orange</div>
                    <div className="col color" style={{background:`Green`}} onClick={handleOnClick}>Green</div>
                    <div className="col color" style={{background:`White`, color:"black"}} onClick={handleOnClick}>White</div>
                    <div className="col color" style={{background:`Black`,  border: " 2px solid white"}} onClick={handleOnClick}>Black</div>
                    <div className="col color" style={{background:`Aqua`}} onClick={handleOnClick}>Aqua</div>
                    <div className="col color" style={{background:`grey`,  border: " 2px solid white"}} onClick={handleOnClick}>Grey</div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BgChanger