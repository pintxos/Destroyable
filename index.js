/**
 * Serves as a base layer for all destroyable objects.
 * Impelements init and destroy methods.
 */

if(typeof define !== 'function') {
	define = function( deps, definition ) {
		window.pintxos = window.pintxos || {};
		window.pintxos.Destroyable = definition();
		define = null;
	};
}

define([], function () {

	/* Constructor
	----------------------------------------------- */	
	var Destroyable = function () {
		this._isDestroyed = true;
	};
	

	/* Methods
	----------------------------------------------- */	

	/**
	 * All bootstrap logic should go here
	 * @return {void}
	 */
	Destroyable.prototype.init = function () {

		if(!this.isDestroyed()) {
			this.destroy();
		}

		this._isDestroyed = false;
	};

	/**
	 * All teardown logic should go here
	 * @return {void}
	 */
	Destroyable.prototype.destroy = function () {
		this._isDestroyed = true;
	};

	/**
	 * Getter for _isDisposed
	 * @return {Boolean}
	 */
	Destroyable.prototype.isDestroyed = function () {
		return this._isDestroyed;
	};


	/* Export
	----------------------------------------------- */
	return Destroyable;

});