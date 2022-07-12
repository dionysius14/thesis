angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function ($scope, $location, $ionicScrollDelegate, $ionicHistory, $cordovaNativeAudio) {
  console.log('HomeCtrl');
  $scope.sound_flag=1;
  $scope.show=true;
  $scope.playBgm=function($index){
      if($index==1){
            window.plugins.NativeAudio.loop('key'); // Play audio track
            $scope.sound_flag=1;
            $scope.show=false;
      }else{
        if($scope.sound_flag===0){
            window.plugins.NativeAudio.loop('key'); // Play audio track
            $scope.sound_flag=1;
        }else{
            $scope.sound_flag=0;
            window.plugins.NativeAudio.stop('key'); // Play audio track
        }
      }
  };
  $scope.cek_jawaban = function($index) {
    total_soal=$('[name="soal'+$index+'_total"]').html();
    /* soal_kkm=$('[name="soal'+$index+'_kkm"]').html(); */
    hasil_nilai=0;
    console.log("total_soal"+total_soal);
    for(i=0;i<Math.abs(total_soal);i++)
    {
      ini=$('[name="soal'+$index+'_'+i+'"]:checked');
      state=ini.parent().attr("state");// menentukan jawaban benar tidak (bisa untuk menampilkan jawaban yang benar) ->Kunci jawaban
      nilai=ini.parent().attr("nilai");// menentukan nilai yang didapat kalau true harus bernilai >0. -> nilai kalau salah 0 kalau bener sesuai isi dari nilai;
      state = typeof state !== 'undefined' ? state : "false";
      nilai = typeof nilai !== 'undefined' ? nilai : "0";
      console.log($index+"| soal_"+i+" jawaban "+state+" nilai "+nilai);
      hasil_nilai+=+nilai;
    } 
    $('[name="hasil_nilai"]').html(hasil_nilai);
    $('[name="div_nilai"]').show();
    $('[name="div_kunci"]').show();
    $('[name="btn_nilai"]').hide();
    
  /*   if(hasil_nilai<soal_kkm){
      $('[name="hasil_nilai_kata"]').html("Tidak Lulus");
      $cordovaNativeAudio.play('gagal');
    }else{
      $('[name="hasil_nilai_kata"]').html("Lulus");
      $cordovaNativeAudio.play('lulus');
    } */
	
	$('[name="hasil_nilai_kata"]').html("Sangat Baik");
	if(hasil_nilai>=61&&hasil_nilai<=80)
	{
		$('[name="hasil_nilai_kata"]').html("Baik");
	} 
	else if(hasil_nilai>=41&&hasil_nilai<=60)
	{
		$('[name="hasil_nilai_kata"]').html("Cukup");
	} 
	else if(hasil_nilai>=21&&hasil_nilai<=40)
	{
		$('[name="hasil_nilai_kata"]').html("Kurang");
	} 
	else if(hasil_nilai>=0&&hasil_nilai<=20)
	{
		$('[name="hasil_nilai_kata"]').html("Sangat Kurang");
	} 
	
    
  };
  $scope.playSound = function($event) {
    temp=Math.floor(Math.random() * 2) + 1;
    if(temp==1){
        $cordovaNativeAudio.play('a');
    }else{
        $cordovaNativeAudio.play('b');
    }
  };
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
  $scope.glosarium = [
      { "_id": "1", "istilah": "Anti koagulan", "penjelasan": "Anti penggumpalan." },
      { "_id": "2", "istilah": "Dilatasi", "penjelasan": "Pergeseran letak bayi sebelum keluar dari vagina." },
      { "_id": "3", "istilah": "Ejakulasi", "penjelasan": "proses keluarnya semen dari penis menuju vagina." },
      { "_id": "4", "istilah": "Epididimis", "penjelasan": "Saluran yang berada dalam skrotum dan keluar dari kedua testis." },
      { "_id": "5", "istilah": "Fertilisasi", "penjelasan": "Proses penyatuan sel kelamin jantan dan betina, atau sering juga disebut dengan pembuahan."},
      { "_id": "6", "istilah": "Kelenjar prostat", "penjelasan": "Kelenjar yang menghasilkan getah kelamin." },
      { "_id": "7", "istilah": "Meiosis", "penjelasan": "Pembelahan sel yang menghasilkan empat sel anak.  Setiap sel anak memiliki setengah jumlah kromosom sel induk. Meiosis terjadi pada pembentukan sel kelamin." },
      { "_id": "8", "istilah": "Menstruasi ", "penjelasan": "Suatu proses meluruhnya lapisan endometrium pada uterus  tubuh wanita dengan disertai pendarahan." },
      { "_id": "9", "istilah": "Mitokondria", "penjelasan": "Organel sel yang berperan dalam proses respirasi sel." },
      { "_id": "10", "istilah": "Mitosis  ", "penjelasan": "Pembelahan sel yang menghasilkan dua sel anak. Setiap anak memiliki jumlah kromosom sama dengan sel induk." },
      { "_id": "11", "istilah": "Oogenesis ", "penjelasan": "Proses pembentukan ovum atau sel telur." },
      { "_id": "12", "istilah": "Organogenesis", "penjelasan": "Proses pembentukan organ-organ atau bagian-bagian tubuh saat embrio pada masa kehamilan. " },
      { "_id": "13", "istilah": "Ovarium ", "penjelasan": "Kelenjar kelamin betina yang menghasilkan sel telur atau sering juga disebut dengan indung telur." },
      { "_id": "14", "istilah": "Oviduk ", "penjelasan": "Saluran telur." },
      { "_id": "15", "istilah": "Ovulasi ", "penjelasan": "Pelepasan sel telur dari ovarium." },
      { "_id": "16", "istilah": "Ovum", "penjelasan": "Sel kelamin betina (sel telur)." },
      { "_id": "17", "istilah": "Penis ", "penjelasan": "Alat kelamin jantan untuk memasukkan sperma ke dalam alat kelamin betina." },
      { "_id": "18", "istilah": "Sel germinal", "penjelasan": "Sel induk" },
      { "_id": "19", "istilah": "Sel leydig  ", "penjelasan": "Sel jaringan interstisial" },
      { "_id": "10", "istilah": "Skrotum ", "penjelasan": "Kantung buah zakar." },
      { "_id": "21", "istilah": "Sperma ", "penjelasan": "Sel kelamin jantan." },
      { "_id": "22", "istilah": "Spermatogenesis ", "penjelasan": "Proses pembentukan sperma." },
      { "_id": "23", "istilah": "Testis ", "penjelasan": "Sel kelamin jantan (sel sperma)." },
      { "_id": "24", "istilah": "Urogenital ", "penjelasan": "Lubang tempat bermuaranya saluran kelamin dan saluran kencing (urin)." },
      { "_id": "25", "istilah": "Uterus ", "penjelasan": "Rahim." },
      { "_id": "26", "istilah": "Zigot ", "penjelasan": "Hasil penyatuan sel kelamin betina dengan sel kelamin jantan." }
     
    ];
    var glosarium = $scope.glosarium;
    var log = [];

    //Sort user list by first letter of name
    var tmp = {};
    for (i = 0; i < glosarium.length; i++) {
      var letter = glosarium[i].istilah.toUpperCase().charAt(0);
      if (tmp[letter] == undefined) {
        tmp[letter] = []
      }
      tmp[letter].push(glosarium[i]);
    }
    $scope.sorted_glosarium = tmp;

    //Click letter event
    $scope.gotoList = function (id) {
      $location.hash(id);
      $ionicScrollDelegate.anchorScroll();
    }

    $scope.groups = [];
    for (var i = 0; i < 10; i++) {
      $scope.groups[i] = {
        name: i,
        items: []
      };
      for (var j = 0; j < 3; j++) {
        $scope.groups[i].items.push(i + '-' + j);
      }
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicPlatform, $ionicLoading) {
    // $scope.init = function() {
    //   console.log('tes');
    // };
    // ionic.Platform.ready(function(){
    //     // Code goes here
    //     $ionicLoading.show({
    //         template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
    //     });
         
    //     var posOptions = {
    //         enableHighAccuracy: true,
    //         timeout: 200000,
    //         maximumAge: 0
    //     };
 
    //     $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    //         var lat  = position.coords.latitude;
    //         var long = position.coords.longitude;
             
    //         var myLatlng = new google.maps.LatLng(lat, long);
             
    //         var mapOptions = {
    //             center: myLatlng,
    //             zoom: 16,
    //             mapTypeId: google.maps.MapTypeId.ROADMAP
    //         };          
             
    //         var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
    //         $scope.map = map;   
    //         $ionicLoading.hide();           
             
    //     }, function(err) {
    //         $ionicLoading.hide();
    //         console.log(err);
    //     });
    // });
  
  // google.maps.event.addDomListener(window, 'load', function() {
  //       var myLatlng = new google.maps.LatLng(-7.7605503, 110.6304142);
  //       var mapOptions = {
  //           center: myLatlng,
  //           zoom: 16,
  //           mapTypeId: google.maps.MapTypeId.ROADMAP
  //       };
 
  //       var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  //       navigator.geolocation.getCurrentPosition(function(pos) {
  //           map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  //           var myLocation = new google.maps.Marker({
  //               position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
  //               map: map,
  //               title: "My Location"
  //           });
  //       });
 
  //       $scope.map = map;
  //   });

});
