import request_blood_form from '../models/request_blood_form.js'
import users from '../models/auth.js'

export const getBloodRequestForm = async(req, res) => {

    const { email } = req.body;
    try{
        
        const existingUser = await users.findOne({email});

        // console.log(existingUser)

        if(!existingUser){
            res.status(404).json({ error: "User not found" });
            return;
        }

        const arr = existingUser.request;

        res.status(200).json({ result: arr });

    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}

export const addBloodRequest = async(req, res) => {

    const { email } = req.body[0];
    // const { email } = req.body[0];

    // console.log(email)

    const { type, amount, disease, status } = req.body[1];
    
    try{
        const existingUser = await users.findOne({email});

        console.log(existingUser)
    
        if(!existingUser){
            res.status(404).json({ error: "User not found" });
            return;
        }

        const arr = existingUser.request;


        // console.log(arr);

        const data = {
            type: type,
            amount: amount,
            disease: disease,
            status: status
        }

        arr.push(data);

        existingUser.request=arr;

        let result = await users.updateOne({_id:existingUser._id},{
            $set : existingUser
        })
        
        console.log(data)
        res.status(200).json("Added a new Blood Request Form Successfully")

    }
    catch(error){
        res.status(404).json("Internal Server Error");
    }

}