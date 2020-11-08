
const INITIAL_STATE ={
    username: "M.Arsalan",
    email:"marsalan8@outlook.com",
    
}


export default (state =INITIAL_STATE,action)=>{
    console.log("auth_action",action)
   
    return state;
}