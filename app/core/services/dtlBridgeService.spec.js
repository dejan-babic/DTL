describe('dtlBridgeService', function() {

	var dtlBridge;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_dtlBridge_){
		dtlBridge = _dtlBridge_;
	}));

	it('should exist', function() {
		expect(dtlBridge).toBeDefined();
	});

	it('should expose an getLibraryBooks method', function() {
		expect(dtlBridge.getLibraryBooks).toBeDefined();
	});

	describe('getLibraryBooks', function(){
		it('should return a promise', function() {
		//TODO [DB] figure out
		});
	})

});