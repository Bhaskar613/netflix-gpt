export const checkValidData=(name, email, password)=>{

    const isNameValid= /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name)

    const isEmailvalid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isNameValid) return "Name is Not Valid"
    if(!isEmailvalid) return "Email is Not valid"
    if(!isPasswordValid) return "Password is Not valid"
return null;
}