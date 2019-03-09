new Vue({
  el: '#exercise',
  data: {
    effectBtnLabel: 'Start effect',
    effectRunning: false,
    effectInterval: null,
    effectClass: '',
    task3Class: '',
    task5Style: '',
    task6Style: '',
    task6Width: 0
  },
  methods: {
    toggleEffects: function() {
      this.effectRunning = !this.effectRunning;
      this.effectBtnLabel = this.effectRunning ? 'Stop effect' : 'Start effect';
      if (this.effectRunning) {
        this.effectClass = 'highlight';
        var vm = this;
        this.effectInterval = setInterval(() => {
          vm.effectClass = vm.effectClass === 'highlight' ? 'shrink' : 'highlight';
        }, 1000)
      } else {
        clearInterval(this.effectInterval);
        this.effectClass = '';
      }
    },
    task3: function(event) {
      this.task3Class = event.target.value;
    },
    task5: function(event) {
      this.task5Style = event.target.value;
    },
    startProgress: function() {
      setInterval(() => { 
        this.task6Width += 5;
        this.task6Style = 'width: ' + this.task6Width + 'px;';
      }, 100);
    }
  }
});
