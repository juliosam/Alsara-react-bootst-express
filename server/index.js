
const express = require('express')
const app = express()
const port = 3000

const products = [
  { 
    id: 1,
    name: "prod-1",
    price: 75,
    image: "Fotos-alsara/prod-1.jpg" ,
    stock: 30  
  },
  { 
    id: 2,
    name: "prod-2",
    price: 74,
    image: "Fotos-alsara/prod-2.jpg" ,
    stock: 30  
  },
  { 
    id: 3,
    name: "prod-3",
    price: 73,
    image: "Fotos-alsara/prod-3.jpg" ,
    stock: 30  
  },
  { 
    id: 4,
    name: "prod-4",
    price: 72,
    image: "Fotos-alsara/prod-4.jpg" ,
    stock: 30  
  },
  { 
    id: 5,
    name: "prod-5",
    price: 71,
    image: "Fotos-alsara/prod-5.jpg" ,
    stock: 30  
  },
  { 
    id: 6,
    name: "prod-6",
    price: 75,
    image: "Fotos-alsara/prod-6.jpg" ,
    stock: 30  
  },
  { 
    id: 7,
    name: "prod-7",
    price: 74,
    image: "Fotos-alsara/prod-7.jpg" ,
    stock: 30  
  },
  { 
    id: 8,
    name: "prod-8",
    price: 78,
    image: "Fotos-alsara/prod-8.jpg" ,
    stock: 30  
  },
  { 
    id: 9,
    name: "prod-9",
    price: 72,
    image: "Fotos-alsara/prod-9.jpg" ,
    stock: 30  
  },
  { 
    id: 10,
    name: "prod-10",
    price: 71,
    image: "Fotos-alsara/prod-10.jpg" ,
    stock: 30  
  },
  { 
    id: 11,
    name: "prod-11",
    price: 75,
    image: "Fotos-alsara/prod-11.jpg" ,
    stock: 30  
  },
  { 
    id: 12,
    name: "prod-12",
    price: 74,
    image: "Fotos-alsara/prod-12.jpg" ,
    stock: 30  
  },
  { 
    id: 13,
    name: "prod-13",
    price: 73,
    image: "Fotos-alsara/prod-13.jpg" ,
    stock: 30  
  },
  { 
    id: 14,
    name: "prod-14",
    price: 72,
    image: "Fotos-alsara/prod-14.jpg" ,
    stock: 30  
  },
  { 
    id: 15,
    name: "prod-15",
    price: 71,
    image: "Fotos-alsara/prod-15.jpg" ,
    stock: 30  
  },
  { 
    id: 16,
    name: "prod-16",
    price: 75,
    image: "Fotos-alsara/prod-16.jpg" ,
    stock: 30  
  },
  { 
    id: 17,
    name: "prod-17",
    price: 74,
    image: "Fotos-alsara/prod-17.jpg" ,
    stock: 30  
  },
  { 
    id: 18,
    name: "prod-18",
    price: 78,
    image: "Fotos-alsara/prod-18.jpg" ,
    stock: 30  
  },
  { 
    id: 19,
    name: "prod-19",
    price: 72,
    image: "Fotos-alsara/prod-19.jpg" ,
    stock: 30  
  },
  { 
    id: 20,
    name: "prod-20",
    price: 71,
    image: "Fotos-alsara/prod-20.jpg" ,
    stock: 30  
  }
]

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/", express.static("a-collage"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})