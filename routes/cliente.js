var express = require('express');
const router = require('express-promise-router')();
const mongojs = require('mongojs');
const db = mongojs('lojaBenfica', ['produto', 'compra', 'envio', 'funcionario', 'produto']);
var pag = require('../config/pagseguroConfig');

router.post('/cadastro_cliente', (req, res, next) => {
  const cliente = req.body;
  console.log(cliente);
  db.cliente.save(cliente, (err, task) => {
    if (err) return next(err);
    res.json(cliente);
  });
});

router.post('/login', (req, res, next) => {
  const cliente = req.body;
  var obj = { "mUsuario": cliente.mUsuario };
  db.cliente.findOne(obj, (err, mUsuario) => {
    console.log(mUsuario);
    if (mUsuario != null) {
      if (mUsuario.mSenha == cliente.mSenha) {
        res.json(mUsuario);
      } else {
        res.json({'err': 'senha inválida.'});
      }
    }
    if (err) { return next(err); console.log(err); }
  });
});

module.exports = router;