const fs = require("fs").promises;

exports.post_user = function( data ){
    console.log( data );
    const {id, password, name, age} = data;

    fs.writeFile("./info.txt", `${id}//${password}//${name}//${age}`, (err) => {
        if (err) {
            console.log(err);
            res.status(400).send("err!!");
        }
    });
}

exports.get_user = async function( data ){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}