var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelize = require('sequelize');

/*****  GET all module  *****/

router.get('/getModules', (req, res, next) => {
    models.module.findAll()
        .then(documents => res.status(200).json(documents))
        .catch(err => res.status(500).json(err));
});


/*****  GET module by id  *****/

router.get('/getModuleById', function(req, res, next){
    //models.document.belongsTo(models.compose, {foreignKey: 'id_pr', targetKey:'id_pr'});
	models.module.findAll({
		where: {id_mo: req.body.id_mo}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'modules':result});
		}
		else {
			res.status(200);
			res.json({'modules':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouveau module *****/

router.post('/addModule', function(req, res, next){
	models.module.create({
		ref_mo: req.body.ref_mo,
		nature: req.body.nature,
		forme_mo: req.body.forme_mo,
        id_ga: req.body.id_ga
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création de module impossible.\n" + err.toString()});
	})
});


/***** Met à jour un module *****/

router.put('/setModule', function(req, res, next){
	models.module.update({
		ref_mo: req.body.ref_mo,
		nature: req.body.nature,
		forme_mo: req.body.forme_mo,
        id_ga: req.body.id_ga
	}, {
		where: {ref_mo: req.body.ref_mo}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification du module impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un module *****/

router.post('/delModule', function(req, res, next){
	models.module.destroy({
	where: {id_mo: req.body.id_mo}
	}).then(function(result){
		res.status(200);
		res.json({'auth': '1'});
	})
});

/***** Récupère tous les types de natures *****/
router.get('/getAllNatures', function(req, res, next){
    models.module.findAll({
		attributes: [[sequelize.fn('DISTINCT', sequelize.col('nature')), 'nature']]
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'natures':result});
		}
		else {
			res.status(200);
			res.json({'natures':result, 'auth': '1'});
		}
	});
});

/*****  GET module by projet  *****/

router.get('/getModulesByProjet', function(req, res, next){
    req.body.id_pr = 1;
    models.module.belongsTo(models.compose, {foreignKey: 'id_mo', targetKey:'id_mo'});
	models.module.findAll({
        //attributes: [`id_mo`, `nature`, `ref_mo`, `long_mo`, `larg_mo`, `epai_mo`, `id_ga`, ['compose.id_pr']],
        include: [{
            model:models.compose,
            where: {id_pr: req.body.id_pr},
        }]
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'modules':result});
		}
		else {
			res.status(200);
			res.json({'modules':result, 'auth': '1'});
		}
	});
});

module.exports = router;
