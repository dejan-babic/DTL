describe('gotoService', function() {

	var goTo, $location, $route;
	var ROUTES = {
		HOME: '/Home',
		LOAD: '/Load',
		FAKE: '/Fake'
	};

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_goTo_, _$location_, _$route_){
		goTo = _goTo_;
		$location = _$location_;
		$route = _$route_;
	}));

	it('should exist', function() {
		expect(goTo).toBeDefined();
	});

	it('should set $location.path to ' + ROUTES.HOME + ' when home() is called', function() {
		goTo.home();
		expect($location.path()).toEqual(ROUTES.HOME);
	});

	it('should set $location.path to any given route when somewhere() is called', function() {
		goTo.somewhere(ROUTES.FAKE);
		expect($location.path()).toEqual(ROUTES.FAKE);
	});

});