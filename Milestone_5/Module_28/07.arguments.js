function addNumbers(num){ // unlimited arguments accepts
    let result = 0;
    for (const num of arguments){
        result = result +num
    }
    return result;
}

console.log(addNumbers(33,66,44,33));