import React from "react"
import socketio from "socket.io-client"

const SOCKET_URL = 'ws://localhost:4000'

export const socket = socketio.connect(SOCKET_URL) // , { transports: ['websocket'] }
export const SocketContext = React.createContext()
