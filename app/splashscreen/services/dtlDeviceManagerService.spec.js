describe('dtlDeviceManagerService', function() {

	var $rootScope, $scope, dtlDeviceManager;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _dtlDeviceManager_){
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		dtlDeviceManager = _dtlDeviceManager_;
	}));

	it('should expose an checkDevice method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlDeviceManager.checkDevice).toBeDefined();
	});

	it('should expose an checkUserAgent method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlDeviceManager.checkUserAgent).toBeDefined();
	});

});
