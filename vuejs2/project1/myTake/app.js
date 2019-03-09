new Vue({
    el: '#app',
    data: {
        gameRunning: false,
        hpYou: 100,
        hpMonster: 100,
        gameLogs: []
    },
    computed: {

    },
    methods: {
        normalAttack: function() {
            this.attack(15, 15, 'ATTACK');
        },
        specialAttack: function() {
            this.attack(25, 15, 'SPECIAL ATTACK');
        },
        attack: function(modifierYou, modifierMonster, attackName) {
            let hitMonster = Math.floor(modifierMonster*Math.random());
            let hitYou = Math.floor(modifierYou*Math.random());
            this.hpMonster -= hitYou;
            this.hpYou -= hitMonster;
            this.gameLogs.push({
                type: 'playerLog',
                message: 'You have hit the monster with a ' + attackName + ' for ' + hitYou
            });
            this.gameLogs.push({
                type: 'monsterLog',
                message: 'The monster hit you for ' + hitMonster
            });
        },
        heal: function() {
            let healYou = Math.floor(25*Math.random());
            let hitMonster = Math.floor(15*Math.random());
            this.hpYou += healYou;
            this.hpYou -= hitMonster;
            this.gameLogs.push({
                type: 'playerLog',
                message: 'You have HEALED yourself for ' + healYou
            });
            this.gameLogs.push({
                type: 'monsterLog',
                message: 'The monster hit you for ' + hitMonster
            });
        },
        giveUp: function() {
            this.hpYou = 100;
            this.hpMonster = 100;
            this.gameRunning = !this.gameRunning;
            this.gameLogs = [];
        }
    },
    watch: {
        hpYou: function(value) {
            if (value > 100) {
                this.hpYou = 100;
            }
        }
    }
});