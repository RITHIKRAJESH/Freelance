const express=require('express')
const cors = require('cors')
const {categoryM, userModel, expModel, clientModel ,reqModel,cfeedModel,cagreeModel,adminModel,payModel} = require("./dataconfig");
const bcrypt = require('bcrypt');
const saltRounds = 10;
//multer
const {upload} = require('./multercodes/uploadfile');

//const upload = require('./multercodes/uploadfile');
const app = express();
app.use(cors())
app.use(express.static('productimage'))
app.use(express.static('uploads'))

//used to code to UTF coding format (UTF-8 for eg)
app.use(express.urlencoded( { extended: true } ))
app.use(express.json( ));

  //develeoper register
app.post("/userreg", upload.single("image"), async (req, response) => {
  // upload.single('image'),
  const { fullname, email, password ,cpass,address,phone,expertise,} = req.body;
  // const image = req.file.path;
  
  const filepath = req.file.filename;

  const result = await userModel.find({
    'email': email,
  })
  if (result.length > 0) {
    response.json({ status: 0, 'msg': "Email ALready in Use" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      userModel.create({
        fullname,
        email,
        
        password,cpass,address,phone,expertise,
        imageUrl:filepath,
      });
      response.json({ status: 1, msg: "Thank You for Register Here" });
    });
  }
  // response.json("Thank You for Register Here");
});

//add experience

app.post("/devexp", upload.single("proof"), async (req, response) => {
  // upload.single('image'),
  const { cname,expr,work,userid} = req.body;
  // const image = req.file.path;
  
  const path = req.file.filename;
      expModel.create({
       cname,expr,work,
        
        proof:path,
        userid:userid,
      });
      // response.json({ status: 1, msg: "Thank You for Register Here" });
    });



//developer login first login
 app.post("/login",async(req,res)=>{
     const {email,password}=req.body;
     const result= await userModel.find({"email":email})//fecth data through email
     if(result.length>0){
         const pwd=result[0].password;
         const idn=result[0]._id
         const name=result[0].fullname
         const ph=result[0].phone
         const add=result[0].address
         const ex=result[0].expertise
       
         const img=result[0].imageUrl
         bcrypt.compare(password,pwd).then(function(result) {
             // result == true
             if(result==true){
                res.json({'status':1,'msg':"successfully login","userid":idn,"username":name,"phone":ph,"address":add,"expertise":ex,"imageUrl":img})//_id FIELD in mongoo 
             }else{
                 res.json({'status':0,'msg':"incorrect password"})
            }
       });
    
     }
    else{

      
            res.json({'status':0,'msg':"incorrect email"})
    
        
     }
   

    
 })


 
 //image display
 app.get("/fetchAllpdt",async (req,res)=>{
  const result= await productModel.find();
  if(result.length>0)
  {
    res.json(result)
  }
  else{
    res.json([])
  }
 })

//full data
 app.get("/fetchAllemp",async (req,res)=>{
  console.log("fejkjkj")
  const result= await userModel.find();
  console.table(result[0])
  if(result.length>0)
  {
    res.json(result)
  }
  else{
    res.json([])
  }
 })
 //deails by id in view profile
 app.get("/fetchByid/:idn",async (req,res)=>{
  const idno=req.params.idn;
  const result=await userModel.find({'_id':idno});
  if(result.length>0){
    res.json(result)
  }
  else{
    res.json([])
  }
})
//view experience
app.get("/expviews/:idn",async (req,res)=>{
  //console.log("expview")
  const idno=req.params.idn;
  //console.log(idno)
  const result=await expModel.find({'userid':idno}).populate('userid');
  if(result.length>0){
  
   res.json(result)
  }
  else{
    res.json([])
  }
})
//edit user search
app.get("/getEmp/:id",async (req,res)=>{
  const idn=req.params.id;
  const result=await userModel.find({'_id':id});
res.json(result);
});

//UPDATE
app.post("/updateData",async(req,res)=>{
  const {fullname,email,userid}=req.body;
  console.log(userid)

  await userModel.updateOne({'_id':userid},
  {
    fullname:fullname,
    email:email
  })
  res.json("update successfully")

})




