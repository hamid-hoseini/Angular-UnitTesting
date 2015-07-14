/**
 * Created by Hamid on 7/13/2015.
 */
app.filter('upCase', function () {
   return function (item){
       return item.toUpperCase();
   }
});