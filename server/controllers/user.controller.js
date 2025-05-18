const { User, Stats } = require('../models');
const bcrypt = require('bcrypt');

// Nuevo usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Ver si existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }
    
    // Encriptamos la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // Ojo acá
    
    // Se crea
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });
    

    // await Stats.create({
    //   userId: newUser.id
    // });
    
    // Enviamos respuesta exitosa
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Buscamos el usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    
    // Verificamos la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    
    // Enviamos respuesta exitosa
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

// Obtener datos del usuario
exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await User.findByPk(userId, {
      attributes: ['id', 'name', 'email'], 
      //include: [{ model: Stats }]
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ message: 'Error al obtener información del usuario' });
  }
};