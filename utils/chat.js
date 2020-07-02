const AdminUser = require('../Models/adminUser');
const Customer = require('../Models/customer');
const jwt = require('jsonwebtoken');
const tokenHash = require('../utils/webtoken');

exports.auth = async (socket, next) => {
    try {
      const token = socket.handshake.query.token;
      const isAdmin = socket.handshake.query.isAdmin;
      const payload = await jwt.verify(token, tokenHash.token,async (err,decoded) =>{
        if(decoded){
          let user;
          if(isAdmin){
            user = await AdminUser.findByPk(+decoded);
          }else{
            user = await Customer.findByPk(+decoded);
          }
          if(user){
            socket.user = user;
            console.log("connection made");
            next();
          }else{
            throw new Error('Auth Fail')
          }
        }else{
          throw new Error('Auth Fail')
        }
      });
  
    } catch (err) {
        next('Auth Error');
    }
  }