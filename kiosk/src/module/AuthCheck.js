const users=[
    {email:'123', password:"123", name: 'Kim'}
]

export default function signIn (email, password){
    const user= users.find(
        (user)=> user.email === email && user.password === password
    )
    if (user === undefined ) throw new Error()
    return user
}