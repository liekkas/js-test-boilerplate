/**
 * Created by liekkas on 15/7/10.
 */

describe("Hello",function(){
    it("say hello to receiver",function(){
        expect(sayHello('Liekkas')).toBe("Hello,Liekkas!");
    });
});