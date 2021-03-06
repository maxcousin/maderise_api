var express = require('express');
var router = express.Router();
var models = require('../models');

/*****  GET all projet  *****/

router.get('/getProjets', (req, res, next) => {
    models.projet.findAll()
    .then(function(result){
		if(result == null){
			res.status(500);
			res.json({'projets':result});
		}
		else {
			res.status(200);
			res.json({'projets':result, 'auth': '1'});
		}
	});
});



/*****  GET projet by id  *****/

router.get('/getProjetById', function(req, res, next){
    //models.users.belongsTo(models.cree, {foreignKey: 'id_ut', targetKey:'id_ut'});
	models.projet.findAll({
        //attributes: ['crea_de','montant','nom_ut'],
        //include: [{model:models.projet}],
		where: {id_pr: req.body.id_pr}
	}).then(function(result){
		if(result == null){
			res.status(500);
			res.json({'projet':result});
		}
		else {
			res.status(200);
			res.json({'projet':result, 'auth': '1'});
		}
	});
});



/***** Création d'un nouvau projet *****/

router.post('/addProjet', function(req, res, next){
	models.projet.create({
        ref_pr: req.body.ref_pr,
        etat: 'P',
        crea_pr: Date.now(),
        cons_pr: '',
        clot_pr: '',
        type_pr: req.body.type_pr,
        id_cl: (req.body.id_cl == null) ? null : req.body.id_cl,
	}).then(resultat => {
		res.status(200).json(resultat);
	})
	.catch(err => {
		res.status(500).json({error: "Création d'un projet impossible.\n" + err.toString()});
	})
});


/***** Met à jours un projet *****/

router.put('/setProjet', function(req, res, next){
	models.projet.update({
        ref_pr: req.body.ref_pr,
        etat: req.body.etat,
        crea_pr: req.body.crea_pr,
        cons_pr: req.body.cons_pr,
        clot_pr: req.body.clot_pr,
        type_pr: req.body.type_pr,
        id_cl: req.body.id_cl
	}, {
		where: {id_pr: req.body.id_pr}
	});
	res.status(200);
	res.json({'auth':'1'});
});


/***** Suppression d'un projet *****/

router.post('/delProjet', function(req, res, next){
	models.devis.destroy({
	where: {id_pr: req.body.id_pr}
	}).then(function(result){
		models.cree.destroy({
		where: {id_pr: req.body.id_pr}
    	}).then(function(result){
            models.document.destroy({
    		where: {id_pr: req.body.id_pr}
        	}).then(function(result){
                models.compose.destroy({
        		where: {id_pr: req.body.id_pr}
            	}).then(function(result){
                    models.projet.destroy({
            			where: {id_pr: req.body.id_pr}
            			}).then(function(result){
            				res.status(200);
            				res.json({'auth': '1'});
                    });
                });
            });
        });
    });
});

module.exports = router;
