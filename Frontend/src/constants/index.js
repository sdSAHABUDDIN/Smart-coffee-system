import {Americano,Cappuccino,CaramelMacchiato, ColdBrew, Hazelnut, IcedAmericano, IcedMocha,VanillaLatte, AutoBrew,PerfectTemp,CleanSystem,machine1,machine2,machine3,machine4,shop1,shop2,shop3,shop4,new1,new2} from "../assets"

export const coffeeList=[
  {
    id:1,
    name:"Americano",
    img:Americano,
  },
   {
    id:2,
    name:"Cappuccino",
    img:Cappuccino,
  },
   {
    id:3,
    name:"Caramel Macchiato",
    img:CaramelMacchiato,
  },
   {
    id:4,
    name:"Cold Brew",
    img:ColdBrew,
  },
   {
    id:5,
    name:"Hazelnut",
    img:Hazelnut,
  },
   {
    id:6,
    name:"Iced Americano",
    img:IcedAmericano,
  },
   {
    id:7,
    name:"Iced Mocha",
    img:IcedMocha,
  },
  {
    id:8,
    name:"VanillaLatte",
    img:VanillaLatte,
  },
 
]

export const facility=[
  {
    id:1,
    img:AutoBrew,
    title:" Automatic Brewing",
    des:"Let the machine do the work — perfect brews every time with onetouch.",
  },
   {
    id:2,
    img:PerfectTemp,
    title:"Perfect Temperature",
    des:"Intelligent heating system to ensure every cup is just right.",
  },
   {
    id:3,
    img:CleanSystem,
    title:"Easy Cleaning",
    des:"Built-in cleaning system that keeps your machine fresh and ready.",
  },
]
export const machine=[
  {
    id:1,
    img:machine1,
    OriginalPrice:22000,
    DiscountPrice:19000,

  },
  {
    id:2,
    img:machine2,
    OriginalPrice:24000,
    DiscountPrice:20000,
    
  },
  {
    id:3,
    img:machine3,
    OriginalPrice:30000,
    DiscountPrice:24000,
    
  }
  ,{
    id:1,
    img:machine1,
    OriginalPrice:26000,
    DiscountPrice:23000,
    
  }
]
export const thumbnail=[
  {
    id:1,
    img:machine1
  },
   {
    id:2,
    img:machine2
  },
   {
    id:3,
    img:machine3
  },
   {
    id:4,
    img:machine4
  }
]
export const shop=[
  {
    id:1,
    img:shop1,
    name:"Coffee house",
    Add:"Andheri, Mumbai, Maharashtra",
    time:"8:00AM-10PM"
  },
  {
    id:2,
    img:shop2,
    name:"Coffee house",
    Add:"Indiranagar, Bengaluru, Karnataka",
    time:"8:00AM-10PM"
  },
  {
    id:3,
    img:shop3,
    name:"Coffee house",
    Add:"Maninagar, Ahmedabad, Gujarat",
    time:"8:00AM-10PM"
  },
  {
    id:4,
    img:shop4,
    name:"Coffee house",
    Add:"Navrangpura, Ahmedabad, Gujarat",
    time:"8:00AM-10PM"
  },
]

export const Whatsnew=[
  {
    id:1,
    img:new1,
    title:"New Seasonal Flavors Released!",
    date:"June 1, 2025",
    desc:"Try our new Honey Almond Latte and Choco-Cinnamon Cold Brew this summer."
  },
   {
    id:2,
    img:new2,
    title:"Introducing Loyalty Rewards",
    date:"May 10, 2025",
    desc:"Earn beans for every brew and redeem exciting rewards!"
  },
   

]