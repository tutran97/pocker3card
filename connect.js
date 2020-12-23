//DB
var express = require('./script.js');
var database = require('./server');
var app = express();

app.get('/getAllCus', function(req, res){
  database.getAll(function(resultQuery){
    res.json(resultQuery)
  })
});
app.post("/getAllCus",(req,res)=>{
    const queryString="INSERT INTOS historyuserwin (id, userName, users) VALUES (?)";
    conn.query(queryString,[5, "tuan", "g,h"],(err,rows,fields)=>{
        if(err) {
            console.log("failed")
        }
        console.log("success!" );
        res.redirect("/")
    })
})


app.listen(3030);