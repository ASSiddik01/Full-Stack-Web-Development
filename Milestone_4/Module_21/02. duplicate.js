var names = ["shama","shakib","salman","sweet","sunny","shama","salman","sweet"];

function removeDuplicate(names){
    const unique=[];
    for (const element of names){
        // console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    } return unique;
}

var uniqueNames= removeDuplicate(names);
console.log(uniqueNames);
