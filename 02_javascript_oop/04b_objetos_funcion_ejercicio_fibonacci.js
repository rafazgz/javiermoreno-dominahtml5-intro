var contador = 0;
		
		var fibonacci = function(n) {
			contador = contador + 1;
			if (n==0) return 0;
			if (n==1) return 1;
			
			return fibonacci(n-2) + fibonacci(n-1);		
		};
	
		console.log(fibonacci(31));