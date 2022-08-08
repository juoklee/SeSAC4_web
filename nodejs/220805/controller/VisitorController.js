const Visitor = require("../model/Visitor");

exports.get_visitors = (req, res) => {
    Visitor.get_visitors(function( result ) {
        console.log("result: ", result);
        console.log("index");
        res.render("index", {data: result});
    });
}

exports.post_comment = (req, res) => {
    console.log( req.body );
    
    Visitor.insert( req.body.name, req.body.comment, function( result ) {
        res.send( {id: result} );
    });
}


exports.get_visitor = (req, res) => {
    Visitor.get_visitor(req.query.id, function(result) {
        console.log("result: " , result );
        console.log("result[0]: " , result[0] );
        res.send({ result: result[0]});
    })    
}

exports.patch_comment = (req, res) => {
    Visitor.update( req.body, function(result) {
        console.log( result );
        res.send( "success Update!" );
    });
}

exports.delete_comment = (req, res) => {
    Visitor.delete( req.body.id, function(result) {
        console.log( result );
        res.send( "success Delete!" );
    });
}
