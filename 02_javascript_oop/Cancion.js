

    
    var Cancion = function(titulo, album, artista, letra, formato, duracion, url)
    {
          this.titulo        = titulo;  
          this.album         = album;
          this.artista       = artista;
          this.letra         = letra;
          this.formato       = formato;
          this.duracion      = duracion;
          this.url           = url;
          this.puntuacion    = 0;
    };
    
    Cancion.prototype.incrementarPuntuacion = function(valor)
    {
        this.puntuacion += valor || 1;
        return this.puntuacion;
    };
    
    Cancion.prototype.decrementarPuntuacion = function(valor)
    {
        this.puntuacion += valor || 1;
        return this.puntuacion;
    };
    
    Cancion.prototype.toString = function()
    {
        console.log('Tit: %s Album %s Artista %s Letra %s Formato %s Duración %i Url %s Puntuación %f',
            this.titulo, this.album, this.artista, this.letra, this.formato, 
            this.duracion, this.url, this.puntuacion);
    };
    
    
    var c1 = new Cancion('Entre dos tierras', 'Entre dos tierras', 'Héroes del silencio',
                        'bla bla bla', 'mp3', 210, 'src/HS/EntreDosTierras.mp3');
                        
    c1.toString();
    console.log(c1.incrementarPuntuacion(15));
    console.log(c1.incrementarPuntuacion(30));
 