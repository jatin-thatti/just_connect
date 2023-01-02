const express = require('express');

const app = express();

app.listen(8000,function(err){if(err)return;console.log(`the server is up on port ${8000} !`);})

