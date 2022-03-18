import React from "react";
import { useState } from "react";

export default function Gradient(){

    const [color1, setColor1] = useState()
    const [color2, setColor2] = useState()
    const [angle, setAngle] = useState()
    const [breakp1, setBreakp1] = useState()
    const [breakp2, setBreakp2] = useState()



    const Color1 = e => {
        setColor1(e.target.value);
        console.log(e.target.value);
    }

    const Color2 = e => {
        setColor2(e.target.value);
    }
    
    const Angle = e => {
        setAngle(e.target.value);
    }

    const Breakp1 = e => {
        setBreakp1(e.target.value);
    }

    const Breakp2 = e => {
        setBreakp2(e.target.value);
    }


    return(
        <> 
        <div className="d-flex justify-content-center">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <label forHtml="color1">Color1</label>
                        <input type="color" className="w-100" id="color1" defaultValue="blue" onChange={Color1}/>
                    </div>
                    <div className="card-body">
                        <label forHtml="breakpoint">BreakPoint : </label>
                        <input type="number" id="breakpoint" min="0" max="100" onChange={Breakp1}/>
                    </div>

                </div>

                <div className="card">
                    <div className="card-body">
                        <label forHtml="color2">Color2</label>
                        <input type="color" className="w-100" id="color2" defaultValue="red" onChange={Color2}/>
                    </div>
                    <div className="card-body">
                        <label className="ml-1" forHtml="breakpoint">BreakPoint : </label>
                        <input type="number" id="breakpoint" min="0" max="100" onChange={Breakp2}/>
                    </div>                    
                </div>
                <div className="card">
                    <div className="card-body">
                        <label forHtml="angle">Angle</label>
                        <input type="range" id="angle" name="angle" min="0" max="180"  onChange={Angle}/>
                    </div>
                </div>                

            </div>
        </div>

        <div className="d-flex justify-content-center m-2">
            <div className="rounded" style={{ backgroundImage: `linear-gradient(`+angle+`deg,`+ color1 +` `+ breakp1+`% ,`+ color2+` `+ breakp2+ `% )`, height: "100px", width: "500px"}}></div>            
            </div>
        <div className="text-center">Le CSS : linear-gradient({angle}deg, {color1} {breakp1}% ,{color2} {breakp2}% )</div>
        </>
    );

}