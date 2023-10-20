const Schema=require('./UserSchema')

const adduser=(req,res)=>{
    newuser=new Schema({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    })
    newuser.save()
    .then(data=>{
        console.log("Saved Successfully")
        res.json({
            status:200,
            msg:"Saved Succesfully",
            data:data
        })
    })
    .catch(error=>{
        console.log("Error Occured")
        res.json({
            status:500,
            msg:"Error",
            data:error
        })
    })       
    }
const login=(req,res)=>{
        const email=req.body.email
        const password=req.body.password
    
        Schema.findOne({
            email:email
        })
        .exec()
        .then(data=>{
            if(password==data.password)
            {
                console.log("Login Sucesfully")
                res.json({
                    status:200,
                    msg:"Login Sucess",
                    data:data,
                    alert:"Login Sucess"
                })
            }
            else{
                res.json({
                    status:500,
                    msg:"Password Mismatch",
                    alert:"Password mismatch"
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                msg:"user not found",
                Error:err
            })
        })
    }
const viewcust=(req,res)=>{
        Schema.find({
            
        })
        .exec()
    .then(data=>{
    
        console.log(data)
        res.json({
            status:200,
            msg:'Data Fetched Succesfully',
            data:data
        })
    
    })

    .catch(err=>{
    console.log(err);
    res.json({
        status:500,
        msg:"No Data"
    })
    })
}
const delcust=(req,res)=>{
        Schema.findByIdAndDelete({
            _id:req.params.id
        })
        .exec()
        .then(data=>{
            console.log(data)
            res.json({
                status:200,
                msg:'Deleted Successfully'
            })
        })
    }
module.exports={adduser,login,viewcust,delcust}