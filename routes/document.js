var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all document  *****/

router.get('/getDocuments', (req, res, next) => {
    models.document.findAll()
        .then(documents => res.status(200).json(documents))
        .catch(err => res.status(500).json(err));
});


/*****  GET user by id  *****/

router.get('/getDocumentById', function(req, res, next){
    //models.document.belongsTo(models.module, {foreignKey: 'id_mo', targetKey:'id_mo'});
    //models.document.belongsTo(models.projet, {foreignKey: 'id_pr', targetKey:'id_pr'});
	models.document.findAll({
		where: {id_do: req.body.id_do}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'documents':result});
		}
		else {
			res.status(200);
			res.json({'documents':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouveau document *****/

router.post('/addDocument', function(req, res, next){
	models.document.create({
		ref_do: req.body.ref_do,
		crea_do: req.body.crea_do,
		type: req.body.type,
        id_pr: req.body.id_pr,
        id_mo: req.body.id_mo
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création de document impossible.\n" + err.toString()});
	})
});


/***** Met à jour un document *****/

router.put('/setDocument', function(req, res, next){
	models.document.update({
		ref_do: req.body.ref_do,
		crea_do: req.body.crea_do,
		type: req.body.type,
        id_pr: req.body.id_pr,
        id_mo: req.body.id_mo
	}, {
		where: {id_do: req.body.id_do}
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Modification du document impossible.\n" + err.toString()});
	})
});


/***** Suppression d'un document *****/

router.post('/delDocument', function(req, res, next){
	models.document.destroy({
	where: {id_do: req.body.id_do}
	}).then(function(result){
		res.status(200);
		res.json({'auth': '1'});
	})
});

module.exports = router;
