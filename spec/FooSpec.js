
require(['app/js/foo.js'], function(){ 
  require('app/js/foo.js');
});

describe('foo', function() {
    describe('initialize', function() {
        it('should set name instance variable', function(){
            FOO.initialize('support');

            expect(FOO.name).toEqual('support');
        });

    });

});
