const Product=require('./PdtSchema')

const multer = require('multer');

    const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
    })

    const upload=multer({storage:storage}).single('img')

    const addpdt=(req,res)=>{
        console.log(req.body);
    let newpdt=new Product({
        pdtname:req.body.pdtname,
        quantity:req.body.quantity,
        price:req.body.price,
        img:req.file
    })
    newpdt.save()
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
            msg:"Error Occured",
            data:error
        })
    })       
    }
const allpdt=(req,res)=>{
        Product.find({
            
        })
        // .sort({ date: -1 })
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
const dltpdt =(req,res)=>{
    Product.findByIdAndDelete({
        _id:req.params.id
    })
    .exec()
.then(data=>{

    console.log(data)
    res.json({
        status:200,
        msg:'Deleted Succesfully..',
        data:data
    })

})
.catch(err=>{
console.log(err);
res.json({
    status:500,
    msg:"Error Occured"
})
})
}
const editpdt=(req,res)=>{
    console.log(req.params.id);
    Product.findByIdAndUpdate({
        _id:req.params.id},
        {pdtname:req.body.pdtname,
        quantity:req.body.quantity,
        price:req.body.price,
        img:req.file} )

.exec()
.then(data=>{

    console.log(data)
    res.json({
        status:200,
        msg:' Product Updated Succesfully',
        data:data
    })

})
.catch(err=>{
console.log(err);
res.json({
    status:500,
    msg:"No Update"
})
})
}
const idfetch= (req,res)=>{
    Product.findById({
    _id:req.params.id
    })
    .exec()
    .then(data=>{
        console.log("Data Fetched Succesfully")
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

 module.exports={addpdt,upload,allpdt,dltpdt,editpdt,idfetch}