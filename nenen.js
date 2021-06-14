const https = require('https')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000 ;
const axios = require('axios')
    


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const heading = 'https://erpdev.variiance.com'


 function get_logged_user(app) {
    app.post('/' , (req,res) => {
        var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'token c14f1f8e6c0b04f:3354d1ba0f8c414'
                }
            
        
        var head = heading + req.body.url
        axios.get( head, {headers})
        .then(response => {
            res.send(response.data);
            //console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
  });       
        })
}

get_logged_user(app)

app.listen(port);
console.log(`Layer api on  ${port}`)

