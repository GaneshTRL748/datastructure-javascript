//1.concat->joins the array
let arr=['ganesh',1,2,3];
let arr1=new Array('suba',4,5,6);
let arr5=arr.concat(arr1);
//2.copyWithin->copy the at position and shift
let  arr3=Array('ruby','Aimee','maeve');
arr3.copyWithin(1,0);
console.log(arr3);
//3.entries->return the array iterator with key and value pair
let arr4=['denver','tokoyo','professor'];
let arr6=arr4.entries();
for(let arr7 of arr6)
{
    console.log(arr7);
}
//4.every->check the every element and return true or false based on the given condition
let arr8=['anisha','anitha','andie'];
console.log(arr8.every(
    (value)=>{
       return value.length >=4;
    }
));
console.log(arr8.every((value)=>{return value.charAt(0)=='a';}));
//5.fill -> fills the element in the mentioned position and position to position
let arr9=['eleven','mike','max','steve','manson'];
arr9.fill('lucas',2,4);
console.log(arr9);
//6.filter -> apply filter to the array
let arr10=['ganesh','suresh','ramesh','arun'];
let arr11=arr10.filter((value)=>{return value.charAt(value.length-1)=='h'});//filtering the names end with h
console.log(arr11);
//7.find used to find the element which statisfy the given condition
let arr12=[10,20,30];
let arr13=(arr12.find((value)=>{return value>15;}));
console.log(arr13);
//8.find index similar to find instead returns the index of element
let arr14=['10000','20000','30000'];
console.log(arr14.findIndex((value)=>{return value>1000}));
//9.forEach -> access the each element in array
let arr15=['pradeep','nikitha','baskar'];
arr15.forEach((value,index,arr15)=>{
    console.log(index+" "+value);
})
//10.from convert string into array
let y="THOMAS SHELBY";
let arr16=Array.from(y);
console.log(arr16);
//11.includes return true if the element present in the array
let arr17=['prabhu','hema','sathish','ravi'];
console.log(arr17.includes('ravi'));
//12.indexof return the index of that element
let arr18=['ram','janani','kumaran','ram'];
console.log(arr18.indexOf('ram'));
//13.isarray check the given object is array or not
console.log(Array.isArray(arr18));
//14.join -> return the array as single string and joins the string in it
let arr19=['ganesh','is','smart','boy'];
let name1=arr19.join('');
console.log(name1);
//15.key ->return the array iterator with key
let arr20=['siva','sakthi'];
let keys=arr20.keys();
for(let z of keys)
{
    console.log(z);
}
//16.lastidexof -> return the last index of the element
console.log(arr18.lastIndexOf('ram'));
//17.map access the element do some maths operation and return the element
let arr21=[1,2,3,4,5];
console.log(arr21.map((value)=>{return value+2;}));
//18.push ->add the element at the last position in the array
let arr22=['keerthi','vasu'];
arr22.push('ganesh');
console.log(arr22);
//19.pop ->remove the element in the last position in the array
arr22.pop();
console.log("After poped:"+arr22);
//20.prototype -> make some operation in the object
let arr23=['KRISHNA','NILA'];
Array.prototype.lowercase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toLowerCase();
    }
  };
  arr23.lowercase();
  console.log(arr23);
//21.reduce ->do the operation and gives the single element starts with left
let arr24=[1,2,3]
console.log(arr24.reduce((a,b)=>{ return a*b;}));
//22.reduceRight ->similar to reduce but starts with right
console.log(arr24.reduceRight((a,b)=>{ return a-b;}));
//23.reverse -> reverse the given array
arr9.reverse();
console.log("After reversed:"+arr9);
//24.shift -> remove the first element in the array
arr9.shift();
console.log(arr9);
//25.slice -> cut the needed part of the array
let arr26=['arun','bala','venky','harish'];
let arr27=arr26.slice(1,3);
console.log(arr27);
//26.some -> similar to every but if any one statisfy return true
console.log(arr8.some(
    (value)=>{
       return value.length >=4;
    }
));
//27.sort -> sort the array in ascending or descending
let arr28=[8,9,2,1,10];
arr28.sort((a,b)=>{return a-b;});
console.log(arr28);
//28.splice -> add the element in array at the given index if you want to remove the you can do it 
arr28.splice(1,1,'ganesh');
console.log(arr28);
//29.tostring convert array to string
let arr29=['arun','is','boy'];
let statement=arr29.toString();
console.log(statement);
//30.unshift -> add new element in the first
arr29.unshift('and');
arr29.unshift('ganesh');
console.log(arr29);
//31.valueof -> return the array
let arr30=arr29.valueOf();
console.log(arr30);
