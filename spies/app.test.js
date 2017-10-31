const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db',db);

    it('should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('top',22);
        expect(spy).toHaveBeenCalledWith('top',22);
    });

    it('should call saveUser with object',()=>{
        var email = 'top@gmail.com';
        var password = 'abc';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});