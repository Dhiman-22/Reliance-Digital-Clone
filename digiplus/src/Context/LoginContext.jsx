import React from "react";



export const LoginContext = React.createContext();

function LoginContextProvider({children}){
    
      const[loginstate,setLoginstate]=React.useState({
        isLogin:false,
        loginToken:null
      });

      function openLogin(token){
         setLoginstate(
            {...loginstate,
            isLogin:true,
            loginToken:token
            }
         )
        
      }

      function closeLogin(){
        setLoginstate({
            ...loginstate,
            isLogin:false,
            loginToken:null
        })
      }

    const val={loginstate,openLogin,closeLogin};

    return(
    <LoginContext.Provider value={val}>
        {children}
    </LoginContext.Provider>
    )
     
}

export default LoginContextProvider;