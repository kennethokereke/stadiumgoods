
module.exports.validateUsername = (username) => {
    var re = /^[A-Za-z._-][A-Za-z0-9._-]*$/;
    return re.test(username);
}
