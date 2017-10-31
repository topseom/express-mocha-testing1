module.exports.add = (a,b) => a + b;

module.exports.asyncAdd = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b);
    },500);
};

module.exports.asyncSquare = (a,callback)=>{
    setTimeout(()=>{
        callback(a*a);
    },500);
};

module.exports.square = (x) => x * x;

module.exports.setName = (user,fullName)=>{
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};


