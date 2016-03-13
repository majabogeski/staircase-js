function processData(input) {
for (var i=0; i<input; i++){
    // note: join() requires a minimum
    //   of 2 array elements to have any effect
    var spaces = new Array(input-i).join(" "); 
    var hashes = new Array(2+i).join("#");
    console.log(spaces+hashes);      
}
}