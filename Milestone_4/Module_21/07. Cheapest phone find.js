const phones = [
    {name:"iphone",model:"4",rom:"16gb",ram:"1gb",price:23000},
    {name:"iphone",model:"5",rom:"32gb",ram:"1gb",price:16000},
    {name:"iphone",model:"6",rom:"64gb",ram:"1gb",price:15000},
    {name:"iphone",model:"7",rom:"128gb",ram:"2gb",price:17000},
    {name:"iphone",model:"8",rom:"256gb",ram:"2gb",price:19000},
]

let cheapest = phones[0];
for (const phone of phones){
    if (phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);