import { Children, createContext, useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import {io} from 'socket.io-client';
import tailwindcss from "@tailwindcss/vite";


const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL=backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({Children}) =>{
 const [token,setToken] = useState(localStorage.getItem("token"));
 const [authUser,setAuthUser] = useState(null);
 const [onlineUser,setOnlineUser] = useState([]);
 const [socket,setSocket] = useState(null);

 //Chect if user is authendticated and if so, set the user data and connect the socket 
const checkAuth = async () =>{
 try {
    const {data} = await axios.get("/api/auth/check");
    if(data.sucess){
        setAuthUser(data.user)
        connectSocket(data.user);
    }
 }catch(error){
toast.error(error.message);
 }


}
// Login function to handle user authentication and socket connection

const login = async (state,credentials)=>{
 try{
    const {data} = await axios.post(`/api/auth/${state}`,credentials);
    if(data.sucess){
        setAuthUser(data.userData);
        connectSocket(data.userData);
        axios.defaults.headers.common["token"] = data.token;
        setToken(data.token);
        localStorage.setItem("token",data.token)
    toast.success(data.message)
    }else{
        toast.error(data.message)
    }
 }catch (error){
    toast.error(error.message)
 }

}





//connect socket function to handle socket connection and online users udpdates
const connectSocket = (userData)=>{
if(!userData || socket?.connected) return;
const newSocket = io(backendUrl,{
   query:{
    userId : userData._id,
   } 
});
newSocket.connect();
setSocket(newSocket);
newSocket.on("getOnlineUsers",(userId)=>{
    setOnlineUser(userId);
})


}




useEffect(()=>{
    if(token){
        axios.defaults.headers.common["token"]=token
    }
    checkAuth();
},[])


const value ={
axios,
authUser,
onlineUser,
socket
}
return(
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
)



}
