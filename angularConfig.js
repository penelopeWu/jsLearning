(function () {

    angular.module("indexApp", ['ngHandsontable', 'ui.router', 'yDataEntry', 'yDataDisplay', 'yFeedback', 'yun.feedback', 'yLayout', 'yNavigation']);

    //定义permissions factory
    angular.module("indexApp").factory('permissions', function ($rootScope) {
        var permissionList;
        var user;
        return {
            setPermissions: function (result) {
                if (result != undefined) {
                    permissionList = result.perms;
                    user = result;
                    $rootScope.$broadcast('permissionsChanged')
                }
            },
            getUser: function () {
                return user;
            },
            hasPermission: function (permission) {
                permission = permission.trim();
                return _.some(permissionList, function (item) {
                    if (_.isString(item)) {
                        return item.trim() === permission
                    }
                });
            }
        };
    });
    //定义router factory
    angular.module("indexApp").factory('routers', function ($rootScope) {
        var routerList;
        return {
            setRouters: function (routers) {
                routerList = routers;
                $rootScope.$broadcast('routersChanged')
            },
            getRouters: function () {
                return routerList;
            }
        };
    });

    var user, routerList;

    //获取路由信息、权限信息，启动app
    angular.element(document).ready(function () {
        requestWithCallback("api/isLogin", null, false, 'GET', function (data) {
            console.log("是否登录", data);
            if (data.code != 0) {
                window.open('index.html', '_self');
            } else {
                routerList = data.result.menu;
                user = data.result;

            }
        });


        //手动启动app
        angular.bootstrap(angular.element("body")[0], ['indexApp']);
    });
    // 设置全局路由信息、权限信息
    angular.module("indexApp").run(function (permissions, routers) {
        //设置当前权限
        permissions.setPermissions(user);
        //设置路由信息
        routers.setRouters(routerList);
    });
    angular.module("indexApp").config(function ($stateProvider, $urlRouterProvider) {
        //根据菜单请求设置路由列表
        angular.forEach(routerList, function (value, key) {
            //type为1的是页面，否则只是菜单
            if (value.type == '1') {
                $stateProvider.state(value.name, {
                    url: '/' + value.level > 0 ? value.name.split('.')[1] : value.name,
                    templateUrl: (value.level > 0 ? value.name.split('.')[0] + "/" + value.name.split('.')[1] : value.name) + '.html',
                    mark: value.name,
                    title: value.title,
                    sidebarMeta: {
                        icon: value.icon,
                        order: value.order,
                    },
                });
            } else {
                $stateProvider.state(value.name, {
                    url: '/' + value.level > 0 ? value.name.split('.')[1] : value.name,
                    template: '<ui-view></ui-view>',
                    abstract: true,
                    mark: value.name,
                    title: value.title,
                    sidebarMeta: {
                        icon: value.icon,
                        order: value.order,
                    },
                });
                for (var i = 0; i < value.subMenu.length; i++) {
                    $stateProvider.state(value.subMenu[i].name, {
                        url: '/' + value.subMenu[i].level > 0 ? value.subMenu[i].name.split('.')[1] : value.subMenu[i].name,
                        templateUrl: (value.subMenu[i].level > 0 ? value.subMenu[i].name.split('.')[0] + "/" + value.subMenu[i].name.split('.')[1] : value.subMenu[i].name) + '.html',
                        mark: value.subMenu[i].name,
                        title: value.subMenu[i].title,
                        sidebarMeta: {
                            icon: value.subMenu[i].icon,
                            order: value.subMenu[i].order,
                        },
                    });
                }
            }
        });
    });

})();