describe('dtlConfig', function() {

	var CONFIG;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtlConfig'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_CONFIG_) {
		CONFIG = _CONFIG_;
	}));

	it('should be defined', function() {
		expect(CONFIG).toBeDefined();
	});

	describe('CONFIG', function() {

		it('should have property DEBUG', function() {
			expect(CONFIG.DEBUG).toBeDefined();
		});

		it('should have 1 properties', function() {
			var count = 0;
			for (var key in CONFIG) {
				if (CONFIG.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(1);
		});

	});

});
