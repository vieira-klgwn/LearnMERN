const express = require ('express');
const os = require('os');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'..client/build')));

app.get('/api/getUsername', (req,res) => {res.send({username:os.userInfo().username})});
app.listen(8080,() => console.log("App running on port 8080"));