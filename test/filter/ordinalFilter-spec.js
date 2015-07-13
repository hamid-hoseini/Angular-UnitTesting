/**
 * Created by Hamid on 7/13/2015.
 */
describe('Filter Testing', function () {
    var ordinal;
    beforeEach(function() {
        module('pieApp');
/*        inject(function(_Ordinal_) {
            ordinal = _Ordinal_;
        });*/
    });
    it('ordinal filter testing', function () {
        inject(function (OrdinalFilter) {
            expect(OrdinalFilter(-20)).toEqual(-20);
        })


    })
})