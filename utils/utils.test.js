const expect = require('expect');

const utils = require('./utils');

describe('Number',()=>{
    describe('#add()',()=>{
        it('should add two number',()=>{
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
        });
    });
    describe('#asyncAdd()',()=>{
        it('should async add two number',(done)=>{
            utils.asyncAdd(33,11,(sum)=>{
                expect(sum).toBe(44).toBeA('number');
                done();
            });
        });
    });
    describe('#square',()=>{
        it('should square',()=>{
            var res = utils.square(5);
            expect(res).toBe(25).toBeA('number');
        });
    });
    describe('#asyncSquare',()=>{
        it('should async square',(done)=>{
            utils.asyncSquare(5,(res)=>{
                expect(res).toBe(25).toBeA('number');
                done();
            });
        });
    });
    describe('#callback',()=>{
        it('should expect some value',()=>{
            //expect({name:"Monchai"}).toNotEqual({name:"Monchai"});
            //expect([2,3,4]).toInclude(5);
            expect({
                name: 'Monchai',
                age: 22,
                location: 'Bangkok'
            }).toInclude({
                age: 22
            });
        });
    });
});

describe('User',()=>{
    describe('#setName()',()=>{
        it('should varify first and last names',()=>{
            var user = {
                firstName:"nartakran",
                lastName:"kaewting"
            }
            var res = utils.setName(user,"monchai jirayupong");
            expect(res).toInclude({
                firstName:"monchai",
                lastName:"jirayupong"
            })
        });
    });
})


