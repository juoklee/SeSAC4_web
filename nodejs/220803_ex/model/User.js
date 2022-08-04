const fs = require("fs").promises;


exports.post_join = function( data ){
    console.log( data );
    const {id, name, email, phoneNumber, password } = data;

    fs.appendFile("./info.txt", `${id}//${name}//${email}//${phoneNumber}//${password}\n`, (err) => {
        if (err) {
            console.log(err);
            res.status(400).send("err!!");
        }
    });
}

exports.post_login = async function( data ){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}