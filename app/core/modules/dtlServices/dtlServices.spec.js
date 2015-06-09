describe('dtlConfig', function() {

	var SERVICES, numberOfValues;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtlServices'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_SERVICES_) {
		numberOfValues = 2;
		SERVICES = _SERVICES_;
	}));

	it('should be defined', function() {
		expect(SERVICES).toBeDefined();
	});

	describe('SERVICES', function() {

		it('should have property STORED_BOOKS', function() {
			expect(SERVICES.STORED_BOOKS).toBeDefined();
		});

		it('should have property STORED_BOOKS_DUMMY', function() {
			expect(SERVICES.STORED_BOOKS_DUMMY).toBeDefined();
		});

		it('should have ' + numberOfValues + ' properties', function() {
			var count = 0;
			for (var key in SERVICES) {
				if (SERVICES.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(numberOfValues);
		});

	});

});