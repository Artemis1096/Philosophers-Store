import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    try{
        const saltRounds = 10; //used for hashing password
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
};

export const comparePassword = async (password,hashedPassword) => {
    // compares hashed password with the entered password
    return bcrypt.compare(password,hashedPassword);
}