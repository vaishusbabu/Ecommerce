const express=require('express')
const router=express.Router()

const user=require('./User/userController')
const pdt=require('./Pdt/PdtController')
const cart=require('./Cart/CartController')
const order=require('./Order/OrderController')

//user 

router.post('/insertdata',user.adduser)
router.post('/custlogin',user.login)
router.post('/delete/:id',user.delcust)
router.post('/allcust',user.viewcust)

//Product

router.post('/addpdt',pdt.upload,pdt.addpdt)
router.post('/allpdt',pdt.allpdt)
router.post('/dltpdt/:id',pdt.dltpdt)
router.post('/editpdt/:id',pdt.editpdt)
router.post('/idfetch/:id',pdt.idfetch)

//cart

router.post('/cartlist/:id',cart.cartlist)
router.post('/viewcart/:id',cart.viewcart)

//Order


router.post('/orderlist/:id',order.orderlist)
router.post('/cardpay/:id',order.cardpay)
router.post('/orders',order.orders)
router.post('/ord',order.ord)
router.post('/ordpdt/:id',order.ordpdt)



module.exports=router








//--------------------------------------------------
// router.post('/insertdata',(req,res)=>{
//     newuser=new Schema({
//         firstname:req.body.firstname,
//         lastname:req.body.lastname,
//         email:req.body.email,
//         password:req.body.password
//     })
//     newuser.save()
//     .then(data=>{
//         console.log("Saved Successfully")
//         res.json({
//             status:200,
//             msg:"Saved Succesfully",
//             data:data
//         })
//     })
//     .catch(error=>{
//         console.log("Error Occured")
//         res.json({
//             status:500,
//             msg:"Error",
//             data:error
//         })
//     })       
//     })

// router.post('/custlogin',(req,res)=>{
//     const email=req.body.email
//     const password=req.body.password

//     Schema.findOne({
//         email:email
//     })
//     .exec()
//     .then(data=>{
//         if(password==data.password)
//         {
//             console.log("Login Sucesfully")
//             res.json({
//                 status:200,
//                 msg:"Login Sucess",
//                 data:data,
//                 alert:"Login Sucess"
//             })
//         }
//         else{
//             res.json({
//                 status:500,
//                 msg:"Password Mismatch",
//                 alert:"Password mismatch"
//             })
//         }
//     })
//     .catch(err=>{
//         res.json({
//             status:500,
//             msg:"user not found",
//             Error:err
//         })
//     })
// })
// // 
// router.post('/allcust',(req,res)=>{
//     Schema.find({
        
//     })
//     .exec()
// .then(data=>{

//     console.log(data)
//     res.json({
//         status:200,
//         msg:'Data Fetched Succesfully',
//         data:data
//     })

// })
// .catch(err=>{
// console.log(err);
// res.json({
//     status:500,
//     msg:"No Data"
// })
// })
// })
// router.post('/delete/:id',(req,res)=>{
//     Schema.findByIdAndDelete({
//         _id:req.params.id
//     })
//     .exec()
//     .then(data=>{
//         console.log(data)
//         res.json({
//             status:200,
//             msg:'Deleted Successfully'
//         })
//     })
// })