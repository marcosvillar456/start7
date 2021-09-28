const { User } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

async function getAllUsers(req, res, next) {
  try {
    const users = await User.findAll();
    if (!users.length) {
      return res.json({ msg: "No hay usuarios registrados por el momento" });
    } else {
      return res.json(users);
    }
  } catch (err) {
    return next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const { email, name, password } = req.body;
    let hashPassword = await bcrypt.hashSync(
      password,
      Number.parseInt(authConfig.rounds)
    );
    let userValidation = await User.findOne({ where: { email } });
    if (userValidation) {
      res.status(409).json({ msg: "Usuario existente" });
    } else {
      const user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });
      let token = await jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });

      res.json({
        user: user,
        token: token,
      });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function login(req, res, next) {
  let { email, password } = req.body;
  try {
    //Buscar user
    let user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {
      //comparo las contraseñas
      if (bcrypt.compareSync(password, user.password)) {
        //creamos el token

        let token = await jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user: user,
          token: token,
        });
      } else {
        //acceso no autorizado
        return res.status(401).json({ msg: "Contraseña incorrecta" });
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { getAllUsers, updateUser, login };
