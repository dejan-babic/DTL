describe('dtlGoToService', function() {

	var dtlGoTo, $location, $route;
	var ROUTES = {
		HOME: '/Home',
		LOAD: '/Load',
		FAKE: '/Fake'
	};

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_dtlGoTo_, _$location_, _$route_){
		dtlGoTo = _dtlGoTo_;
		$location = _$location_;
		$route = _$route_;
	}));

	it('should exist', function() {
		expect(dtlGoTo).toBeDefined();
	});

	it('should set $location.path to ' + ROUTES.HOME + ' when home() is called', function() {
		dtlGoTo.home();
		//noinspection JSCheckFunctionSignatures
		expect($location.path()).toEqual(ROUTES.HOME);
	});

	it('should set $location.path to ' + ROUTES.LOAD + ' when load() is called', function() {
		dtlGoTo.load();
		//noinspection JSCheckFunctionSignatures
		expect($location.path()).toEqual(ROUTES.LOAD);
	});

	it('should set $location.path to any given route when here() is called', function() {
		dtlGoTo.here(ROUTES.FAKE);
		//noinspection JSCheckFunctionSignatures
		expect($location.path()).toEqual(ROUTES.FAKE);
	});

});