//user

app.get("/fetchAlluser",async (req,res)=>{

  const record= await userModel.find();

  if(record.length>0)
  {
    res.json(record)
  }
  else{
    res.json([])
  }
 })
//deletion in database
app.get("/deleteusers/:idn",async(req,res)=>{
  await userModel.deleteOne({'_id':req.params.idn})
  res.json("data deleted successfully")
})
//delete deveoper experience
app.get("/deleteexperience/:idn",async(req,res)=>{
  await expModel.deleteOne({'_id':req.params.idn})
  res.json("data deleted successfully")
})
//.............................CLIENT CODE................................

//client register
app.post("/clientreg", upload.single("image"), async (req, response) => {
  // upload.single('image'),
  const { fullname, email, password ,cpass,address,phone,cname,work} = req.body;
  // const image = req.file.path;
  
  const filepath = req.file.filename;

  const result = await clientModel.find({
    'email': email,
  })
  if (result.length > 0) {
    response.json({ status: 0, 'msg': "Email ALready in Use" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      clientModel.create({
        fullname,
        email,work,cname,
        
        password,cpass,address,phone,
        imageUrl:filepath,proof:filepath
      });
      response.json({ status: 1, msg: "Thank You for Register Here" });
    });
  }
  // response.json("Thank You for Register Here");
});


//clientlogin
app.post("/clientlogin",async(req,res)=>{
  const {email,password}=req.body;
  const result= await clientModel.find({"email":email})//fecth data through email
  if(result.length>0){
      const pwd=result[0].password;
      const id=result[0]._id
      const fname=result[0].fullname
      const phn=result[0].phone
      const addr=result[0].address
      
      
      const img=result[0].imageUrl
      bcrypt.compare(password,pwd).then(function(result) {
          // result == true
          if(result==true){
             res.json({'status':1,'msg':"successfully login","userid":id,"username":fname,"phone":phn,"address":addr,"imageUrl":img})//_id FIELD in mongoo 
          }else{
              res.json({'status':0,'msg':"incorrect password"})
         }
    });
 
  }
 else{

   
         res.json({'status':0,'msg':"incorrect email"})
 
     
  }


 
})

 //deails by id in view client profile
 app.get("/fetchByclientid/:idn",async (req,res)=>{
  const idno=req.params.idn;
  const result=await clientModel.find({'_id':idno});
  if(result.length>0){
    res.json(result)
  }
  else{
    res.json([])
  }
})


//Add client requirement
app.post("/clientreq", upload.single("proof"), async (req, response) => {
  // upload.single('image'),
  const { projecttype,requirement,userid} = req.body;
  // const image = req.file.path;
  
  const path = req.file.filename;
      reqModel.create({
       projecttype,requirement,
        
        proof:path,
        userid:userid,
      });
      response.json({ status: 1, msg: "Thank You for Register Here" });
    });


    //View Client Requirement

    app.get("/clientreq/:idn",async (req,res)=>{
      //console.log("expview")
      const idno=req.params.idn;
      //console.log(idno)
      const result=await reqModel.find({'userid':idno}).populate('userid');
      if(result.length>0){
      
       res.json(result)
      }
      else{
        res.json([])
      }
    })


    //delete client requirement
app.get("/deletereq/:idn",async(req,res)=>{
  await reqModel.deleteOne({'_id':req.params.idn})
  res.json("data deleted successfully")
})

//Add clientfeedback

app.post("/clientfeed",async (req, response) => {
  // upload.single('image'),
  const { feedback,userid} = req.body;
  // const image = req.file.path;
  
      cfeedModel.create({
      feedback,
        userid:userid,
      });
      response.json({ status: 1, msg: "Thank You for Register Here" });
    });
//VIEW DEVELOPERS
app.get("/fetchalldev",async (req,res)=>{
  const resu= await userModel.find();
  console.table(resu[0])
  if(resu.length>0)
  {
    res.json(resu)
  }
  else{
    res.json([])
  }
 })

