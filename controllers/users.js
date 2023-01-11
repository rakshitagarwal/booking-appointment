const User=require('../models/user')

exports.getusers = (req, res, next) => {
    User.findAll()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ error: err});
    })
}

exports.addNewUser=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    User.create({
        name:name,
        email:email,
        number:number
    })
    .then((result)=>{
        res.status(201).json(result.dataValues);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ error: err});
    })
}

exports.deleteuser=(req,res,next)=>{
    if(req.params.id=='undefined'){
        console.log('ID is missing');
        res.status(400).json({ error: "ID is missing"});
    }
    const id=req.params.id;
    User.findByPk(id)
    .then((user)=>{
        user.destroy();
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ error: err});
    })
}

exports.editUser = (req, res, next) => {
    const id=req.params.id;
    User.findByPk(id)
        .then((user) => {
            ///console.log('in edit user', `${user}`);
            console.log(user.dataValues);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({ error: err});
    })
}
