describe('baz', function() {
    describe('initialize', function() {
        it('should set name instance variable', function(){
            BAZ.initialize('support');

            expect(BAZ.name).toEqual('support');
        });
        it('should set name instance variable as well', function(){
          var tst = new Baz('foo');
          tst.initialize('support');

          expect(tst.name).toEqual('support');
        });

    });

});
