const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

/*------------DATABASE CONNECTION------------*/

mongoose.connect("mongodb://localhost:27017/loginDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const loginSchema = {
  email: String,
  password: String,
  access: String
};

const Entry = mongoose.model("Entry", loginSchema);

// const entry = new Entry({
//   email:"sathyas@gmail.com",
//   password:"sathyas123",
//   access : "owner"
// });

// entry.save()

// const entry1 = new Entry({
//   email:"snowcube@gmail.com",
//   password:"snowcube123",
//   access : "owner"
// });

// entry1.save()

// const entry3 = new Entry({
//   email:"ramya@gmail.com",
//   password:"ramya123",
//   access : "student"
// });

// entry3.save()

/* ------------------------------------------ */



app.get("/", (req,res) => {
    res.sendFile(__dirname+ "/public/index.html");
});



app.get("/student", (req,res)=> {
  res.sendFile(__dirname + "/public/student.html");
})

app.get("/snowcubeadmin", (req,res)=>{
  res.sendFile(__dirname + "/public/snowcubeadmin.html");
})

app.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);

    Entry.find(function(err, entries){
      if(err){
        console.log(err);
      } else {
        entries.forEach(function(entry) {
          if(email === entry.email) {
            if(password === entry.password) {
              if(entry.access === "student") {
               res.redirect("/student");
              } else {
                res.sendFile(__dirname + "/public/owner.html");
              }
            }
          } 

        });
      }
    });
});

app.listen(8001, () => {
  console.log("Server running on port 8001.");
});