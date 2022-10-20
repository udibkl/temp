const express= require('express');
const app= express();
const bodyp=require('body-parser');
app.use(bodyp.urlencoded({extended:true}));
let a;
app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/index.html');
});

app.post('/',(req,res)=>
{
    var w=parseFloat(req.body.w);
    var h=parseFloat(req.body.h);
    var s=w/(h*h);
    res.send('Your BMI is '+s);
})

const port = process.env.PORT || 3000

app.listen(port, () =>{
console.log('listening') ;
})
