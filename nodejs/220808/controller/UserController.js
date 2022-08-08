const User = require("../model/User");

//메인화면
exports.get_main = (req, res) => {
    res.render("join");
}

//User 정보 저장하기
exports.post_user = (req, res) => {

    User.insert( req.body, function (result) {  
        res.send({ id: result});
    })
}

//login 화면
exports.get_login = (req, res) => {
    res.send("login화면");
}

//login 시도
exports.post_login = (req, res) => {
    User.select( req.body.id, req.body.password, function (result) {
        if (result == null) {
            return res.send({result: result, flag: false});
        } else{
            if (req.body.password != result.password) {
                return res.send({result: result, flag: false});
            }else {
                return res.send({result: result, flag: true});
            }
        }
        
    })
}

//정보 수정
exports.patch_user = (req, res) => {
    User.update( req.body, function (result) {      
        res.send("수정완료") 
    })
}