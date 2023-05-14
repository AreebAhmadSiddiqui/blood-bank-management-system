import donate_blood_form from '../models/donate_blood_form.js'
import users from '../models/auth.js'

export const getBloodDonationForm = async(req, res) => {

    const { email } = req.body;
    try{
        
        const existingUser = await users.findOne({email});

        // console.log(existingUser)

        if(!existingUser){
            res.status(404).json({ error: "User not found" });
            return;
        }

        const arr = existingUser.donate;

        res.status(200).json({ result: arr });

    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}

export const addBloodDonation = async(req, res) => {

    const { email } = req.body[0];
    // const { email } = req.body[0];

    // console.log(email)

    const { type, amount, disease, status } = req.body[1];
    
    try{
        const existingUser = await users.findOne({email});

        // console.log(existingUser)
    
        if(!existingUser){
            res.status(404).json({ error: "User not found" });
            return;
        }

        const arr = existingUser.donate;


        // console.log(arr);

        const data = {
            type: type,
            amount: amount,
            disease: disease,
            status: status
        }

        arr.push(data);

        existingUser.donate=arr;

        let result = await users.updateOne({_id:existingUser._id},{
            $set : existingUser
        })
        
        console.log(data)
        res.status(200).json("Added a new Blood Donation Form Successfully")

    }
    catch(error){
        res.status(404).json("Internal Server Error");
    }

}