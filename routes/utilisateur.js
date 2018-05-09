var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all users  *****/

router.get('/getUsers', (req, res, next) => {
    models.utilisateur.findAll()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));
});


/*****  GET user by id  *****/

router.post('/getUserById', function(req, res, next){
    //models.users.belongsTo(models.cree, {foreignKey: 'id_ut', targetKey:'id_ut'});
	models.utilisateur.findAll({
        //attributes: ['id_ut','statut','nom_ut','prenom_ut','log','mdp'],
        //include: [{model:models.cree}],
		where: {id_ut: req.body.id_ut}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'users':result});
		}
		else {
			res.status(200);
			res.json({'users':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouvel utilisateur *****/

router.post('/addUser', function(req, res, next){
	models.utilisateur.create({
		statut: req.body.statut,
		nom_ut: req.body.nom_ut,
		prenom_ut: req.body.prenom_ut,
        log: req.body.log,
        mdp: req.body.mdp
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création d'utilisateur impossible.\n" + err.toString()});
	})
});


/***** Met à jours un utilisateur *****/

router.put('/setUser', function(req, res, next){
	models.utilisateur.update({
        statut: req.body.statut,
        nom_ut: req.body.nom_ut,
        prenom_ut: req.body.prenom_ut,
        log: req.body.log,
        mdp: req.body.mdp
	}, {
		where: {id_ut: req.body.id_ut}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification d'utilisateur impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un utilisateur *****/

router.post('/delUser', function(req, res, next){
	models.cree.destroy({
		where: {id_ut: req.body.id_ut}
	}).then(function(result){
		models.utilisateur.destroy({
		where: {id_ut: req.body.id_ut}
		}).then(function(result){
			res.status(200);
			res.json({'auth': '1'});
		})
	});
});

module.exports = router;
