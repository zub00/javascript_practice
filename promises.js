let mumIsHappy = true;


// creating/making the promise
let newPhonePromise = new Promise (
     (resolve, reject) => {
        if(mumIsHappy == true) {
            let phone = {
                brand: "Samsung",
                color : "Black"
               } 
               resolve(phone)
        } else {
            let error = new Error ("You have been naughty")
            reject(error)
        }
       
    }   
);


let askMom =  () => {
    newPhonePromise.then(phone => console.log(phone)
    ).catch(error => console.log(error.message)) 
}

askMom()

