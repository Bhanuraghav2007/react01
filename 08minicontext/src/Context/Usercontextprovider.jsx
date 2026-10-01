import React from "react";
import Usercontext from "./Usercontext";
const Usercontextprovider=({children})=>{
    const[user,setuser]=React.useState(null)
 return(
    <Usercontext.provider value={{user,setuser}}>
    {children}
    </Usercontext.provider>
 )
}
export default Usercontextprovider