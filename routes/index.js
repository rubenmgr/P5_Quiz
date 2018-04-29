var express = require('express');
var router = express.Router();
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

/* GET credits page. */
router.get('/credits', function (req, res, next) {
    res.render('credits', { title: 'Créditos' });
});

/* GET quizzes page. */
router.get('/quizzes', function (req, res, next) {
    models.quiz.findAll()
        .then(quizzes =>{
        var list=JSON.stringify(quizzes);
    res.render('quizzes',{title: 'Lista de Quizzes',quizList:list}); //Exportamos la lista con los quiz al render.
})
.catch(error =>{
        console.log(error);
})

});

module.exports = router;
