var CalculadoraBiometricaServ = function() {
};

CalculadoraBiometricaServ.prototype.obtModeloBiciAsync = function(antebrazo, pierna) {
    var promesa = $.getJSON('bicicleta.json', { a : antebrazo, p : pierna });
    return promesa;
};

var FormularioCtrl = function() {
    var self = this;
    this._$antebrazo = $('#antebrazo');
    this._$pierna = $('#pierna');
    this._$paginaFormulario = $('#formulario');
    this._$paginaFicha = $('#ficha');
    this._$precio = $('#precio p span');
    this._$paginaMensajes = $('#mensajes');
    this._$loading = $('#loading');
    
    $('form').submit(function(evt) {
        evt.preventDefault();
        self.actualizarPantalla();
    });
    
    $(document).ajaxStart(function() {
        self._$loading.fadeIn();
    });
    $(document).ajaxStop(function() {
        self._$loading.fadeOut();
    });
};

FormularioCtrl.prototype.actualizarPantalla = function() {
    var self = this;
    var serv = new CalculadoraBiometricaServ();
    var antebrazo = this._$antebrazo.val();
    var pierna = this._$pierna.val();
    var promesa = serv.obtModeloBiciAsync(antebrazo, pierna);
    promesa.done(function(bicicleta) {
        self.mostrarFicha(bicicleta);
    });
    promesa.fail(function(error) {
        self.mostrarError(error);
    });
    
};  

FormularioCtrl.prototype.mostrarFicha = function(bicicleta) {
    var self = this;
    
    this._$paginaFormulario.fadeOut(function() {
        self._$paginaFicha
                .find('img')
                .attr('src', bicicleta.imagen);
        self._$precio
                .text(bicicleta.precio);    
        var $tabla = self._$paginaFicha.find('table');
        var campos = ['marca', 'modelo', 'sillin', 'cambio', 'potencia'];
        for (var i=0; i < campos.length; i++) {
            var campoActual = campos[i];
            $tabla.append(
                $('<tr>').append($('<td>').text(campoActual))
                         .append($('<td>').text(bicicleta[campoActual])));
        }
        self._$paginaFicha.fadeIn();
    });
};

FormularioCtrl.prototype.mostrarError = function(error) {
    this._$paginaMensajes
        .text('Se ha producido un error, por favor, inténtelo en unos minutos.')
        .fadeIn();
};


$(document).ready(function() {
    var ctrl = new FormularioCtrl();
    
});