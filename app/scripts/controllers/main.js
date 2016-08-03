'use strict';

/**
 * @ngdoc function
 * @name dimondApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dimondApp
 */
angular.module('dimondApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
    {  name:'eggplate',
      fliesstext:'sadfjsldakjfl;ksdaj fklsadj iausd foijsdaof joisadj fisoda jfoposdia pf l;kfjsad oi',
      art:'gemuse',
      bild:'images/eggplate.png'

    },
    {  name:'apfel',
      fliesstext:'sadfjsldakjfl;ksdaj fklsadj flksdjioerj goiejfg iajiogpre qwgio erpa l;kfjsad oi',
      art:'obst',
      bild:'images/apple.png'

    },
    {  name:'banana',
      fliesstext:'sadfjsldakjfl;ksdaj fklsadj asdfjklsadfjlk sa;dkfl ksadlfksajd f;klksladj f;lsadkfjsladk fjsida jfklsad;lkf',
      art:'obst',
      bild:'images/banana.png'

    },
    {  name:'schwien',
      fliesstext:'sadfjsldakjfl;ksdaj iosad jfoijsa doifi sdoaj fopijsdaiof psda flksdja l;kfjsad oi',
      art:'fleisch',
      bild:'images/schwien.png'

    },
    {  name:'zwiebel',
        fliesstext:'sadfjsldakjfl;ksdaj fklsadj flksdja l;kfjsadasdfsad dsf sasdfsadf sdaf sda fsdadaf sdaf sadf asdfsd oi',
        art:'gemuse',
        bild:'images/zwiebel.png'

      },
      {  name:'wurst',
          fliesstext:'sadfjsldakjfl;ksdaj fklsadj flksdja l;kfjsadasdfsad dsf sdaf sdaf sadf sd sadf asdfsd oi',
          art:'fleisch',
          bild:'images/wurst.png'

        },
    ];
    $scope.myFunc = function(a) {
          for( var type in $scope.types){
            var t = $scope.types[type];
              if(t.selected && a.art == t.name ){
                  return true;
              }
          }
      };


    $scope.types=[{ name:'gemuse' , selected:true}, {name:'fleisch',selected:true}, {name:'obst' , selected:true}]
  });
