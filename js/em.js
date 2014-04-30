(function(window){
    var EM = {
        PI: Math.PI,
        helpers: function(){},
        circle: function(r){
            var circle = function(r){
                if(r) this.rad = r || null;
            };
            
            circle.prototype = new EM.helpers;
            circle.prototype.constructor = circle;
            
            circle.prototype.radius = function(r){this.rad = r; return this};
            circle.prototype.getRadius = function(){
                if(!isNaN(this.rad)) return this.rad;
                else return null;
            };
            circle.prototype.getPerimeter = function(){
                if(!isNaN(this.rad)) return this.rad*2*Math.PI;
                else return null;
            };
            circle.prototype.getArea = function(){
                if(!isNaN(this.rad)) return this.rad*this.rad*Math.PI;
                else return null;
            };
            
            return new circle(r);
        }
    };
    
    EM.helpers.prototype.ret = function(key, val){
        if(val) return val;
        if(!val){
            if(Error) throw new Error(key + " not defined");
            else throw {message: key + " not defined"};
        }
    };
    
    window.em = EM;
})(window);