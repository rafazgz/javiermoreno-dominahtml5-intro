
        // First, checks if it isn't implemented yet.
        if (!String.prototype.format) {
          String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) { 
              return typeof args[number] != 'undefined'
                ? args[number]
                : match
              ;
            });
          };
        }


        var persona = function(nif, nombre, direccion)
        {
            this.nif = nif;
            this.nombre = nombre;
            this.direccion = direccion;
            
            var saludar = function()
            {
                return 'Nif: {0} Nombre {1} Direccion {2}'.format(nif, nombre, direccion);
            }
        }
        
        var linea = function(referencia, nombre, precio, unidades)
        {
            var toString = function()
            {
                return 'Ref: {0} Nombre {1} Precio {2} Unidades {3} SubTotal {4}'.format(referencia, nombre, precio, unidades, precio * unidades);
            
            }
        }
        
        var calculaBaseImponible = function(){}
        var calculaIVA = function(){}
        
        var factura = {
            numero : 0123456789,
            fechaEmision : '20140101',
            
            emisor : new persona('72969038C', 'Rafa', 'Mi casa'),
            
            cliente : new persona('25252525C', 'Javier', 'La suya'),
            
            lineas : [
                   new linea('0003', 'P1', '100', 2),
                    new linea('0002', 'P2', '10', 5),
            ],
            
            Concepto : 'Esta es la factura más barata del mundo',
            BaseImponible : calculaIVA(),
            
            total : this['Cuota IVA'] + this['Base Imponible'] ,            
            
            getIVA : function() {
                return this.BaseImponible * 0.21;
			},
        };

        console.log(factura.emisor.saludar());
        
        console.info('La factura número %i del cliente %s asciende a un total de %d euros',
            f3.numero, f3.cliente.nombre, f3["total a facturar"]);
        
        for(var prop in factura){
            
            var valor = factura[prop];
            
            if(typeof(valor) == 'object'){
                for(var propAnidada in valor)
                {
                   console.log('La propiedad %s vale %s', propAnidada, valor[propAnidada]); 
                }
            } else {
                console.log('La propiedad %s vale %s', prop, valor);
            }
        
        }
    
