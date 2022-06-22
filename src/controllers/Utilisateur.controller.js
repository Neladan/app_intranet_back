const UtilisateurModel = require("../models/Utilisateur.model");

const jwt = require("jsonwebtoken");

//get all users
exports.getAllUtilisateurs = (req, res) => {
  UtilisateurModel.getAllUtilisateurs((err, utilisateurs) => {
    console.log("here we are a users");
    if (err) res.send(err);
    console.log("users", utilisateurs);
    res.send(utilisateurs);
  });
};

//get user by Id
exports.getUtilisateurById = (req, res) => {
  UtilisateurModel.getUtilisateurById(req.params.idUser, (err, utilisateur) => {
    console.log("get user by id");
    if (err) res.send(err);
    console.log("single user", utilisateur);
    res.send(utilisateur);
  });
};

//get user to login using email and password

exports.toLogin = (req, res) => {
  UtilisateurModel.getUtilisateurByEmailPwd(
    req.body.email,
    req.body.motPasse,
    (err, utilisateur) => {
      console.log("get user by e-mail");
      if (err) {
        res.json({ auth: false, message: err });
      }
      if (utilisateur) {
        console.log("single user", utilisateur);

        const token = jwt.sign({
          email: utilisateur[0].email
          //idUser: utilisateur[0].idUser
        }, 'jwtSecret', {expiresIn: '1h'});

        res.json({auth: true, token: token, user: utilisateur});
      }
    }
  );
};

// create new employee
exports.createUser = (req, res) => {
  const userData = new UtilisateurModel(req.body);
  console.log("userData", userData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    UtilisateurModel.createUser(userData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "User Created Successfully",
        data: user.idUser,
      });
    });
  }
};

exports.isUserAuth = (req, res) => {
    res.send("you are authenticated");
};