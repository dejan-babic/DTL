describe('dtlDeviceManagerService', function() {

	var $rootScope, $scope, dtlDeviceManager, SYSTEM_MESSAGE;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _dtlDeviceManager_, _SYSTEM_MESSAGE_){
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		dtlDeviceManager = _dtlDeviceManager_;
		SYSTEM_MESSAGE = _SYSTEM_MESSAGE_;
	}));

	it('should expose an checkDevice method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlDeviceManager.checkDevice).toBeDefined();
	});

	describe('checkDevice', function() {
		//TODO [DB] figure out how to test the promise
	});

	it('should expose an checkUserAgent method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlDeviceManager.checkUserAgent).toBeDefined();
	});

	describe('checkUserAgent', function() {
		//TODO [DB] figure out how to test the promise
	});

});
