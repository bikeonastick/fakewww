describe('bar', function() {
    describe('initialize', function() {
        it('should set name instance variable', function(){
            BAR.initialize('support');

            expect(BAR.name).toEqual('support');
        });

    });

});
