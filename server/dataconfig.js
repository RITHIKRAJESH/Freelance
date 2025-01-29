const mongoose=require('mongoose');

main().catch((err)=>{console.log(err)})
async function main()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/freelancer');
    console.log("data base connected..");
}
//developer schema
const userSchema=new mongoose.Schema({
    fullname:String,
    address:String,
    email:String,
    phone:Number,
    password:String,
    cpass:String,
    expertise:String,
    
   imageUrl:String
  
},{timestamps:true});
const userModel=new mongoose.model('user_tbl',userSchema)

//client schema
const   clientSchema=new mongoose.Schema({
    fullname:String,email:String,password:String,cpass:String,phone:Number,address:String,imageUrl:String
},{timestamps:true});
const clientModel=new mongoose.model('client_tbl',clientSchema)
 

//exp schwma
const   expSchema=new mongoose.Schema({
    cname:String,expr:String,work:String,proof:String,userid:{type:mongoose.Schema.ObjectId, ref:'user_tbl'}
},{timestamps:true});
const expModel=new mongoose.model('exp_tbl',expSchema)

//Client Requirement

const reqSchema=new mongoose.Schema({
   projecttype:String,
    requirement:String,
    
   proof:String,userid:{type:mongoose.Schema.ObjectId, ref:'client_tbl'}
  
},{timestamps:true});
const reqModel=new mongoose.model('req_tbl',reqSchema)

//Client feedback
const cfeedSchema=new mongoose.Schema({
   feedback:String,userid:{type:mongoose.Schema.ObjectId, ref:'client_tbl'}
      
 },{timestamps:true});
 const cfeedModel=new mongoose.model('cfeed_tbl',cfeedSchema)
 
//client agreement to devloper
const cagreeSchema=new mongoose.Schema({
    devid:{type:mongoose.Types.ObjectId,ref:'user_tbl'},
    status:{type:String,default:'notaccepted'},
    pname:String,cname:String,dname:String,deadline:String,pdesc:String,userid:{type:mongoose.Schema.ObjectId, ref:'client_tbl'}
       
  },{timestamps:true});
  const cagreeModel=new mongoose.model('cagree_tbl',cagreeSchema)
//admin
const adminSchema=new mongoose.Schema({
    
    email:String,
  
    password:String,
    
  
},{timestamps:true});
const adminModel=new mongoose.model('admin_tbl',adminSchema)


//pay
const   paySchema=new mongoose.Schema({
fname:String,email:String,cno:String,cvc:String,userid:{type:mongoose.Schema.ObjectId, ref:'client_tbl'}
},{timestamps:true});
const payModel=new mongoose.model('pay_tbl',paySchema)
const categoryS=new mongoose.Schema({
    category:{type:String}
})
const categoryM=mongoose.model("category",categoryS)
module.exports={
    userModel,
    expModel,
    clientModel,reqModel,cfeedModel,cagreeModel,adminModel,payModel,
    categoryM,

} 