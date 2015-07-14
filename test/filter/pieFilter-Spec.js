/**
 * Created by Hamid on 7/13/2015.
 */
describe('pieFilter', function () {
   beforeEach(function () {
       module('pieApp');
   });
    it('should make a uppercase', function () {
        inject(function (upCaseFilter) {
            expect(upCaseFilter('hamid')).toEqual('HAMID');
        })
    })
});