import { io } from "socket.io-client";
const socket = io.connect("http://192.168.0.100:4000",{reconnect: true}); // here
export default socket;

// this address, it should be localhost, or my IP? wait
