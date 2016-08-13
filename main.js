"use strict";
;function SquirrelCarousel(options) {
 this._options = options;
 this._mainWrapper = document.getElementById(this._options.idname);
 this._itemImagesWrapper = this._mainWrapper.querySelectorAll('.scarousel-item');
 this._itemsWrapper = this._mainWrapper.querySelector('.scarousel-wrapper');
 this._currentItem = (this._options.currentItem || 1) - 1;
 this._init();


 window.addEventListener('resize', this._onWindowResize.bind(this));
 window.addEventListener('click', this._onWindowClick.bind(this));

};
SquirrelCarousel.prototype._onWindowResize = function() {
  this._setWidth();
  this._setWidthItem();
  this._currentMargin();
}
SquirrelCarousel.prototype._onWindowClick = function(e) {
	if (e.target.closest("#" + this._options.idname)) {
		if(e.target.closest('.scarousel-navigation-prev')) {
			this._doScrollItemMinus();
		}
		if(e.target.closest('.scarousel-navigation-next')) {
			this._doScrollItemPlus();
		}
	}
}
SquirrelCarousel.prototype._currentMargin = function() {
this._itemsWrapper.style.marginLeft  = -(this._getItemsWidth() * this._currentItem) + "px";
	
}
SquirrelCarousel.prototype._doScrollItemPlus = function() {
	var lastBeforeVisibleItems = this._getItemsAmount() - this._options.items;
	if(this._currentItem === lastBeforeVisibleItems) {
		return;
	}
this._currentItem += 1;
this._currentMargin();
}
SquirrelCarousel.prototype._doScrollItemMinus = function() {

	if(this._currentItem === 0) {
		return;
	}
this._currentItem -= 1;
this._currentMargin();
}
SquirrelCarousel.prototype._getItemsWidth = function() {
	return (this._mainWrapper.clientWidth / this._options.items);  
}
SquirrelCarousel.prototype._getItemsAmount = function() {
    return this._mainWrapper.querySelectorAll('.scarousel-item').length;  
}

SquirrelCarousel.prototype._setWidth = function() {
 	this._mainWrapper.firstElementChild.style.width = this._getItemsWidth() * this._getItemsAmount() + 'px';
}
SquirrelCarousel.prototype._setWidthItem = function() {
 for(var i = 0; i < this._itemImagesWrapper.length; i++) {
 	this._itemImagesWrapper[i].style.width = this._getItemsWidth() + 'px';
 }
}
SquirrelCarousel.prototype._setNavigation = function() {
 	if(this._options.navigation) {
 		var navigationWrapper = document.createElement('div');
 		navigationWrapper.className = "scarousel-navigation";

 		var navigationPrev = document.createElement('div');
 		navigationPrev.innerHTML = this._options.navigationText[0];
 		navigationPrev.className = "scarousel-navigation-prev";
 		

 		var navigationNext = document.createElement('div');
 		navigationNext.innerHTML = this._options.navigationText[1];
 		navigationNext.className = "scarousel-navigation-next";
 		

 		navigationWrapper.appendChild(navigationPrev);
 		navigationWrapper.appendChild(navigationNext);

 		this._mainWrapper.appendChild(navigationWrapper);

 	}
}
SquirrelCarousel.prototype._setStyleParams = function() {
 	this._mainWrapper.style.overflow = "hidden";
}
SquirrelCarousel.prototype._init = function() {
	if(!this._itemsWrapper.style.marginLeft) {
		this._itemsWrapper.style.marginLeft = 0 + "px";
	}
	this._setWidth();
	this._setWidthItem();
	this._setStyleParams();
	this._setStyleParams();
	this._setNavigation();
	this._currentMargin();

}














new SquirrelCarousel({
  idname: "carcar",
  items: 4,
  navigation: true,
  navigationText: ['prev', 'next'] //text navigation (Also HTML can be used here)
});

new SquirrelCarousel({
  idname: "brbr",
  items: 4,
  navigation: true,
  navigationText: ['prev', 'next'], //text navigation (Also HTML can be used here)
  currentItem: 1
});