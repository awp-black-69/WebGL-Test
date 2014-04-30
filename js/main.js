(function(window){
	var D = {
		get: function(id){
			if(typeof id !== 'string') return id;
			if(id.indexOf('#')===0 && id.indexOf(' ')===-1)
				return document.getElementById(id.substr(1));
			else if(id.indexOf('.')===0 && id.indexOf(' ')===-1)
				return document.getElementsByClassName(id.substr(1));
			else try{
				return document.querySelector(id);
			}catch(e){
				return null;
			}
		},
		ondomready: function(callback){
			if(document.addEventListener)
			{
				document.addEventListener('DOMContentLoaded', function(e){
					if(callback) callback.call(this, e);
				});
			}else
				document.onreadystatechange = function(){
					if(document.readyState == 'complete' && callback) callback.call(this);
				};
		}
	};
	window.d = D;
})(window);

try{
    console.log(em.circle().getRadius());
}catch(e)
{
    console.log(e.stack);
}

d.ondomready(main);

function main(){
	var canv = d.get('#board'),
		gl = canv.getContext('webgl');
	
	if(gl)
	{
		gl.clearColor(1.0,1.0,1.0,1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
        
        var buffer = gl.createBuffer(),
            data = [ 1.0, 0.0, 0.0,
                     0.0, 1.0, 0.0,
                     0.0, 1.0, 1.0
                   ];
        
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        
        
	}else
		alert("Error : Your browser doesn't support WebGL.");
}