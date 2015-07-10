/**
 * Created by Hamid on 7/10/2015.
 */
app.value('DessertValue',{
    pies: [{
        flavor: 'cherry', score: 20},
        {flavor: 'lemon', score:19},
        {flavor: 'apple', score:18}
    ]

}).factory('dessertManager', ['DessertValue', function (dessertValue) {
    return {
        pieFlavor: function () {
            return dessertValue.pies.map(function (pie) {
                return pie.flavor;
            })
        }
    }
}]);