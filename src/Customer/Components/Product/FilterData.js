

export const  sortOptions = [
    { name: "Price: Low to High", value:"price_low",  current: false },
    { name: "Price: High to Low", value:"price_high",  current: false },
  ];
  
export const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ];

  export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Blue",
    "Pink",
    "Violet",
    "Yellow",
    "Orange"
  ]

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'White', label: 'White', checked: false },
        { value: 'Black', label: 'Black', checked: false },
        { value: 'Red', label: 'Red', checked: false },
        { value: 'Marun', label: 'Marun', checked: false },
        { value: 'Blue', label: 'Blue', checked: false },
        { value: 'Pink', label: 'Pink', checked: false },
        { value: 'Violet', label: 'Violet', checked: false },
        { value: 'Yellow', label: 'Yellow', checked: false },
        { value: 'Orange', label: 'Orange', checked: false }
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false }
      ],
    },
  ]



  export const singleFilter =[
    {id:"Price",
     name:"Price",
     options:[
        {value:"199-399", lable: "₹ 199 To ₹ 399"},
        {value:"399-599", lable: "₹ 399 To ₹ 599"},
        {value:"599-999", lable: "₹ 599 To ₹ 999"},
        {value:"999-1399", lable: "₹ 999 To ₹ 1399"},
        {value:"1399-3999", lable: "₹ 1399 To ₹ 3999"},

     ]
    },

    {id:"discount",
        name:"Discount Range",
        options:[
           {value:"10", lable: "10 % And Above"},
           {value:"20", lable: "20 % And Above"},
           {value:"30", lable: "30 % And Above"},
           {value:"50", lable: "50 % And Above"},
           {value:"70", lable: "70 % And Above"},
           {value:"90", lable: "90 % And Above"}
          
          ]
    },

    {id:"stock",
        name:"Availability",
        options:[
           {value:"in_stock", lable: "In Sotck"},
           {value:"out_stock", lable: "Out Of Stock"} ,
           {value:"comming_soon", lable: "Comming Soon"}  
        ]
    }
  ]
