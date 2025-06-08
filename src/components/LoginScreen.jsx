import React, { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div  className="border-1 p-10 rounded-2xl w-90 bg-[#FFFFFF] border-[#9E9797]">
      <h2 className="flex justify-center m-2 font-pacifico">Login</h2>
      <div className="flex justify-center ">
      <form >
        <div className="space-patterns">
          <label className="flex justify-center font-roboto">Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className=" space-patterns2 "/>
        </div>

        <div className="space-patterns">
          <label className="flex justify-center font-roboto">Senha: </label>
          <input value={senha} onChange={(e) => {setSenha(e.target.value)}} className=" space-patterns2 "/>
        </div>

        <div className=" flex justify-center m-2 border bg-black text-white font-yeon">
          <button type="submit" >Entrar</button>
        </div>
        
      </form>  
      </div>
    </div>
  );
}
