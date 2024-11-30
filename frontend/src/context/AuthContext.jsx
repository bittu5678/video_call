import { createContext ,useCallback, useEffect, useState} from "react";
import { baseUrl, postRequest } from "../utils/services";

export const Authcontext = createContext();

export const AuthcontextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setisRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
            name:"",
            email:"",
            password:"",

    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setisLoginLoading] = useState(false); 
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",

});

    console.log("registerinfo", registerInfo);
    console.log("LoginInfo", loginInfo);

    useEffect(()=>{
        const user = localStorage.getItem("User");

        setUser(JSON.parse(user));
    },[]);

    
    const updateRegisterInfo = useCallback((info) =>{
        setRegisterInfo(info);
    }, []);


    const updateLoginInfo = useCallback((info) =>{
        setLoginInfo(info);
    }, []);


    const registerUser = useCallback(async(e)=>{
            e.preventDefault();
            setisRegisterLoading(true);
            setRegisterError(null);
//inserted here
            /*const formData = new FormData();
            formData.append("name", registerInfo.name);
            formData.append("email", registerInfo.email);
            formData.append("password", registerInfo.password);
            formData.append("profileImage", registerInfo.profileImage);*/

            const response = await postRequest(`${baseUrl}/registration`, JSON.stringify(registerInfo));
            //const response = await postRequest(`${baseUrl}/users/register`, formData);
            setisRegisterLoading(false);
            if(response.error){
                return setRegisterError(response);
            }
            localStorage.setItem("User", JSON.stringify(response))
            setUser(response)
    },[registerInfo]);

        const loginUser = useCallback(async(e) => {
            e.preventDefault();
            setisLoginLoading(true);
            setLoginError(null);
            const response = await postRequest(`${baseUrl}/login`, JSON.stringify(loginInfo));
            setisLoginLoading(false);
            
            if(response.error){
                    return setLoginError(response);
            }
           localStorage.setItem("User", JSON.stringify(response));
            setUser(response);
        }, [loginInfo]);

        
        
        const logoutUser = useCallback(()=>{
            localStorage.removeItem("User");
            setUser(null);
        },[]);



    return( <Authcontext.Provider value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerError,
        registerUser,
        isRegisterLoading,
        logoutUser,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading,
    }}>  
                {children}
    </Authcontext.Provider>
    );
};