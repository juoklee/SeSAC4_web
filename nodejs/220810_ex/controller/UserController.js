const models = require("../model");

//메인화면=회원가입
exports.index = (req, res) => {
    res.render("join");
}

//User 정보 저장하기
exports.post_user = (req, res) => {

    let object = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    };

    models.User.create( object )
    .then((result) => {
        res.send({ id: result.id });
    })
}

//login 화면
exports.login = (req, res) => {
    res.render("login");
}

//login 시도
exports.post_login = (req, res) => {

    models.User.findOne( {
        where: {id: req.body.id}
    })
    .then((result) => {
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

//회원정보 수정 화면
exports.edit = (req, res) => {

    models.User.findOne( {
        where: {id: req.body.id}
    })
    .then((result) => {
        res.render("edit", {data: result});
    })
}

//정보 수정
exports.patch_user = (req, res) => {

    let newObj = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }

    models.User.update( newObj, {
        where: { id: req.body.id }
    })
    .then((result) => {
        res.send("success Update!");
    })
}

//정보 삭제
exports.delete_user = (req, res) => {

    models.User.destroy({
        where: {id: req.body.id}
    })
    .then((result) => {
        res.send("success Delete!");
    })
}