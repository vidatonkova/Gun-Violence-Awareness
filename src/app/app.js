const csvFilePath='\gundata.csv'
const csv=require('csvtojson')
console.log(__dirname);
csv()
.fromFile("C:\Users\ekels\cop3530-project3\src\gundata.csv")
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 