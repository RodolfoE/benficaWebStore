var express = require('express');
const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('ecommerce', ['produtos']);

router.get('/produtos', (req, res, next) => {
    db.produtos.find( (err, produtos) => {
        if (err) return next(err); 
        res.setHeader('Access-Control-Allow-Origin','*');
        res.json(produtos);
    });
});

router.post('/produtos', (req, res, next) => {
    var prod = req.body;
    console.log(prod);
    db.produtos.find(prod, (err, produto) => {
        if (err) return next(err); 
        res.setHeader('Content-Type', 'Application/json');
        res.json(produto);
    })
});

router.get('/produto/:id', (req, res, next) => {
    console.log(req.params.id);
    db.produtos.findOne({ _id:mongojs.ObjectId(req.params.id) }, (err, produto) =>{
        console.log('bla');
        if (err){ return next(err); console.log(err); }
        res.json(produto);
    });
});






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
