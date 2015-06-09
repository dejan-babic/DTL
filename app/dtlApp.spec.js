describe('dtlApp', function() {

	var $route;

	//noinspection JSUnresolvedFunction
	beforeEach(module('dtl'));
	//noinspection JSUnresolvedFunction
	beforeEach(inject(function(_$route_) {
		$route = _$route_
	}));

	it('should have 2 routes defined', function() {
		//TODO [DB] Figure out how to count the routes
	});

	describe('Home route', function() {

		it('should be defined', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Home']).toBeDefined();
		});

		it('should be mapped to the homeCtrl', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Home'].controller).toBe('homeCtrl');
		});

		it('should use the home.html as the template', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Home'].templateUrl).toEqual('app/homepage/templates/views/home.html');
		});

	});

	describe('Load route', function() {

		it('should be defined', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Load']).toBeDefined();
		});

		it('should be mapped to the splashCtrl', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Load'].controller).toBe('splashCtrl');
		});

		it('should use the home.html as the template', function () {
			//noinspection JSCheckFunctionSignatures
			expect($route.routes['/Load'].templateUrl).toEqual('app/splashscreen/templates/views/splash.html');
		});

	});

});
