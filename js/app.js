var app = angular.module('ngApp', [
    'yaru22.md'
]);

app.controller('cards', function($scope) {

    $scope.search = {
        'title' : '',
        'tags' : ''
    };

    $scope.$watch("search.title", function () {
        $scope.search.tags = $scope.search.title;
        console.log($scope.search);
    });

    $scope.cards = [
        {
            title : 'Sunflower',
            file : 'keyboard-shortcuts/sunflower.md',
            tags : 'ubuntu, filemanagers'
        },
        {
            title : 'Composer',
            file : 'keyboard-shortcuts/composer.md',
            tags : 'php'
        },
        {
            title : 'Vim',
            file : 'keyboard-shortcuts/vim.md',
            tags : 'shell, editors'
        },
        {
            title : 'Bash tips and tricks',
            file : 'keyboard-shortcuts/bash-tips.md',
            tags : 'bash, console, ubuntu, linux'
        },
        {
            title : 'Grep',
            file : 'keyboard-shortcuts/grep.md',
            tags : 'bash, ubuntu, linux'
        }
    ];

    console.log($scope.cards);
});