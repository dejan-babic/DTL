describe('dtlSpinnerService', function() {

	var $rootScope, $scope, $compile, $timeout, element, dtlSpinnerService;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(module('app/dtlSpinner/templates/directives/dtlSpinner.html'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_, _dtlSpinner_){

		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		dtlSpinnerService = _dtlSpinner_;
		element = angular.element('<div id="spinnerHolder" dtl-spinner="">Inner Content</div>');
		element = $compile(element)($scope);
		$scope.$digest();

	}));

	it('should expose an init method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlSpinnerService.init).toBeDefined();
	});

	describe('init()', function(){

		it('should return true on valid initialization', function() {
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.init(element)).toBe(true);
		});

		it('should return false on invalid initialization', function() {
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.init(angular.element('<div></div>'))).toBe(false);
		});

	});

	it('should expose a start method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlSpinnerService.start).toBeDefined();
	});

	describe('start()', function(){

		it('should show the spinner after JQuery fadeIn()', function() {
			var spinner;
			dtlSpinnerService.init(element);
			spinner = element.find('#dtlSpinner');
			dtlSpinnerService.start('start-message');
			//noinspection JSCheckFunctionSignatures
			expect(spinner.css('display')).toEqual('block');
		});

		it('should change the message property when called', function() {
			dtlSpinnerService.start('start-message');
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.message()).toEqual('start-message');
		});

	});

	it('should expose a stop method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlSpinnerService.stop).toBeDefined();
	});

	describe('stop()', function(){

		it('should hide the spinner after JQuery fadeOut()', function() {
			var spinner;
			dtlSpinnerService.init(element);
			spinner = element.find('#dtlSpinner');
			dtlSpinnerService.start('start-message');
			dtlSpinnerService.stop();
			//give the fadeOut time to complete
			$timeout(function(){
				//noinspection JSCheckFunctionSignatures
				expect(spinner.css('display')).toEqual('');
			});
		});

	});

	it('should expose an update method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlSpinnerService.update).toBeDefined();
	});

	describe('update()', function(){

		it('should change the message property when called', function() {
			dtlSpinnerService.update('update-message');
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.message()).toEqual('update-message');
		});

	});

	it('should expose a message method', function() {
		//noinspection JSCheckFunctionSignatures
		expect(dtlSpinnerService.message).toBeDefined();
	});

	describe('message()', function(){

		it('should retrieve message set by start() method', function() {
			dtlSpinnerService.update('start-message');
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.message()).toEqual('start-message');
		});

		it('should retrieve message set by update() method', function() {
			dtlSpinnerService.update('update-message');
			//noinspection JSCheckFunctionSignatures
			expect(dtlSpinnerService.message()).toEqual('update-message');
		});

	});

});