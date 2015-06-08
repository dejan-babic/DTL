describe('dtlBookHolder', function(){
	var $rootScope, $scope, $compile, element;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	//beforeEach(module('app/dtlBookHolder/templates/directives/dtlBookHolder.html'));
	beforeEach(module('app/dtlSpinner/templates/directives/dtlSpinner.html'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _$compile_){
		//TODO [DB] compile template
/*		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		element = angular.element('<div id="bookHolder" dtl-book-holder=""></div>');
		element = $compile(element)($scope);
		$scope.$digest();*/

	}));

	it('should', function() {
		//TODO [DB] test functionality
		//noinspection JSCheckFunctionSignatures
		//expect(element.find('#dtlSpinner').length).toEqual(1);
	});

});