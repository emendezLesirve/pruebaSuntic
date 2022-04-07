const User = require('./auth.dao');
const jwt = require('jsonwebtoken')/*sirve para encriptar la contraseña*/ ;
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey12';

//Llamamos nuestro metodo create user y la logica es que este metodo los datos del frontend
exports.createUser = (req, res, next) => {
    const newUser = {
      name: req.body.name,
      lastname:req.body.lastname,
      idType:req.body.idType,
      identificationNumber:req.body.identificationNumber,
      phone:req.body.phone,
      email: req.body.email,
      confirmEmail:req.body.confirmEmail,
      password: bcrypt.hashSync(req.body.password)
    }

  
    User.create(newUser, (err, user) => {
        
      if (err && err.code === 11000) return res.status(409).send('Email ya existe');
     //si tenemos algun error traer el status 500
      if (err) return res.status(500).send('Error del servidor');
      const expiresIn = 24 * 60 * 60;   
      const accessToken = jwt.sign({ id: user.id },/*Aqui se crea el token*/
        SECRET_KEY, {
          expiresIn: expiresIn
        });

        
      const dataUser = {
        name: user.name,
        email: user.email,
        accessToken: accessToken,
        expiresIn: expiresIn
      }
      /*realizar un response hacia nuestro frontend*/
      res.send({ dataUser });
    });
  }

//Llamamos nuestro metodo loginUser y la logica es que este metodo pase datos al frontend
  exports.loginUser = (req, res, next) => {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: userData.email }, (err, user) => {
      if (err) return res.status(500).send('Error del servidor');
  
      if (!user) {
        // email no existe
        res.status(409).send({ message: 'Algo anda mal' });
      } else {
        const resultPassword = bcrypt.compareSync(userData.password, user.password);
        if (resultPassword) {
          const expiresIn = 24 * 60 * 60;
          const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });//aqui se crea el token
  
          const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
          }

          //respuesta al frontend
          res.send({ dataUser });
        } else {
          // password incorrecto
          res.status(409).send({ message: 'Algo anda mal' });
        }
      }
    });
  }

