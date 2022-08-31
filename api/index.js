const express = require("express");
const router = express.Router();
const morgan = require('morgan')

const cookieParser = require('cookie-parser')
const cors = require('cors')
const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL, PASSWORD_EMAIL } = process.env;

// server used to send send emails
const PORT = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running", PORT));


const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${EMAIL}`,
    pass: `${PASSWORD_EMAIL}`,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
router.get('/contact',(req,res)=>{
  return res.json({msg:'holamundo'})
})


router.post("/contact", (req, res) => {
  const {firstName,lastName,email,message,phone}= req.body
  console.log(req.body)
 // const name = req.body.firstName + req.body.lastName;
 // const email = req.body.email;
  //const message = req.body.message;
 // const phone = req.body.phone;
  const mail = {
    from: firstName,
    to: `${EMAIL}`,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName+' '+ lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
