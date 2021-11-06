var socket = new WebSocket("ws://localhost:8080/ws")

let connect = () => {
    console.log("Connecting to server...")
    
    socket.onopen = () => {
        console.log("Connected to server")
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("socket closed connection: " , event)
    };

    socket.onerror = error => {
        console.log("socket error: " , error)
    };

    let sendMsg = msg => {
        console.log("Sending message: " + msg)
        socket.send(msg)
    };
    export {connect,sendMsg}

}

