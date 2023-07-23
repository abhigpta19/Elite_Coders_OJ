const express = require('express')     
const cors = require('cors')
const mongoose = require('mongoose')
const {generateFile} =require('./Components/generatefile')
const {executeCpp} =require('./Components/executeCpp')
const {generateinput} =require('./Components/makeinputfile.js')
const {getFileBase64Encoding,decodeBase64ToFile} =require('./Components/encodedecode.js')
const {deletefile} =require('./Components/deletefile.js')
const jwt= require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config({
    path: "./secretkey.env",
  });

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://abhigpta19:MuKtoNLMVtpz5LJa@elitecodersoj.4kci20n.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    Name : String,
    email : String,
    password  : {
        type : String,
        required : true
    }
})

const problemSchema = mongoose.Schema({
    problemid: String,
    initcode : Object,
    test_cases : String,
    answer : String,
    problem_statement : String,
    Sample_Input : String,
    Sample_Output : String,
    constraints : String
})

userSchema.methods.generatetoken = async function()
{
    try{
        console.log("aya");
        let token =jwt.sign({_id: this._id}, process.env.SECRET_KEY);

        console.log("aya",token);
        await this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
}

const User = new mongoose.model("User", userSchema);
const Problem = new mongoose.model("Problem", problemSchema);

// const Authenticate = async(req,res,next) => {
//     try{
//         console.log("me chala hu bro",req.body);
//         req.token="token";
//         next();
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }
const protectRoute = async (req, res, next) => {
    const token= req.body.token;
    console.log("tokenwa",token)
    if (!token) {
      return res.json("login kro bsdk");
    }
    try {
      //verify jwt
      const { _id } = jwt.verify(token, process.env.SECRET_KEY);
      
      const user = await User.findOne({ _id });
      console.log("ata h kya",user);
      //user not exists
      if (!user) {

        return res.status(401).json({
          message: "Login to Continue",
        });
      }
  
      //user exists
      req.user = user;
      next();
    } catch (err) {
      res.status(404).json({
        error: err.message,
        message: "authorization required",
      });
    }
  };

  app.post("/details",protectRoute,async(req,res) => {
    console.log("details maangta hai mdrjaat");
    res.json(req.user);
});

app.post("/problem",async(req,res) => {
    var {problemid}=req.body;
    const check = await Problem.findOne({problemid : problemid})
    res.json(check);
});


app.post("/addproblem",async(req,res) => {
    console.log(req.body);
    var {problemid,initcode,test_cases,answer,problem_statement,Sample_Input,Sample_Output,constraints}=req.body;

    var inputfile= await generateinput(test_cases);
    test_cases=await getFileBase64Encoding(inputfile);
    await deletefile(inputfile)
    inputfile=await generateinput(answer);
    answer=await getFileBase64Encoding(inputfile);
    await deletefile(inputfile)

    const data ={
        problemid: problemid,
        initcode : initcode,
        test_cases : test_cases,
        answer : answer,
        problem_statement :problem_statement,
    Sample_Input : Sample_Input,
    Sample_Output : Sample_Output,
    constraints : constraints
    }
    await Problem.insertMany([data]);
    res.json("pata nahi");
});

app.post("/compiler",protectRoute,async(req,res) => {
    console.log("j baat",req.user)
    const {lang,code, problemid}=req.body;

    if(code === undefined)
    {
        res.status(404).json({success : "false" , error : "Khali hai"});
    }
    const filePath =await generateFile(lang,code);
    const check = await Problem.findOne({problemid : problemid})
    console.log(check)
    const inputfile =await generateinput(check.test_cases);
    console.log("passed")
    await decodeBase64ToFile(check.test_cases,inputfile)

    let output=0;
    await executeCpp(filePath,inputfile).
    then(val => {output= val})
    .catch((e) => { res.json("Compilation error") })

    if(output != 0)
    {
    console.log("hellopoiu",output)
    // const output = await executeCpp(filePath,inputfile);
    const outenc =  await getFileBase64Encoding(output);
    
    if(outenc === check.answer)
    res.json("Accepted");
    else
    res.json("Wrong Output");
    }
});



app.post('/login', async(req,res)=>{
    const {email,password} = req.body;

    console.log("tilulillu",req.body)

   try{
    const check = await User.findOne({email : email , password : password})
    
    

    

    if(check){
        let token = await check.generatetoken();
    console.log("king",token);
        console.log("welcome");
        res.json({info: check , status: "exist",token : token});
    }
    else{
        console.log("bhaag yha se");
        res.json("notexist");
    }
    console.log("ab btao");
    
   }
   catch(e){
        console.log(e);
   }
    });


app.post('/register', async(req,res)=>{
    const { Name, email,password} = req.body;

    const data ={
        Name : Name,
        email : email,
        password : password
    }
   try{
    const check = await User.findOne({email : email})
    if(check){
        console.log("already registered");
        res.json("exist");
    }
    else{
        console.log("registered");
        await User.insertMany([data]);
        res.json("notexist");
    }
   }
   catch(e){
        console.log("gadabad hai daya");
   }
    });
    


app.listen(5000,()=>{
    console.log("started started @ 5000")
})