console.log("Starting the promise example...");

let data = new Promise((resolve , reject)=>{

    console.log("in side promise");
    let party = false;
    if(party){
        resolve(party);
    }
    reject(party);
})

console.log(data);