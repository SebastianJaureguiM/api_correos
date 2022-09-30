const winston_service = require("./winston_service")

const send_email = (email,placa,mensaje,socio) => {
    let messageLog = ``
    if (email) {
        messageLog += `Destino: ${email} - `
    }
    if (placa) {
        messageLog += `Placa: ${placa} - `
    }
    if (mensaje) {
        messageLog += `Mensaje: ${mensaje} - `
    }
    if (socio) {
        messageLog += `Socio: ${socio}.`
    }
    winston_service.info(messageLog)
}

module.exports = {
    send_email
}