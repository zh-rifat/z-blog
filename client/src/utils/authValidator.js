const passwordValidator=(p,rp)=>{
    if(p.length>0&&p.length<8){
        return "password is too short.";
    }
    else if(p!=rp){
        return "Password doesn't match!";
    }else{
        return null;
    }
}
const emailValidator=(email)=>{
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email||emailRegex.test(email)){
        return null;
    }else{
        return "Enter a valid email address.";
    }
}

export {passwordValidator,emailValidator}
