import {FaBacterium,FaEnvelope,FaLock, FaUser } from 'react-icons/fa';
import './SignUpPage.css'
import {  useState } from "react";
import { login ,register} from '../../Services/users';
import ButtonSpinner from '../Loaders/ButtonSpinner';


const SignUpPage =()=>{
    const [page,setPage] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [loginDetails ,setLoginDetails] = useState({
        email:"",
        password:""
    })

    const [signInDetails ,setSignInDetails] = useState({
        username :"",
        email:"",
        password:"",
        confirmPassword:''
    })

    


    const userLogin =async()=>{
        setIsLoading(true)
        const res = await login(loginDetails)
        alert(res.message)
        setIsLoading(false)
    }

    const userSignin = async()=>{
        setIsLoading(true)
        const res = await register(signInDetails)
        alert(res.message)
        setPage(res.page)
        setIsLoading(false)
    }

    
      return (
            <div className="sign-up-page-container">
                {page?
                <form className="sign-up-page">
                    <div className="sign-up-page-header"><FaBacterium/></div>
                    <div className="sign-up-page-form">
                        <div className="sign-up-page-input-wrapper"><FaEnvelope/><input type ="text" placeholder="Email" className="sign-up-page-input" onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})}></input></div>
                        <div className="sign-up-page-input-wrapper"><FaLock/><input type ="password" placeholder= "Password" className="sign-up-page-input" onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}></input></div>
                        {isLoading?<ButtonSpinner/>:<button className="primary-button" onClick={userLogin}>Log In</button>}
                    </div>
                    <p onClick={()=>setPage(false)} className="highlighted-text">Create a new account</p>
                </form>
            :
            <form className="sign-in-page">
                <div className="sign-up-page-header"><FaBacterium/></div>
                <div className="sign-up-page-form">
                    <div className="sign-up-page-input-wrapper">
                        <FaUser/>
                        <input type ="text" placeholder="Username" className="sign-up-page-input" onChange={(e)=>setSignInDetails({...signInDetails,username:e.target.value})}></input>
                    </div>
                    <div className="sign-up-page-input-wrapper">
                        <FaEnvelope/>
                        <input type ="text" placeholder="Email" className="sign-up-page-input" onChange={(e)=>setSignInDetails({...signInDetails,email:e.target.value})}></input>
                    </div>
                    <div className="sign-up-page-input-wrapper">
                        <FaLock/>
                        <input type ="password" placeholder= "Password" className="sign-up-page-input" onChange={(e)=>setSignInDetails({...signInDetails,password:e.target.value})}></input>
                    </div>
                    <div className="sign-up-page-input-wrapper">
                        <FaLock/>
                        <input type ="password" placeholder= "Confirm Password" className="sign-up-page-input" onChange={(e)=>setSignInDetails({...signInDetails,confirmPassword:e.target.value})}></input>
                    </div>
                </div>
                {isLoading?<ButtonSpinner/>:<button className="primary-button" onClick={userSignin}>Sign In</button>}
                <p onClick={()=>setPage(true)} className="highlighted-text">Already have an account ?</p>
            </form>
        }</div>
      );
}

export default SignUpPage;