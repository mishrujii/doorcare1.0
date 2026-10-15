export const adminLogin = async (req,res)=>{
    const {username, password} = req.body
    if(username===process.env.ADMIN_USERNAME){
        if(password===process.env.ADMIN_PASSWORD){
            console.log('admin logged in successfully');
        }
        else console.log('incorrect password!');
    }
    else console.log('invalid username!')
}