import { useState , useEffect,useRef} from "react";
import "./App.css";
import { useCallback } from "react";

function App() {

  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null)

  const generatePassword = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers){
      str+="0123456789";
    }
    if(characters){
      str+="!@#$%^&*()_+{}[]`~";
    }
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor((Math.random()*str.length)-1));
    }
    setPassword(pass);

  },[length,numbers,characters]);

  // generatePassword();
  const copyPasswordToClipboard =useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password]);
  
  useEffect(() => {
    generatePassword();
  }
  , [length, numbers, characters,generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}/>
          <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800"
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={50}
            value={length} 
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"/>
            <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={()=>{
              setNumbers((prev)=> !prev)
            }} 
            className="cursor-pointer"/>
          </div>
          <label htmlFor="numberInput">Numbers</label>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={characters}
            id="characterInput"
            onChange={()=>{
              setCharacters((prev)=> !prev)
            }} 
            className="cursor-pointer"/>
          </div>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
