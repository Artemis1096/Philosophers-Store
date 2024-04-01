import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    try{
        const saltRounds = 10; // The cost factor controls how much time is needed to calculate a single BCrypt hash
        const hashedPassword = await bcrypt.hash(password,saltRounds); 
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
};

export const comparePassword = async (password,hashedPassword) => {
    // inbuilt function to compare the hashed and entered password
   return bcrypt.compare(password,hashedPassword);
}