import { useState } from "react"



function App() {
  const [length,setlength]=useState("");
  const [includeuppercase,setincludeuppercase]=useState(true);
  const [includelowercase,setincludelowercase]=useState(true);
  const [includenumbers,setincludenumbers]=useState(true);
  const [includesymbols,setincludesymbols]=useState(true);
  const [password,setpassword]=useState("");

  const generatedpassword=()=>{
    let charset='';
    if(includeuppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includelowercase) charset+="abcdefghijklmnopqrstuvwxyz";
    if(includenumbers) charset+="0123456789";
    if(includesymbols) charset+="!@#$%^&*()+_<>?|{}";
   var pwd="";
    for( var i=0;i<length;i++)
    {
      let randomindex=Math.floor(Math.random()*charset.length);
      
       pwd += charset[randomindex];
     
    }
    setpassword(pwd);


  }
 
  const copypwd=()=>{
    navigator.clipboard.writeText(password);
    alert(`${password} Copied`);
  }

  return (
    <>
     <div className="container">
      <h1>Password Generator</h1>
      <div className="lengthdiv">
        <label htmlFor="length">Enter Password Length </label>
        <input   value={length} onChange={(e)=>setlength(e.target.value)} id="length"></input>
      </div>
       
      <div className="checkboxdiv">
          <input checked={includeuppercase} onChange={(e)=>setincludeuppercase(e.target.checked)} type="checkbox"></input>
          <label>Include Uppercase</label>
           </div>
           <div className="checkboxdiv">
          <input  checked={includelowercase} onChange={(e)=>setincludelowercase(e.target.checked)}type="checkbox"></input>
          <label>Include Lowercase</label>
           </div>
           <div className="checkboxdiv">
          <input checked={includenumbers} onChange={(e)=>setincludenumbers(e.target.checked)} type="checkbox"></input>
          <label>Include Numbers</label>
           </div>
           <div className="checkboxdiv">
          <input checked={includesymbols} onChange={(e)=>setincludesymbols(e.target.checked)} type="checkbox"></input>
          <label>Include Symbols</label>
           </div>
           <button onClick={generatedpassword}>Generate Password</button>
           <div  className="generatedpwd">
           <input type="text" value={password} readOnly></input>
           <button onClick={copypwd}>Copy</button>
           </div>
     </div>
    </>
  )
}

export default App
