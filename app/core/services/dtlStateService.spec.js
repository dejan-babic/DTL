describe('dtlStateService', function() {

	var dtlState;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_dtlState_){
		dtlState = _dtlState_;
	}));

	it('should exist', function() {
		expect(dtlState).toBeDefined();
	});

	it('should expose an setInitialized method', function() {
		expect(dtlState.setInitialized).toBeDefined();
	});

	describe('setInitialized', function(){
		it('should set initialized property to true', function() {
			dtlState.setInitialized();
			//noinspection JSCheckFunctionSignatures
			expect(dtlState.isInitialized()).toBe(true);
		});
	});

	it('should expose an resetInitialized method', function() {
		expect(dtlState.resetInitialized).toBeDefined();
	});

	describe('resetInitialized', function(){
		it('should set initialized property to false', function() {
			dtlState.resetInitialized();
			//noinspection JSCheckFunctionSignatures
			expect(dtlState.isInitialized()).toBe(false);
		});
	});

	it('should expose an isInitialized method', function() {
		expect(dtlState.isInitialized).toBeDefined();
	});

});