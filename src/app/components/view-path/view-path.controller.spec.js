(function() {
  /* globals Path */
  'use strict';
  var debugMode = false;

  describe('Directive viewPath', function() {

    // load the directive's module and the template
    beforeEach(module("connectionsViewPath"));
    var el, scope, compileFunction, log;

    beforeEach(inject(function($rootScope, $compile, $log) {
      el = angular.element("<div data-view-path model='path2' corpus='corpus'></div> <div data-view-path model='path1' corpus='corpus'></div>");
      scope = $rootScope.$new();
      log = $log;
      scope.path1 = new Path({
        "id": "123"
      });
      scope.path2 = new Path({
        "id": "1243"
      });
      compileFunction = $compile(el);
      // bring html from templateCache
      scope.$digest();
      if (debugMode) {
        log("post compile", el.html()); // <== html here has {{}}
      }
    }));

    // http://stackoverflow.com/questions/17223850/how-to-test-directives-that-use-templateurl-and-controllers
    it("should make a datum element with contents from scope", function() {

      inject(function() {
        compileFunction(scope); // <== the html {{}} are bound
        try {
          if (!scope.$$phase) {
            scope.$digest(); // <== digest to get the render to show the bound values
          }
        } catch (e) {
          log("error digesting scope");
        }
        if (debugMode) {
          log("post link", el.html());
          log("scope path2 ", scope.path2);
          log("scope path1 ", scope.path1);
        }
        expect(el.find("strong").length).toEqual(10);
        // expect(angular.element(el.find("strong")[1]).text().trim()).toEqual(" ");
        // expect(angular.element(el.find("dd")[0]).text().trim()).toEqual(" ");
      });
    });
  });

})();
