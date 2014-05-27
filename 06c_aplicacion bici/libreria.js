// ****************+  Servicio  ******************+
var CalculadoraBiometricaServ = function() {
};

CalculadoraBiometricaServ.prototype.obtModeloBiciAsync = function(antebrazo, pierna) {
    var url = 'bicicleta.json';
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
    var antebrazo = this._$antebrazo.val();
    var pierna = this._$pierna.val();
    var promesa = serv.obtModeloBiciAsync(antebrazo, pierna);
    promesa.done(function(){ promesa();});
    
    promesa.fail(function(error)
                { 
                     $('#mensajes').text = error;
                });
};  



$(document).ready(function() {
    var ctrl = new FormularioCtrl();
        
    
    //$('#accionProcesar').addEventListener('click', new FormularioCtrl()); 
    
    
});

