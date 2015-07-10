/**
 * Created by Hamid on 7/10/2015.
 */
describe('dessert manager', function () {
   var values, factory;
    beforeEach(function () {
        module('pieApp');
        inject(function(_dessertManager_, _DessertValue_) {
            factory = _dessertManager_;
            values = _DessertValue_;
        });
    });
    it ('should instantiate 3 pies with flavor', function () {
       expect(values.pies).toEqual([{
            flavor: 'cherry', score: 20},
            {flavor: 'lemon', score:19},
            {flavor: 'apple', score:18}
        ]);
    });

    it ('should return the 3 pies flavor string', function () {
        var flavors= factory.pieFlavor();
        expect(flavors.length).toEqual(3);
        expect(flavors[1]).toEqual('lemon');
    });

    it('should threw an error if there are no pies', function () {
        values.pies = null;
        expect(function () {
            factory.pieFlavor();
        }).toThrow();

    });
});