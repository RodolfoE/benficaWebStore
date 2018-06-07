var express = require('express');
const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('lojaBenfica', ['produto', 'compra', 'envio', 'funcionario', 'produto']);
var pag = require('../config/pagseguroConfig');


router.get('/compra/:clientId', (req, res, next) => {
    var idClient = req.params.clientId;
    db.compra.find({ cliente: idClient }, (err, cliente) => {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(cliente);
    });
});

router.post('/compra', (req, res, next) => {
    const compra = req.body;
    db.compra.save(compra, (err, comp) => {
        if (err) return next(err);
        res.json(comp);
    });
})

router.put('/update_compra/:idCompra', (req, res, next) => {
    const compra = req.body;
    console.log(compra);
    db.compra.update({ _id: mongojs.ObjectId(req.params.idCompra) }, compra, (err, comp) => {
        if (err) return next(err);
        res.json(comp);
    });

})

/*
router.post('/tasks', (req, res, next) => {
    const task = req.body;
    if (!task.title || !(task.isDone + '')){
        res.status(400).json({
            'error':'bad data'
        })
    } else {
        db.task.save(task, (err, task) => {
            if (err) return next(err); 
            res.json(task);
        });
    }
})

router.delete('/tasks/id', (req, res, next) => {
    db.task.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
        if (err) return next(err); 
        res.json(result);
    });
})

router.put('/tasks/id', (req, res, next) => {
    const task = req.body;
    const updateTask = {};

    if (!task.isDone){
        updateTask.isDone = task.isDone;
    }

    if (task.title){
        updateTask.title = task.title;
    }

    if (!updateTask){
        res.status(400).json({
            'error':'bad request'
        })
    } else {
        db.task.update({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
            if (err) return next(err); 
            res.json(task);
        });
    }

})
*/

module.exports = router;