// socket.js
import { io } from "socket.io-client";
export const socket = io("http://localhost:3002"); // Only initializes once
