var GestionTareasService = function() {
};

GestionTareasService.STORAGE_KEY = 'alist_tareas'; /* Ojo! constante. */

GestionTareasService.prototype.agregarTarea = function(nuevaTarea, fnSuccess /* Ojo! asíncrono */, fnError) {
   
    $.post('tareas.json', {data: JSON.stringify(nuevaTarea)})
    .done(function(){ fnSuccess();})
    .fail(function(error) { fnError(error);});
};



var obtenerTareasDesdeServidor = function() {
        var url = '../../js/tareas.json';
        var deferred = $.getJSON(url);	
        deferred.done(function(tareas) {
            console.log('Primer done', tareas);
        });
       
        deferred.fail(function(tareas) {
            console.log('Primer fail', tareas);
        });
        deferred.always(function(tareas) {
            console.log('Primer always', tareas);
        });

        return deferred.promise();
    };

GestionTareasService.prototype.obtenerTareas = function(fnSuccess, fnError) {
    var promise = obtenerTareasDesdeServidor();
    promise
        .done(function(tareas) { fnSuccess(JSON.parse(JSON.stringify(tareas)));})
        .fail(function(error){ fnError(error);});
	
};









