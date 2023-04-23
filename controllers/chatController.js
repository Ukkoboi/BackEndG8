

module.exports = io => {
        io.on("connect",(client) => {
            console.log("connected");
            client.on("message", (data) => {
                console.log(data);
                io.emit("message",data);
            })
        });
};