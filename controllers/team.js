const express = require("express");
const Team = require("../models/team");
const Admin = require("../models/admin");

//create team
exports.createTeam = (req, res, next) => {
    const { teamName, code, logo} = req.body;

    if(!teamName || !code || !logo) {
        return res.status(400).json({msg: "All fields are required"})
    }
    Team.create({
                teamName,
                code,
                logo
            })
    .then(team => {
    res.json(team)
    })
    .catch(err => res.json({msg: "Team creation failed", err}))

}

//view all team 
exports.getAllTeam = (req, res, next) => {
    Team.findAll()
        .then(team => {
            res.json(team)
        })
        .catch(err =>{
            return res.json({msg : err.message || "Error occured"})
        })
}
//deleting a team
exports.deleteTeam = (req, res, next) => {
    const teamId =  req.params.id;
    Team.findByPk(teamId) 
        .then(team => {
            team.destroy()
            .then(() =>{
                res.json({success: true});
            })
            .catch(err => res.json({ success: false }));
        })
        .catch(err => {
            res.json({ success: false, message: "This Recipe doesnt exists" })

        })
}

//editing a team
exports.editTeam = (req, res, next) => {
    const teamId =  req.params.id;
    Team.findByIdAndUpdate(teamId, {new: true}) 
    .then(team => {
        if(!team ){
            return res.status(404).json({
                message: "not found"
            })
        }
        res.send(team)
    })
     
}

