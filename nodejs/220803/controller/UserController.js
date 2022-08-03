const User = require("../model/User");

//index라는 함수를 만들면서 바로 모듈로 보내는 법
exports.index = (req, res) => {
    res.render("index");
}

exports.register = (req, res) => {
    res.render("register");
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send( "success_join" );
}

exports.login = (req, res) => {
    res.render( "login" );
}

exports.post_login = async (req, res) => {
    var data = await User.get_user();

    var info = data.split("//");


    if (info[0] != req.body.id) {
        res.send("아이디 다름");
    } else if (info[2] != req.body.password) {
        res.send("비밀번호가 다름")
    } else {
        res.send("로그인 성공!");
    }

    console.log( data );
}