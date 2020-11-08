


const set_data =(data)=>{
    return (dispatch)=>{
        dispatch({type:"Set_Data",data:data})
}
}



export {
    set_data
}
