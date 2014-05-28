// ****************+  Servicio  ******************+
var CalculadoraBiometricaServ = function() {
};

CalculadoraBiometricaServ.prototype.obtModeloBiciAsync = function(antebrazo, pierna) {
    var url = Math.floor((Math.random() * 10)) > 5 ? 'url error' : 'bicicleta.json';
    var promesa = $.getJSON(url, { a : antebrazo, p : pierna });
    return promesa;
};


// ****************+  Controlador  ******************+
var FormularioCtrl = function() {
    var self = this;
    // Aquí se necesita el selector del antebrazo $('#antebrazo')
    this._$antebrazo = $('#antebrazo').val();
    this._$pierna = $('#pierna').val();
    
    $('form').submit(function(evt) {
        //...
        // Aquí en teoría un elemento tiene que desaparecer y tiene que aparecer el otro
        self.actualizarPantalla();
                
        evt.preventDefault();
    });
    
    
};

FormularioCtrl.prototype.actualizarPantalla = function() {
    var serv = new CalculadoraBiometricaServ();
    
    // aquí se necesita el valor del antebrazo -> this.$antebrazo.val()
    //var antebrazo = $('#antebrazo').val();
    //var pierna = $('#pierna').val();
    
    var antebrazo = this._$antebrazo;
    var pierna =this._$pierna;
    var promesa = serv.obtModeloBiciAsync(antebrazo, pierna);
    
    promesa.done(function(bici)
    {
        $('#mensajes').fadeOut();
        
        $('#formulario').fadeOut(300, function() {        
				$('#ficha').fadeIn(300);
                $('#precio p span').text(bici.precio);
                $('#modelo img').attr('src', bici.imagen);
            
                jQuery.each(bici, function(index, value) {
                         $('<tr>')
                            .append($('<td>').text(index))
                            .append($('<td>').text(value))
                            .appendTo('table');
            
                 //$("table_div").append("<tr><td>" + index  + "</td><td>" + value + "</td></tr>");
                 });
            
                console.log('Marca: ' + bici.marca); 
        
			});
        
    });
    
    promesa.fail(function(error)
    { 
        $('#mensajes').fadeIn();
        $('#mensajes').text(error.responseText);     
    });
    
    promesa.always(function()
    {
        console.log('Promesa Always');
    });
    
    return promesa;
};  



$(document).ready(function() {
    var ctrl = new FormularioCtrl();
        
    
    
    
});

