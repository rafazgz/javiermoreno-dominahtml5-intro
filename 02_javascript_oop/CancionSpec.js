

describe("Mis canciones", function() {
   
  it("Titulo", function() {
    var resultado = new Cancion('La mejor');
    expect(resultado.titulo).toEqual('La mejor');
    expect(resultado.artista).toEqual(undefined);
  });
   
});
 