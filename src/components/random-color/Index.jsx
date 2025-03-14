
import { useState,useEffect } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    function handleRandomHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor="#"
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    
    function handleRandomRgbColor(){
       const r=randomColorUtility(256)
       const  g=randomColorUtility(256)
       const  b=randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)

    }

    useEffect(()=>{
        if(typeOfColor=="rgb") handleRandomRgbColor()
        else handleRandomHexColor()
    },[typeOfColor])
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            display: "flex",
            gap: "10px",
            justifyContent: "center"
        }}>
            <button onClick={()=>setTypeOfColor("hex")} style={{ height: "50px" }}>Generate HEX Color</button>
            <button onClick={()=>setTypeOfColor("rgb")}style={{ height: "50px" }}>Generae RGB Color</button>
            <button onClick={typeOfColor=="hex"?handleRandomHexColor:handleRandomRgbColor} style={{ height: "50px" }}>Generate Random Color</button>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#ffffff",
                fontSize:"60px",
                marginTop:"50px",
                flexDirection:"column"
            }}>
                <h3>{typeOfColor=='hex'?"HEX Color":"RGB Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}