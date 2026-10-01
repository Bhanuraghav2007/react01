import React,{useState,useContext} from 'react'
import Usercontext from '../Context/Usercontext'
function Profile(){
 const{user}=useContext(Usercontext)
 if(!user)return <div>please login</div>
 return <div>Welcome {user.username}</div>
}