import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';

import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const PORT = 7000;
const app = express();



// app.use("^/$", (req, resp, next) => {

//     console.log("in app.use()....");
//     const app = ReactDOMServer.renderToString(<App/>);

//     const indexFile = path.resolve('./build/index.html');   
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if(err){
//             console.log("Something went wrong");
//             return resp.status(500).send("Oops, better lunk next time");
//         }

//         const theIndexPage 
//             = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
//         return resp.send(theIndexPage);
//     })


// })




app.get("/", (req, resp) => {

    console.log("in the get....");
    const app = ReactDOMServer.renderToString(<App/>);

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if(err){
            console.log("Something went wrong");
            return resp.status(500).send("Oops, better lunk next time");
        }

        const theIndexPage = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
        return resp.send(theIndexPage);
    })

});

app.use(express.static(path.resolve(__dirname,"..", "build")));

app.listen(PORT, () => {
    console.log(`☺ Server listining at port ${PORT}`);
})