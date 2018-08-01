
export  function read(){
    
    
    return  {
        "phrases":[
            {"id":"1",
            "phrase":"How are you today?"},
            {"id":"2",
            "phrase":"I am doing fine."},
            {"id":"3",
            "phrase":"How are you doing?"}

        ]
    }
}

export function write(phrase:string){
    console.log("TODO: write");
}

// Deletes the item. It will call the web api and return boolean if the deletion was a success.
export function remove(id:string){
    // TODO: call web service to remove item.
    return true; 
}