describe("Calculadora de fibonacci", function() {
   
  it("f(0)==0", function() {
    var resultado = fibonacci(0);
    expect(resultado).toEqual(0);
  });
  it("f(1)==1", function() {
    var resultado = fibonacci(1);
    expect(resultado).toEqual(1);
  });
  it("f(2)==1", function() {
    var resultado = fibonacci(2);
    expect(resultado).toEqual(1);
  });
  it("f(n)==f(n-1)+f(n-1) para n=31", function() {
    var resultado = fibonacci(31);
    expect(resultado).toEqual(1346269);
  });
   
});