const Fixtures = require("../models/fixtures");
// const Admin = require("../modelsuser");

//creating fixtures
exports.createFixtures = (req, res, next) => {
    const { team_A, team_B, date} = req.body;
    const userId = req.params.id

    if(!team_A || !team_B || !date) {
        return res.status(400).json({msg: "All fields are required"})
    }
    User.findByPk(userId)
    .then(user => {
    Fixtures.create({
            team_A,
            team_B,
            date
            })
    .then(team => {
    res.json(team)
    })
    .catch(err => res.json({msg: "Team creation failed", err}))
    })
    .catch(err => res.status(500).json({msg: "Error occured"}))

}

//editing a fixtures
exports.editFixtures = (req, res, next) => {
    const fixtureId =  req.params.id;
    Fixtures.findByIdAndUpdate(fixtureId, {new: true}) 
    .then(fixture => {
        if(!fixture ){
            return res.status(404).json({
                message: "not found"
            })
        }
        res.send(fixture)
    })
     
}

//delete fixtures
exports.deleteFixtures = (req, res, next) => {
    const fixtureId =  req.params.id;
    Fixture.findByPk(fixtureId) 
        .then(fixture => {
            fixture.destroy()
            .then(() =>{
                res.json({success: true});
            })
            .catch(err => res.json({ success: false }));
        })
        .catch(err => {
            res.json({ success: false, message: "This fixture doesnt exists" })

        })
}

//View all fixtures
exports.getAllFixtures = (req, res, next) => {
    Fixture.findAll()
        .then(fixture => {
            res.json(fixture)
        })
        .catch(err => res.json({ msg: err.message || "Error occured" }))
}