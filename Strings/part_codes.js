function getSupplier (info) {
let indexNum = info.indexOf(":");
let finalString = info.slice(0,indexNum);
return finalString;
}
function getProductNumber (info) {
let indexNum = info.indexOf(":");
let indexNum2 = info.indexOf("-");
let finalString = info.slice(indexNum+1, indexNum2);
return finalString;
} 
function getSize (info) {
let indexNum = info.indexOf("-");
let finalString = info.slice(indexNum+1);
return finalString;
}
console.log(getSupplier("ACME:123-L"));
console.log(getProductNumber("ACME:123-L"));
console.log(getSize("ACME:123-L"));
console.log(getSupplier("DI:12345-M"));
console.log(getProductNumber("DI:12345-M"));
console.log(getSize("DI:12345-M"));
console.log(getSupplier("ACE:1-12"));
console.log(getProductNumber("ACE:1-12"));
console.log(getSize("ACE:1-12"));