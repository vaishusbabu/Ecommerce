const Order=require('./OrderSchema')

const orderlist=(req,res)=>{

    let custid=req.params.id
    let pdtid=req.body.pdtid
    let date=new Date()
    let deliverydate=req.body.deliverydate
    let paymenttype=req.body.paymenttype
    let paymentstatus=req.body.paymentstatus
    let shippingaddress=req.body.shippingaddress
    let quantity=req.body.quantity
    let totalamount=req.body.totalamount

    let neworder=new Order({
        custid:custid,
        pdtid:pdtid,
        date:date,
        deliverydate:deliverydate,
        paymenttype:paymenttype,
        paymentstatus:paymentstatus,
        shippingaddress:shippingaddress,
        quantity:quantity,
        totalamount:totalamount
    })
    neworder.save()
    .then(data=>{
        console.log("Ordered Succesfully")
        res.json({
            status:200,
            msg:"Orderder Succesfully",
            data:data
        })
    })
    .catch(error=>{
        console.log(error);
        console.log("Error Occured")
        res.json({
            status:500,
            msg:"Error Occured",
            data:error
        })
    })
}
const orders=(req,res)=>{
    Order.find({

    })
    .exec()
    .then(data=>{
        console.log(data)
        res.json({
            status:200,
            msg:"Data Fetched Successfully",
            data:data
        })
    })
    .catch(err=>{
        console.log(err)
        res.json({
            status:500,
            msg:"No Data"
        })
    })
}
const ord=(req,res)=>{
    Order.find({
            
        })
    .populate("pdtid")
    .populate("custid")
    .exec()
    .then(data=>{
        console.log("Viewed")
        res.json({
            status:200,
            msg:"Order Success",
            data:data
        })
    })
    .catch(error=>{
        console.log("Error Occured",error)
        console.log(error);
        res.json({
            status:500,
            msg:"Error",
            data:error
        })
    }) 
}

// const ordpdt=(req,res)=>{
//         Order.find({
//                 custid:req.params.id
//             })
//         .populate("pdtid")
//         .populate("custid")
//         .exec()
//         .then(data=>{
//             console.log("Viewed")
//             res.json({
//                 status:200,
//                 msg:"Order Success",
//                 data:data
//             })
//         })
//         .catch(error=>{
//             console.log("Error Occured",error)
//             console.log(error);
//             res.json({
//                 status:500,
//                 msg:"Error",
//                 data:error
//             })
//         }) 
// }

const ordpdt =async (req,res) =>{
    let flag=0
    let date=new Date()
    let data1=[]
    let data2=[]
        await Order.find({
        custid:req.params.id
    })
    .populate('pdtid')
    
    .exec()
    .then(data=>{
        data.map(x=>{
            console.log(" del year",x.deliverydate.getFullYear(),"month :",x.deliverydate.getMonth(),"date :",x.deliverydate.getDate());
            console.log("year",x.date.getFullYear(),"month :",x.date.getMonth(),"date :",x.date.getDate());
            if(x.deliverydate.getMonth()<x.date.getMonth()){
            flag=1
            }
            else if(x.deliverydate.getMonth()==x.date.getMonth() && x.deliverydate.getDate()<x.deliverydate.getDate()-2){
            flag=1
            }
            if(flag==1){
                data1.push(x)
            }
            else{
                data2.push(x)
            }
    
    
//if(x.deliverydate.getY)
        })
       // console.log(data)
        res.json({
            status:200,
            message:"Data fetched successfully",
            data1:data1,
            data2:data2
        })
    })
    .catch(err =>{
        console.log(err)
        res.json({
            status:500,
            message:"Error fetching data"
        })
    })
}


const cardpay = (req,res) => {
    Order.findByIdAndUpdate({
        _id: req.params.id
    },
    {
        paymentstatus : true
    })
    .exec()
    .then(data =>{
        console.log(data)
        res.json({
            status:200,
            message:"status updated",
            data:data
        })
    })
}
module.exports={orderlist,cardpay,orders,ordpdt,ord}