app.get("/fetchallcli",async (req,res)=>{
  const resu= await clientModel.find();
  console.table(resu[0])
  if(resu.length>0)
  {
    res.json(resu)
  }
  else{
    res.json([])
  }
 })
 //VIEW DEVELOPERS
app.get("/fetchalldev",async (req,res)=>{
  const resu= await userModel.find();
  console.table(resu[0])
  if(resu.length>0)
  {
    res.json(resu)
  }
  else{
    res.json([])
  }
 })
 
//assign devp
app.post("/clientagree/",  async (req, response) => {
  
  
  const { pname,cname,dname,deadline,pdesc,userid,devid} = req.body;
  
      cagreeModel.create({
        devid,
       pname,cname,dname,deadline,pdesc,
        userid:userid,
      });

      //response.json({ status: 1, msg: "Thank You for Assigning Here" });
    });
app.get("/clientagree/",async (req,res)=>{
  console.log("client agree view")
  const result=await cagreeModel.find({}).populate("devid")
  res.json(result)
})
app.get("/clientagreeid/:idn",async (req,res)=>{
  //console.log("client agree view")
  const result=await cagreeModel.find({devid:req.params.idn}).populate("devid")
  res.json(result)
})
app.post('/clientupdate',async(req,res)=>{
  
  const {status,cid}=req.body
  await  cagreeModel.updateOne({'_id':cid},{status:status})
  res.json("updated")
})

//admin regis

app.post("/adminreg", async (req, response) => {
  // upload.single('image'),
  const {  email, password } = req.body;
  // const image = req.file.path;
  
  

  const result = await adminModel.find({
    'email': email,
  })
  if (result.length > 0) {
    response.json({ status: 0, 'msg': "Email ALready in Use" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      adminModel.create({
        
        email,
        
        password
        
      });
      response.json({ status: 1, msg: "Thank You for Register Here" });
    });
  }
  // response.json("Thank You for Register Here");
});



//admin login
app.post("/adminlogin",async(req,res)=>{
  const {email,password}=req.body;
  const result= await adminModel.find({"email":email})//fecth data through email
  if(result.length>0){
      const pwd=result[0].password;
      const idn=result[0]._id
      
     
      bcrypt.compare(password,pwd).then(function(result) {
          // result == true
          if(result==true){
             res.json({'status':1,'msg':"successfully login","userid":idn,})//_id FIELD in mongoo 
          }else{
              res.json({'status':0,'msg':"incorrect password"})
         }
    });
 
  }
 else{

   
         res.json({'status':0,'msg':"incorrect email"})
 
     
  }

})
//admin delete developer
    app.get("/deletedev/:idn",async(req,res)=>{
      await userModel.deleteOne({'_id':req.params.idn})
      res.json("data deleted successfully")
    })
//admin delete client
  
    app.get("/deletecli/:idn",async(req,res)=>{
      await clientModel.deleteOne({'_id':req.params.idn})
      res.json("data deleted successfully")
    })
//admin view project details
app.get("/fetchallproject",async (req,res)=>{
  const resu= await cagreeModel.find();
  console.table(resu[0])
  if(resu.length>0)
  {
    res.json(resu)
  }
  else{
    res.json([])
  }
 })
 
 //admin verify
 app.post("/verify",async (req,res)=>{
  const{id,status}=req.body;
  await cagreeModel.updateOne({'_id':id},{status:status});
  res.json("verified")
 })
//pay
app.post("/clipay", async (req, response) => {
const { fname,email,cno,cvc,userid} =req.body;
      payModel.create({
       fname,email,cno,cvc,
        userid:userid,
      });
      // response.json({ status: 1, msg: "Thank You for Register Here" });
    });

   app.post("/category",async(req,res)=>{
    const {category}=req.body
    categoryM.create({
      category
    })
    res.json("data registered successfully")
   })
app.get("/category",async(req,res)=>{
  const rel=await  categoryM.find()
  res.json(rel)
})

app.listen(8000,()=>{
         console.log("server running http://localhost:8000/")
   })