export const login= async(data)=>{
    if(data.email==="" || data.password ===""){
        return {message:"Input cannot be empty"}
    }
    else{
        try{
            const get = await fetch('https://assignmentservermern.herokuapp.com/login',{
            method :"POST",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return await get.json()
        }
    
        catch(err){
            return err
        }
    }
    

}

export const register= async(data)=>{
    if(data.password !==data.confirmPassword){
        return {message:'Passwords do not match'}
    }
    else{
        try{
            const get = await fetch('https://assignmentservermern.herokuapp.com/register',{
            method :"POST",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(data)
        })
        return await get.json()
        }
    
        catch(err){
            return err
        }
    }
    

}