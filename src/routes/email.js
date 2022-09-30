const { Router } = require("express")
const route = Router()
const email_service = require("../services/email_service")

route.post("/sendEmail", [], async function (req, res, next) {
    try {
        const {email,placa,mensaje,socio} = req.body
        email_service.send_email(email,placa,mensaje,socio)
        res.status(200).json({ msg:"Correo Enviado"})
    } catch (error) {
        next(error)
    }
})

module.exports = route