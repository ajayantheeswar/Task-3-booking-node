const express = require('express');
const bodyParser = require('body-parser');
const Bus = require('../Models/bus');

exports.getBusDetails = (req,res,next) => {
    const user = req.user;
    Bus.findAll({where : {
        adminuserId : user.id
    }}).then(buses =>{
        console.log(buses)
        if(buses.length > 0){
            console.log(buses);
            res.status(200).json(buses);
        }else{
            res.status(401).json({message : "Error in Fetching Bus for the Users"});
        }
    })
    
}

exports.getAllBus = (req,res,next) =>{
    const user = req.user;
    Bus.findAll({
        where : {
            adminuserid:user.id
        }
    }).then(buses => {
        res.status(200).json({busList : buses});
    }).catch(error =>{
        res.status(401).json({error:error});
    })
}

exports.createBus = (req,res,next) => {
    const user = req.user;
    console.log(req.body.businfo);
    user.createBus({
       ...req.body.businfo
    }).then(bus =>{
        return Bus.findAll({where :{
            adminuserId : user.id
        }}) 
    }).then(buses =>{
        res.json({Message: "DataSaved Successfully" , busList : buses});
    })
    .catch(error => {
        if(error.name.includes('Unique')){
            res.status(400).json({Message : "Bus Already Exists" });
        }else{
            res.status(400).json({Message : error.name });
        }
        
    })
}