const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const BG_COLOR = process.env.BG_COLOR || "white";
const NAME = process.env.USERNAME || process.env.COMPUTERNAME || "User";

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})

app.get('/',(req,res)=>{
    const html = `
    <body style="background-color:${BG_COLOR}; text-align: center">
        <div style="display:inline-block; width: 60%; margin: 0 auto">
            <h1>Hello ${NAME}</h1>
            <h1> node web app docker container successfully running<\h1>
        </div>
    </body>`;
    res.send(html)
})