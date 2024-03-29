const mongoose = require('mongoose')
const Coupon = require('./models/Coupon')

// mongoose.connect("mongodb+srv://devsprout:devsprout@cluster0.mnedp.mongoCoupon.Couponnet/myFirstDatabase?retryWrites=true&w=majority",{
mongoose.connect("mongodb://localhost:27017/coupon",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open", ()=>{console.log("Connected coupon")});

const seedCoupon = async () => {
    await Coupon.deleteMany({}).then(console.log("deleted data"));
    Coupon.insertMany([{
        brand: "Vincent Chase",
        description: "For your glasses",
        code: "5XYYS7NFH",
        prize: 500,
        name: "Ashwath",
        phone: "6642380684"
    },{
        brand: "louis vuitton",
        description: "50% off",
        code: "4ERUS7NFH",
        prize: 1000,
        name: "Vansh",
        phone: "9842388085"
    },{
        brand: "Parker",
        description: "Buy 2 get 1 free",
        code: "6HGJS8NFH",
        prize: 1000,
        name: "Vishal",
        phone: "8842384086"
    },{
        brand: "Vincent Chase 1",
        description: "For your glasses",
        code: "5XYYS7EFH",
        prize: 500,
        name: "Ashwath",
        phone: "6642380684"
    },{
        brand: "louis vuitton 2",
        description: "50% off",
        code: "4ERRS7NFH",
        prize: 1000,
        name: "Vansh",
        phone: "9842388085"
    },{
        brand: "Parker Pen",
        description: "Buy 2 get 1 free",
        code: "6HGJK8NFH",
        prize: 1000,
        name: "Vishal",
        phone: "8842384086"
    }
    ]).then(console.log("Logged the ddata"));
}

seedCoupon();