import {io} from "socket.io-client";
const socket = io.connect(process.env.PORT || "http://localhost:3001");
export default socket;