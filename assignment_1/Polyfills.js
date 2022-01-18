const arr = [1,2,3,4,5];

//simulate browser incompatibility
Array.prototype.forEach = null;

if(!Array.prototype.forEach){
    // polyfills
    Array.prototype.forEach = function(callbackfunction){
        for(let val in this){
            callbackfunction(val);
        }
    }
}

arr.forEach((val) => {
    console.log(val*2)
});