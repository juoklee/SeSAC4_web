const User = require("../model/User");

exports.join = (req, res) => {
    res.render("join");
}

exports.post_join = (req, res) => {
    User.post_join(req.body);
    res.render( "success_join", {name: req.body.name} );
}


exports.login = (req, res) => {
    res.render( "login" );
}

exports.post_login = async (req, res) => {
    var data = await User.post_login();

    data = data.slice(0, -1).split("\n");
    // console.log( "data:" , data );

    //^ 규리쌤 코드: 바로 데이터 나누고 정보 검사
    for (var i=0; i<data.length; i++) {
        var info = data[i].split("//");

        if (info[0] == req.body.id && info[4] == req.body.password) {
            return res.render("success_login", {id: req.body.id, msg: "로그인 되었습니다."})
        }
    }

    return res.render("failed_login", {msg: "로그인 실패하였습니다."})
    

    //^ 내가 짠 코드: 이중배열로 저장하고 정보 검사
    // var infoData = [];

    // for (var i=0; i<data.length; i++) {
    //     infoData.push(data[i].split("//"));
    // }
    // console.log( "infoData:" , infoData );

    // for (var i=0; i<infoData.length; i++) {
    //     if (infoData[i][0] == req.body.id && infoData[i][4] == req.body.password) {
    //         return res.render("success_login", {id: req.body.id, msg: "로그인 되었습니다."})
    //     }
    // }
    // return res.render("failed_login", {msg: "로그인 실패하였습니다."})
}