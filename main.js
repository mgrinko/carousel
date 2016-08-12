;function SquirrelCarousel(options) {
 this._options = options;

 this._mainWrapper = document.getElementById(this._options.idname);
 this._itemsWidth();

 window.addEventListener('resize', function(){
  this._itemsWidth();

    
  }.bind(this));

};





SquirrelCarousel.prototype._itemsWidth = function() {

    itemsWidth = this._mainWrapper.clientWidth / this._options.items;
    document.getElementById('size').innerHTML = itemsWidth;
    
 
}





new SquirrelCarousel({
  idname: "carcar",
  items: 4
});
