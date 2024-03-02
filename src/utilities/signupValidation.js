export default function validation(values) {
    let error = {};
  
    if (values?.first_name === "") {
      error.first_name = "First Name should not be empty";
    } else if (values.first_name?.length > 100) {
      error.first_name = "First name too long";
    } else {
      error.first_name = "";
    }
  
    if (values.last_name === "") {
      error.last_name = "Last Name should not be empty";
    } else if (values?.last_name?.length > 100) {
      error.last_name = "Last name too long";
    } else {
      error.last_name = "";
    }
  
    if (values?.email === "") {
      error.email = "email should not be empty";
    }
    else {
      error.email = "";
    }
  
    if (values?.username === "") {
      error.username = "Username should not be empty";
    } else if (values?.username?.length > 100) {
      error.last_name = "Username too long";
    } else {
      error.username = "";
    }
  
    if (values?.password === "") {
      error.password = "Password should not be Empty";
    }
    else {
      error.password = "";
    }
  
    if (values?.confirmPassword === "") {
      error.confirmPassword = "Password should not be empty";
    }
    else if (values?.confirmPassword !== values?.password) {
      error.confirmPassword = "Password didn't match";
    } else {
      error.confirmPassword = "";
    }
    
    return error;
  }
  