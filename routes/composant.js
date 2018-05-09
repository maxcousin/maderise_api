var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all composant  *****/

router.get('/getComposant', (req, res, next) => {
    models.composant.findAll()
        .then(composants => res.status(200).json(composants))
        .catch(err => res.status(500).json(err));
});


/*****  GET module by id  *****/

router.get('/getComposantById', function(req, res, next){
    //models.document.belongsTo(models.projet, {foreignKey: 'id_pr', targetKey:'id_pr'});
	models.composant.findAll({
		where: {id_co: req.body.id_co}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'composants':result});
		}
		else {
			res.status(200);
			res.json({'composants':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouveau composant *****/

router.post('/addComposant', function(req, res, next){
	models.composant.create({
		ref_co: req.body.ref_co,
		prix: req.body.prix,
		forme_co: req.body.forme_co,
        stock: req.body.stock,
        id_fa: req.body.id_fa
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création de composant impossible.\n" + err.toString()});
	})
});


/***** Met à jour un composant *****/

router.put('/setComposant', function(req, res, next){
	models.composant.update({
		ref_co: req.body.ref_co,
		prix: req.body.prix,
		forme_co: req.body.forme_co,
        stock: req.body.stock,
        id_fa: req.body.id_fa
	}, {
		where: {ref_co: req.body.ref_co}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification du composant impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un composant *****/

router.post('/delComposant', function(req, res, next){
	models.composant.destroy({
	where: {id_co: req.body.id_co}
	}).then(function(result){
		res.status(200);
		res.json({'auth': '1'});
	})
});

module.exports = router;
