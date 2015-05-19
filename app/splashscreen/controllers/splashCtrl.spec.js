describe('splashCtrl', function() {

	var $rootScope, $scope, $controller, splashCtrl, deviceManager, dtlSpinnerService;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _$controller_, _deviceManager_, _dtlSpinner_){

		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller = _$controller_;
		deviceManager = _deviceManager_;
		dtlSpinnerService = _dtlSpinner_;

		dtlSpinnerService.init = function(){return true;};
		dtlSpinnerService.start = function(){return true;};
		dtlSpinnerService.stop = function(){return true;};
		dtlSpinnerService.update = function(){return true;};
		dtlSpinnerService.message = function(){return true;};

		splashCtrl = $controller('splashCtrl', {'$rootScope' : $rootScope, '$scope': $scope});

	}));

	it('should exist', function() {
		expect(splashCtrl).toBeDefined();
	});

	//TODO [DB] Figure out how to test private functions
	//TODO [DB] Figure out how to test the chained promises

});