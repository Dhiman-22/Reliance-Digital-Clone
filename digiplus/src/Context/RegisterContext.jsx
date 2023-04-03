import React from "react";



export const RegisterContext = React.createContext();

function RegisterContextProvider({children}){
    
      const[registerstate,setRegisterstate]=React.useState({
        isRegistered:false,
        regToken:null
      });

      function openRegister(token){
         setRegisterstate(
            {...registerstate,
            isRegistered:true,
            regToken:token
            }
         )
        
      }
      function closeRegister(token){
        setRegisterstate(
           {...registerstate,
           isRegistered:false,
           regToken:null
           }
        )
       
     }


    const val={registerstate,openRegister,closeRegister};

    return(
    <RegisterContext.Provider value={val}>
        {children}
    </RegisterContext.Provider>
    )
     
}

export default RegisterContextProvider;