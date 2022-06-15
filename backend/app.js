const express = require("express")

const app = express()

app.get("/", (req, res) => {

    /*res.send("<h1>Hola mundo!!!</h1>")*/

    document.write("<h2>Hola</h2>")
    
    console.log("peticion recibida")

});

app.listen(4000, () => (
    console.log("Servidor en el puerto 4000")
))