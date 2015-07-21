/**
 * Created by liekkas on 15/7/10.
 */

function sayHello(to){
    return _.template("Hello,<%= name %>!")({name:to});
}