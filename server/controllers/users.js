import users from '../models/auth.js'

export const getUsers = async(req, res) => {

    try{
        const allUsers = await users.find();
        const allUserDetails = []
        allUsers.forEach(users => {
            allUserDetails.push({ _id: users._id, name: users.name, email: users.email, password: users.password, request: users.request, donate: users.donate })
        })
        res.status(200).json(allUserDetails);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}

export const addUser = async(req, res) => {

    const newUser = new users(req.body);
    
    try{
        
        await newUser.save();
        res.status(200).json("Added a new User Successfully")

    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}