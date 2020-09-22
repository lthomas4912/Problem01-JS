const { TestScheduler } = require('jest');
const WuTangForever = require('./WuTangForeverBuzz');

test("The Wu to 15", () =>{
    let theWu = new WuTangForever();
    let expected = theWu.wuTangClan(15);
    let actual = "1\n2\nWu\n4\nTang\nWu\n7\n8\nWu\nTang\n11\nWu\n13\n14\nWuTangForever\n";
    expect(expected).toEqual(actual);
});

test("The Wu to 40", () =>{
    let theWu = new WuTangForever();
    let expected = theWu.wuTangClan(40);
    let actual = "1\n2\nWu\n4\nTang\nWu\n7\n8\nWu\nTang\n11\nWu\n13\n14\nWuTangForever\n16\n17\nWu\n19\nTang\nWu\n22\n"+
    "23\nWu\nTang\n26\nWu\n28\n29\nWuTangForever\n31\n32\nWu\n34\nTang\nWu\n37\n38\nWu\nTang\n";
    expect(expected).toEqual(actual);
});