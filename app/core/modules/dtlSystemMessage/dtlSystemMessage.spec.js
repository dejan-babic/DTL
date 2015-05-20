describe('dtlSystemMessage', function() {

	var SYSTEM_MESSAGE;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtlSystemMessage'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_SYSTEM_MESSAGE_){
		SYSTEM_MESSAGE = _SYSTEM_MESSAGE_;
	}));

	it('should exist', function() {
		expect(SYSTEM_MESSAGE).toBeDefined();
	});

	describe('SYSTEM_MESSAGES', function() {

		it('should have property ACTION_OK', function() {
			expect(SYSTEM_MESSAGE.ACTION_OK).toBeDefined();
		});

		it('should have property DEVICE_NOT_SUPPORTED', function() {
			expect(SYSTEM_MESSAGE.DEVICE_NOT_SUPPORTED).toBeDefined();
		});

		it('should have property BROWSER_NOT_SUPPORTED', function() {
			expect(SYSTEM_MESSAGE.BROWSER_NOT_SUPPORTED).toBeDefined();
		});

		it('should have 3 properties', function() {
			var count = 0;
			for (var key in SYSTEM_MESSAGE) {
				if (SYSTEM_MESSAGE.hasOwnProperty(key)) {
					count += 1;
				}
			}
			//noinspection JSCheckFunctionSignatures
			expect(count).toEqual(3);
		});

	});

});