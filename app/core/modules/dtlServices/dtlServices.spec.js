describe('dtlConfig', function() {

	var SERVICES, numberOfModes, numberOfServices;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtlServices'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_SERVICES_) {
		numberOfModes = 2;
		numberOfServices = 1;
		SERVICES = _SERVICES_;
	}));

	it('should be defined', function() {
		expect(SERVICES).toBeDefined();
	});

	describe('SERVICES', function() {

		it('should have property LIVE', function() {
			expect(SERVICES.LIVE).toBeDefined();
		});

		it('should have property DUMMY', function() {
			expect(SERVICES.DUMMY).toBeDefined();
		});

		it('should have ' + numberOfModes + ' properties', function() {
			var count = 0;
			for (var key in SERVICES) {
				if (SERVICES.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(numberOfModes);
		});

	});

	describe('SERVICES.LIVE', function() {

		it('should have property STORED_BOOKS', function() {
			expect(SERVICES.LIVE.STORED_BOOKS).toBeDefined();
		});

		it('should have ' + numberOfServices + ' properties', function() {
			var count = 0;
			for (var key in SERVICES.LIVE) {
				if (SERVICES.LIVE.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(numberOfServices);
		});

	});

	describe('SERVICES.DUMMY', function() {

		it('should have property STORED_BOOKS', function() {
			expect(SERVICES.DUMMY.STORED_BOOKS).toBeDefined();
		});

		it('should have ' + numberOfServices + ' properties', function() {
			var count = 0;
			for (var key in SERVICES.DUMMY) {
				if (SERVICES.DUMMY.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(numberOfServices);
		});
	});

});