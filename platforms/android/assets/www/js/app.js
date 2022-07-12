// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])
angular.module('starter', ['ionic','starter.controllers','ngCordova'])

.run(function($ionicPlatform, $cordovaNativeAudio) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    window.plugins.NativeAudio.preloadComplex('key', 'audio/bgm.mp3', 1, 1, 0, function(msg) {
        // If this is not a first playback stop and unload previous audio track
//        if ($scope.player.key.length > 0) {
//          window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
//          window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
//        }
    }, function(msg) {
          console.log('error: ' + msg); // Loading error
    });
//    $cordovaNativeAudio.preloadSimple('a', 'audio/a.wav')
//        .then(function (msg) {
//          console.log(msg);
//        }, function (error) {
//          alert(error);
//        });
//    $cordovaNativeAudio.preloadSimple('b', 'audio/b.wav')
//        .then(function (msg) {
//          console.log(msg);
//        }, function (error) {
//          alert(error);
//        });
//    $cordovaNativeAudio.preloadSimple('lulus', 'audio/lulus.wav')
//        .then(function (msg) {
//          console.log(msg);
//        }, function (error) {
//          alert(error);
//        });
//    $cordovaNativeAudio.preloadSimple('gagal', 'audio/gagal.mp3')
//        .then(function (msg) {
//          console.log(msg);
//        }, function (error) {
//          alert(error);
//        });
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle('center');

//============================= STATE APP ==============================
  $stateProvider
  .state('app', {
    url: '/pintarstudiourl',
    abstract: true,
    templateUrl: 'templates/mainmenu/mainmenu_template.html',
    controller: 'HomeCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/profile.html'
      }
    }
  })

  .state('app.pendahuluan', {
    url: '/pendahuluan',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/pendahuluan.html'
      }
    }
  })

  .state('app.petunjuk', {
    url: '/petunjuk',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/petunjuk.html'
      }
    }
  })

  .state('app.kompetensi', {
      url: '/kompetensi',
      views: {
        'menuContent': {
          templateUrl: 'templates/mainmenu/kompetensi.html'
        }
      }
    })
    
  .state('app.pustaka', {
    url: '/pustaka',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/daftar_pustaka.html',
      }
    }
  })
  
   .state('app.glosarium', {
    url: '/glosarium',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/glosarium.html',
      }
    }
  })

  .state('app.materi', {
    url: '/materi',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/materi.html',
      }
    }
  })
  
  .state('app.tes_formatif', {
    url: '/tes_formatif',
    views: {
      'menuContent': {
        templateUrl: 'templates/mainmenu/tes_formatif.html',
        // templateUrl: 'templates/app/kegiatan1_tes_formatif.html',
      }
    }
  })
  
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/mainmenu/home.html',
        }
      }
    })
    
  //====================================KEGIATAN 1================================================
  

  .state('app.kata_pengantar', {
    url: '/kata_pengantar',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kata_pengantar.html',
      }
    }
  })
  .state('app.kegiatan1_pembelajaran', {
    url: '/kegiatan1_pembelajaran',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan1_pembelajaran.html',
      }
    }
  })
  .state('app.kegiatan1_pembelajaran2', {
    url: '/kegiatan1_pembelajaran2',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan1_pembelajaran2.html',
      }
    }
  })
  .state('app.kegiatan1_materi', {
    url: '/kegiatan1_materi',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan1_materi.html',
      }
    }
  })
 
//====================================KEGIATAN 2================================================
  .state('app.materi2_diskusi1', {
    url: '/materi2_diskusi1',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/materi2_diskusi1.html',
      }
    }
  })
  .state('app.materi2_diskusi2', {
    url: '/materi2_diskusi2',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/materi2_diskusi2.html',
      }
    }
  })
  .state('app.kegiatan2_pembelajaran', {
    url: '/kegiatan2_pembelajaran',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan2_pembelajaran.html',
      }
    }
  })
  .state('app.kegiatan2_materi', {
    url: '/kegiatan2_materi',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan2_materi.html',
      }
    }
  })

//====================================KEGIATAN 3================================================
  
  .state('app.kegiatan3_pembelajaran', {
    url: '/kegiatan3_pembelajaran',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan3_pembelajaran.html',
      }
    }
  })
  .state('app.materi3_diskusi1', {
    url: '/materi3_diskusi1',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/materi3_diskusi1.html',
      }
    }
  })
  .state('app.kegiatan3_materi', {
    url: '/kegiatan3_materi',
    views: {
      'menuContent': {
        templateUrl: 'templates/app/kegiatan3_materi.html',
      }
    }
  })
  
//============================= STATE WELCOME ==============================

  .state('home', {
    url: '/pintarstudiohome',
    abstract: true,
    templateUrl: 'templates/welcome_template.html',
    controller: 'HomeCtrl'
  })

  .state('home.view', {
    url: '/view',
    views: {
      'homeContent': {
        templateUrl: 'templates/welcome_screen.html',
        controller: 'HomeCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/pintarstudiohome/view');
});
