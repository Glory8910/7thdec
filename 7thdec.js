
let a = [2, 2, 3, 4, 5, 6, 7]

//1)concat 
function getconcat(newarray, array_to_concatenate) {
    if(typeof(array_to_concatenate)!=='object'){
     array_to_concatenate=[array_to_concatenate];

    }
    let formedarray = [];
    for (i = 0; i < newarray.length; i++) {
        formedarray.push(newarray[i])

    }
    for (j = 0; j < array_to_concatenate.length; j++) {
        formedarray.push(array_to_concatenate[j])
    }

return formedarray

}
let concatenatedarray=getconcat(a,[457,14]);
console.log('concat',concatenatedarray)

//2)reverse
let a1 = [2, 2, 3, 4, 5, 6, 7]
function getreverse(array){
    let reversed=[];
    for(i=array.length-1;i>=0;i--){
        reversed.push(array[i]);
    }
    let a=reversed;
  
    return a
}
let reversed= getreverse(a1);
console.log('reversed',reversed)


//3)drop
let a2 = [2, 2, 3, 4, 5, 6, 7]
function getdropped(elearray,value_drop=1){
    let droppedval=[];

    for(i=0;i<elearray.length;i++){
        if(i<value_drop){
            elearray.shift();
          
        }

    }
return elearray
}
let drop=getdropped(a2,4);
console.log('dropped',drop)


//4)fill
let a3 = [2, 2, 3, 4, 5, 6, 7]
function getfilled(arr,value,start,end){
for(i=0;i<arr.length;i++){
if(i>=start && i<=end){
    arr[i]=value;
}

}
return arr
}
let fill=getfilled(a3,"*",1,4)
console.log('filled',fill)

//5)initial
let a4 = [2, 2, 3, 4, 5, 6, 7]
function getinitial(array){
    let newarr=[];
    for(i=0;i<array.length-1;i++){
newarr.push(array[i]);

    }
array=newarr;
return array;

}
var initial=getinitial(a4)
console.log('initial',initial)


//6)slice
let a5 = [2, 2, 3, 4, 5, 6, 7]
function getslice(array,start,end){
    let temparray=[];
    for(i=0;i<array.length;i++){
        if(i>=start && i<end){

        
            temparray.push(array[i]);
         

        }

    }
    array=temparray;
    
    return array;
}
let sliced=getslice(a5,2,5);
console.log('slice',sliced)



//7)indexof
let a6 = [2, 2, 3, 4, 5, 6, 7]
function getindex(array,value){
  
    for(i=0;i<array.length;i++){
        if(array[i]===value){
            return i;
        }
        else{
            return -1
        }
    }
}
var indexof=getindex(a6,5);
console.log('index of 5',indexof)
// if not present in array
var indexof=getindex(a6,0);
console.log('index of 0',indexof)


//8)chunk
let a7 = [2, 2, 3, 4, 5, 6, 7]
function getchunck(array, size) {
    let formarray = [];
    let mainarray = [];

    let count = 0;
    for (i = 0; i < array.length; i++) {

        count = count + 1;

        if (count <= size && i!==array.length) {

            formarray.push(array[i]);


        }

        if (count === size) {
            count = 0;

            mainarray.push(formarray);
            formarray = [];
        }
              if(count<size && i===array.length-1){

       mainarray.push(formarray);
       console.log(mainarray);
          }

    }
   return mainarray
}
getchunck(a7,2);
var d=getchunck(a7,3)
console.log('chunked',d)


//9)last
let a8 = [2, 2, 3, 4, 5, 6, 7]
function getlast(array) {

    for (i = 0; i < array.length; i++) {

        let othervals = array.length - 1;
        let no = ' ';
        if (i===othervals) {
            no = array[i];


            array = no


            return array
        }
    }
}
let last=getlast(a8);
console.log('last',last)




//10)pair
let b = [['a', 2], ['c', 4],['d',[2,3,4]]];
function getpairs(array) {

    let val;
    let ke;
    let obj = {};

    for (i = 0; i < array.length; i++) {

        for (j = 0; j < array[i].length; j++) {
            if (j === 0) {

                ke = array[i][j];
       
            }
            if (j > 0 && j === array[i].length - 1) {

                val = array[i][j];
        
            }
            Object.assign(obj,{[ke]:val})


        }
    }

return obj
}
let pair=getpairs(b);
console.log('pair',pair)

























