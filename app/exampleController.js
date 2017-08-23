angular
    .module('app', [])
    .controller('exampleController', exampleController);

function exampleController() {
    var vm = this;

    vm.personas = [];
    vm.new = nuevo;
    vm.store = store;
    vm.update = update;
    vm.edit = edit;
    vm.delete = destroy;

    // -------------

    function nuevo() {
        vm.is_new = true;
        vm.persona = {};
    }

    function store() {
        vm.personas.push(vm.persona);
        vm.persona = {};
    }

    function update() {
        vm.personas[vm.index] = vm.persona;
        vm.is_update = false;
        vm.is_new = true;
        vm.persona = {};
    }

    function edit(item, key) {
        vm.persona = item;
        vm.index = key;
        vm.is_new = false;
        vm.is_update = true;
    }

    function destroy(item, key) {
        vm.personas.splice(key, 1);
    }

}