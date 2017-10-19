(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductLoading',['$scope','$ionicLoading','$filter','$timeout',function ($scope,$ionicLoading,$filter,$timeout) {
      $scope.products=[];
      $scope.sourceProducts = [];
      $scope.searchMV={
        content:''
      };
      $scope.hasMore=true;
      var isLoading = false;
      var pageIndex = 1;
      $scope.$on('$ionicView.enter',function () {
       $ionicLoading.show({
         template:'<ion-spinner icon="ios" class="spinner-list"></ion-spinner>数据加载中，请稍后......'
       });
        $scope.doRefresh();
      });
      $scope.getByNaem=function () {
        $scope.products = $filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh = function () {
        pageIndex=1;
        $scope.hasMore=true;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function  loadData() {
        if (isLoading == true) {
          return;
        }
        isLoading = true;
        $timeout(function () {
          var list = [
            {
              ID: 1
              , Images: ['views/product/images/1.jpg']
              , Name: 'iphone4'
              , Price: '1111'
              , Store: 1111
              , Barcode: '111'
            }
            , {
              ID: 2
              , Images: ['views/product/images/2.jpg']
              , Name: 'iphone4s'
              , Price: '2222'
              , Store: 222              , Barcode: '222'
            }
            , {
              ID: 3
              , Images: ['views/product/images/3.jpg']
              , Name: 'iphone5'
              , Price: '3333'
              , Store: 33
              , Barcode: '333333'
            }
            , {
              ID: 4
              , Images: ['views/product/images/4.jpg']
              , Name: 'iphone'
              , Price: '4444'
              , Store: 44
              , Barcode: '444444'
            }
            , {
              ID: 5
              , Images: ['views/product/images/5.jpg']
              , Name: 'iphone5s'
              , Price: '555'
              , Store: 55
              , Barcode: '5555'
            }
            , {
              ID: 6
              , Images: ['views/product/images/6.jpg']
              , Name: 'iphone5e'
              , Price: '6666'
              , Store: 66
              , Barcode: '6666'
            }
            , {
              ID: 7
              , Images: ['views/product/images/7.jpg']
              , Name: 'iphone6'
              , Price: '7777'
              , Store: 77
              , Barcode: '7777'
            }
            , {
              ID: 7
              , Images: ['views/product/images/8.jpg']
              , Name: 'iphone7'
              , Price: '8888'
              , Store: 88              , Barcode: '8888'
            }
          ];
          $scope.products=$scope.products.concat(list);
          $scope.sourceProducts=angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $ionicLoading.hide();
          isLoading=false;
          if(pageIndex==3){
            $scope.hasMore=false;
          }
        }, 3000);
      }
    }]);
})();
