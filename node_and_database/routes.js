const express = requrie('express')
// write all the other stuff the is to be required/imported

const authRouter = express.Router()

// now instead of app.use and other methods we do authRouter.use and other methods

authRouter.use("/regiester", /*some function*/)

module.exports = authRouter