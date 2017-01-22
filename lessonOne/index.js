var app = new Vue({
    el:'#app',
    data:{
        username:"",
        colorstyle:"",
        attackcount:0,
        magic:0,
        show:true,
        employeelist:[
            { name:'Matthew', age: 28},
            { name:'Tina', age: 26},
            { name:'Jerry', age: 30}
        ]
    },
    methods:{
        attack(){
            this.attackcount++;
            // this.magic = -this.attackcount * 2;
        }
    },
    computed:{
        magic(){
            return -( this.attackcount * 0.5 );
        }
    }

})