new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function() {
                return this.value === 37 ? 'Done!' : 'Not done yet!';
            }
        },
        watch: {
            result: function(value) {
                var vm = this;
                setTimeout(function() { vm.value = 0 }, 5000);
            }
        }
    });