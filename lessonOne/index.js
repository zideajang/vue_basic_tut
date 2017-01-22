var app = new Vue({
    el:'#app',
    data:{
        username:"",
        colorstyle:"",
        attackcount:0,
        magic:0
    },
    methods:{
        attack(){
            this.attackcount++;
            this.magic = -this.attackcount * 2;
        }
    }
})