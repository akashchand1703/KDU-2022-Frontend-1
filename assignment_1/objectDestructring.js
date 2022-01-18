// OBECT DESTRUCTRING 

// Nested Object
let nestedObject = {
    data : {
        items:
            {name : 'akash', age : 21, address:{
                state : 'uttarakhand',
                city : 'khatima',
                pincode: 262308
            }}
    },
    status : 'live',
}


const {data : { items : {name , age , address : {state, city ,pincode}}},status} = nestedObject;
console.log("Object destructring for nested object");
console.log("status : "+status);
console.log("name : "+name);
console.log("age : "+age);
console.log("pincode : "+pincode);

// For Nested Array
let nestedArrayOfObject = {
    data : {
        items:[
            {name : 'akash', age : 21, address:{
                state : 'uttarakhand',
                city : 'khatima',
                pincode: 262308
            }},
            {name : 'ankit', age : 22, address:{
                state : 'JAMMU',
                city : 'udhampur',
                pincode: 12212
            }}
        ]
    },
    status : 'live',
}

console.log("Object destructring for nested array of object");
console.log(nestedArrayOfObject)
const { data : {items :[item1, item2]}} = nestedArrayOfObject;
console.log(item1,item2)
