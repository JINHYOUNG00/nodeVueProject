var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const customerRouter = require('./routes/customer.js');
const boardRouter = require('./routes/board.js');

var app = express();

// express-session
app.use(
  session(
    {
      secret: 'secret key', //암호화하는 데 쓰일 키
      resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
      saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
      cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
        httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
        secure: true, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
        maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
      },
      store: new fileStore() // 세션 저장소로 fileStore 사용
    }
  )
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer', customerRouter);
app.use('/board', boardRouter);



const members = [
  { userid: "user1", userpw: "1111" },
  { userid: "user2", userpw: "2222" },
  { userid: "user3", userpw: "3333" },
  ];
  
  app.get("/account", (req,res) => {
    if(req.session.is_logined) {
      const member = JSON.parse({usreid : req.session.userid});
      return res.send(member);
      }
      })
      
      app.post('/login', (req, res) => {
        console.log(req.body);
        const userid = req.body.userid;
        const userpw = req.body.userpw;
        console.log(userid, userpw);
        const member = members.find( e => {
          return e.userid === userid && e.userpw === userpw;
          });
          
          
          if(member){
            req.session.userid = userid; // 세션에 사용자 이메일 정보 저장
            req.session.is_logined = true; // 세션에 로그인 여부 저장
            req.session.save(err => { // 세션 저장
              if(err) throw err;
              res.send(member); 
              });
              } else {
                res.send(401); // 에러 상태코드 전송
                }
                
                })
                
                app.post('/logout', (req,res) => {
                  req.session.destroy();
                  res.send(200);
                  })
                  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
                  