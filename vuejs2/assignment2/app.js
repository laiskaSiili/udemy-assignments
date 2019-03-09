new Vue({
        el: '#exercise',
        data: {
            value: 'test'
        },
        methods: {
            showAlert: function() {
                alert('I am an alert!');
            },
            keydownPressed: function(event) {
                this.value = event.target.value;
            }
        }
    });