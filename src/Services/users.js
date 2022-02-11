export const login= async(data)=>{
    if(data.email==="" || data.password ===""){
        return {message:"Input cannot be empty"}
    }
    else{
        try{
            const get = await fetch('http://localhost:8000/login',{
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
            const get = await fetch('http://localhost:8000/register',{
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