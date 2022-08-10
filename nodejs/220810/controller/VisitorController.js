//models => model/index.js 에서의 db
const models = require("../model");
// const Visitor = require("../model/Visitor");

exports.get_visitors = (req,res) => {
    //sequelize 문법 findAll() -> SELECT * FROM visitor;
    models.Visitor.findAll()
    .then((result) => {
        console.log( "result : ", result );
        console.log( "index" );
        res.render("index", { data: result });
    })

    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    //sequelize 문법 create() -> INSERT ~~ INTO FROM visitor;
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    models.Visitor.create( object )
    .then((result) => {
        res.send( {id: result.id})
    })

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {

    models.Visitor.findOne( {
        where: { id: req.query.id }
    })
    .then((result) => {
        res.send( { result : result } );
    })

    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    };
    
    models.Visitor.update( newObj, { where: { id: req.body.id } })
    .then((result) => {
        console.log( result ); //몇개를 수정했는지 개수를 반환한다.
        res.send( "수정 성공" );
    })

    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    
    models.Visitor.destroy({ where: { id: req.body.id } })
    .then((result) => {
        console.log( result ); //몇개를 삭제했는지 개수를 반환한다.
        res.send( "삭제 성공" );
    })

    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}