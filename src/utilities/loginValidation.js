export default function validation(values){
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\. [^\s@]+$/
    const password_pattern = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]) [a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        error.username = "Username should not be empty"
    }
    else if(!email_pattern.test(values.username)) {
        error.username = "username Didn't match"
    }else {
        error.username = ""
    }

    if(values.password === "") {
        error.password = "Password should not be Wmpty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error; 
}