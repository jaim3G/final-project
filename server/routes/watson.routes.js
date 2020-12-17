// const { text } = require("body-parser")
// const express = require("express")
// const router = express.Router()
// const AssistantV2 = require('imb-watson/assistant')
// const {IamAuthenticator} = require("imb-watson/auth")

// const authenticator = new IamAuthenticator({
//     apikey: process.env.WATSON_ASSISTANT_APIKEY,
// })

// const assistant = new AssistantV2({
//     version:"2019-02-28",
//     authenticator:authenticator,
//     url: process.env.WATSON_ASSISTANT_URL
// })

// router.get('/session', async(req, res) => {
//     try {
//         const session = await assistant.createSession({
//             assistantId: process.env.WATSON_ASSISTANT_ID
//         })
//         res.json(session['result'])
//     }catch(err){
//         res.send("error")
//         console.log(err)
//     }
// })

// router.post('/message', async(req, res) => {
    
//     payload = {
//         assistantId: process.env.WATSON_ASSISTANT_ID,
//         sessionId: req.headers.session_ID,
//         input: {
//             message_type: "text",
//             text: req.body.input

//         }
//     }
    
//     try{
//         const message = await assistant.message(payload)
//         res.json(message['result'])
//     }catch{
//         res.send("error")
//         console.log(err)
//     }
// })

// module.exports = router