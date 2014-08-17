describe('Destroyable', function () {

	var destroyable;

	beforeEach(function () {
		destroyable = new pintxos.Destroyable();
	});

	it('isDestroyed() should return true before initialization', function () {
		expect(destroyable.isDestroyed()).toEqual(true);
	});

	it('isDestroyed() should return false after initialization', function () {
		destroyable.init();
		expect(destroyable.isDestroyed()).toEqual(false);
	});

	it('isDestroyed() should return true after calling destroy()', function () {
		destroyable.init();
		destroyable.destroy();
		expect(destroyable.isDestroyed()).toEqual(true);
	});

	it('isDestroyed() should return false after calling init() twice', function () {
		destroyable.init();
		destroyable.init();
		expect(destroyable.isDestroyed()).toEqual(false);
	});
	
});