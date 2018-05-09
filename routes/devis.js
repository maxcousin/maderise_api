var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all devis  *****/

router.get('/getDevis', (req, res, next) => {
    models.devis.findAll()
        .then(devis => res.status(200).json(devis))
        .catch(err => res.status(500).json(err));
});


/*****  GET devis by id  *****/

router.get('/getDevisById', function(req, res, next){
    //models.users.belongsTo(models.cree, {foreignKey: 'id_ut', targetKey:'id_ut'});
	models.devis.findAll({
        //attributes: ['crea_de','montant','nom_ut'],
        //include: [{model:models.projet}],
		where: {id_de: req.body.id_de}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'devis':result});
		}
		else {
			res.status(200);
			res.json({'devis':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouvau devis *****/

router.post('/addDevis', function(req, res, next){
	models.devis.create({
        crea_de: req.body.crea_de,
        montant: req.body.montant,
        id_pr: req.body.id_pr
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création d'un devis impossible.\n" + err.toString()});
	})
});


/***** Met à jours un devis *****/

router.put('/setDevis', function(req, res, next){
	models.devis.update({
        crea_de: req.body.crea_de,
        montant: req.body.montant,
        id_pr: req.body.id_pr
	}, {
		where: {id_de: req.body.id_de}
	});
	res.status(200);
	res.json({'auth':'1'});
});


/***** Suppression d'un devis *****/

router.post('/delDevis', function(req, res, next){
	models.devis.destroy({
	where: {id_de: req.body.id_de}
	}).then(function(result){
		res.status(200);
		res.json({'auth': '1'});
	})
});

module.exports = router;
