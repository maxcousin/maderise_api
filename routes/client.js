var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all clients  *****/

router.get('/getClients', (req, res, next) => {
    models.client.findAll()
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(500).json(err));
});


/*****  GET client by id  *****/

router.post('/getClientById', function(req, res, next){
    //models.clients.belongsTo(models.cree, {foreignKey: 'ic_cl', targetKey:'ic_cl'});
	models.client.findAll({
        //attributes: ['ic_cl','statut','nom_ut','prenom_ut','log','mdp'],
        //include: [{model:models.cree}],
		where: {ic_cl: req.body.id_cl}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'clients':result});
		}
		else {
			res.status(200);
			res.json({'clients':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouvel client *****/

router.post('/addClient', function(req, res, next){
	models.client.create({
		nom_cl: req.body.nom_cl,
		prenom_cl: req.body.prenom_cl,
		tel_cl: req.body.tel_cl,
        mail_cl: req.body.mail_cl
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création du client impossible.\n" + err.toString()});
	})
});


/***** Met à jours un client *****/

router.put('/setClient', function(req, res, next){
	models.client.update({
		nom_cl: req.body.nom_cl,
		prenom_cl: req.body.prenom_cl,
		tel_cl: req.body.tel_cl,
        mail_cl: req.body.mail_cl
	}, {
		where: {ic_cl: req.body.id_cl}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification du client impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un client *****/

router.post('/delClient', function(req, res, next){
	models.cree.destroy({
		where: {ic_cl: req.body.id_cl}
	}).then(function(result){
		models.client.destroy({
		where: {ic_cl: req.body.ic_cl}
		}).then(function(result){
			res.status(200);
			res.json({'auth': '1'});
		})
	});
});

module.exports = router;
