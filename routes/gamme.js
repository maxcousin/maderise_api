var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all gammes  *****/

router.get('/getGammes', (req, res, next) => {
    models.gamme.findAll()
        .then(gammes => res.status(200).json(gammes))
        .catch(err => res.status(500).json(err));
});

/*****  GET gamme by id  *****/

router.post('/getGammeById', function(req, res, next){
    //models.document.belongsTo(models.projet, {foreignKey: 'id_pr', targetKey:'id_pr'});
	models.gamme.findAll({
		where: {id_ga: req.body.id_ga}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'gammes':result});
		}
		else {
			res.status(200);
			res.json({'gammes':result, 'auth': '1'});
		}
	});
});



/***** Création d'une nouvelle gamme *****/

router.post('/addGamme', function(req, res, next){
	models.gamme.create({
		ref_ga: req.body.ref_ga,
        formule: req.body.formule
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création de gamme impossible.\n" + err.toString()});
	})
});


/***** Met à jour une gamme *****/

router.put('/setGamme', function(req, res, next){
	models.gamme.update({
		ref_ga: req.body.ref_ga,
        formule: req.body.formule
	}, {
		where: {ref_ga: req.body.ref_ga}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification de gamme impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un gamme *****/

router.post('/delGamme', function(req, res, next){
	models.gamme.destroy({
	where: {id_ga: req.body.id_ga}
	}).then(function(result){
		res.status(200);
		res.json({'auth': '1'});
	})
});

module.exports = router;
