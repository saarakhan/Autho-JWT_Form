const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const zod = require("zod");

const app = express();

app.use(cors());
app.use(express.json());

const jwtpassword = "12213";

const port = 3000;

mongoose.connect(
    /*Mongo_url*/);

const USERS_DATA = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});
//schema valiation with ZOD
const Schema = zod.object({
    name: zod.string({ message: 'Name is required' }),

    password: zod.string().min(8, { message: 'Password must be at least 8 characters long' })
})

app.post('/login', async (req, res) => {
    const validationResult = Schema.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({
            errors: validationResult.error.format(),
        });
    }

    const { name, password } = validationResult.data;

    let userExists = await USERS_DATA.findOne({ name: name });
    if (!userExists) {
        return res.status(400).json({
            msg: "User doesnot exists"
        });
    }
    else {
        if (!(userExists.password == password)) {
            res.json({
                msg: "password incorrect"
            })
        }
    }
    const token = jwt.sign({ name: name }, jwtpassword);
    res.send(token);
})

app.post('/signup', async (req, res) => {
    const validationResult = Schema.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({
            errors: validationResult.error.format(),
        });
    }

    const { name, password } = validationResult.data;
    let userExist = await USERS_DATA.findOne({ name: name });
    if (userExist) {
        return res.status(400).json({
            msg: "user already exists"
        })
        // return res.send("User Already exists")
    }

    await USERS_DATA.create({
        name: name,
        password: password
    });
    res.json({
        msg: "signed in successfully!"
    })
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})