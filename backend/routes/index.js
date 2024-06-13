var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express', username: '홍길동' });
  // res.redirect("/prod")
  // res.send("hello");
  // res.end("bye");
  // const filepath = "D:/upload/05ff428d0f32bd64a7bba0a40b546e55";
  // const filename = 'img.jpg';
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심
  // res.sendFile(filepath);
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

router.get('/prod', function(req, res, next) {
  let data = [ 
    {no:1, name:'키보드', price: 1000},
    {no:2, name:'모니터', price: 3000},
    {no:3, name:'본체', price: 2000},
  ]
  res.render('productList', {list:data});
})

module.exports = router;
