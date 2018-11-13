let fs = require('fs');
let _ = require('underscore')
fs.readFile('./flower.txt',(err,data) =>{
 
    let flowers = data.toString();
    let flower_split = flowers.split("\n");
    let count_of_flowers = _.size(flower_split);
    // print the count of flowers
    console.log(count_of_flowers);

 let FlowerStartWithS = _.filter(flower_split , function(flower_split) {return flower_split.charAt(0) === "S"});

 // print the flowers start with "S"
 console.log(FlowerStartWithS);

 let CwithoutS = count_of_flowers - _.size(FlowerStartWithS);

 // print the count of flower start without "S"
 console.log(CwithoutS);

 let FlowerStartWithR = _.filter(flower_split , function(flower_split) {return flower_split.charAt(0) === "R"});

// print the count of flower start without "R" 
console.log(FlowerStartWithR);

 
    
   
    let count = 0 ;
    for (var i = 0 in flower_split){
    if (flower_split[i].length == 5) 
   
    
    count = count + 1;
    
    
    }
     
// print the count of flower length is 5
    console.log(count);


})

