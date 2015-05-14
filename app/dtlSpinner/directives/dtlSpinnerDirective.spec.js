describe('dtlSpinnerDirective', function() {

	var $rootScope, $scope, $compile, element, dtlSpinnerService;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(module('app/dtlSpinner/templates/directives/dtlSpinner.html'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _$compile_, _dtlSpinner_){

		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		dtlSpinnerService = _dtlSpinner_;
		element = angular.element('<div id="spinnerHolder" dtl-spinner="">Inner Content</div>');
		element = $compile(element)($scope);
		$scope.$digest();

	}));

	it('should create the spinner element with the id dtlSpinner', function() {
		//noinspection JSCheckFunctionSignatures
		expect(element.find('#dtlSpinner').length).toEqual(1);
	});

	it('should set the spinner message when it is changed using dtlSpinner service', function() {
		dtlSpinnerService.start('test');
		$scope.$digest();
		//noinspection JSCheckFunctionSignatures
		expect($scope.spinnerMessage).toEqual('test');
	});

});