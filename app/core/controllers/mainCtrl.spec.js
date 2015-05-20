describe('mainCtrl', function() {

	var $rootScope, $scope, $controller, mainCtrl;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _$controller_){

		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$controller = _$controller_;

		mainCtrl = $controller('mainCtrl', {'$rootScope' : $rootScope, '$scope': $scope});

	}));

	it('should exist', function() {
		expect(mainCtrl).toBeDefined();
	});

});