import sum from "../components/sum"
test('testing for sum function',()=>{
     expect(sum(10,10)).toBe(20)
});

test('testing for sum function 2 ',()=>{
    let a=10;
    let b=20;
    let result=30;
    expect(sum(a,b)).toBe(result)
});