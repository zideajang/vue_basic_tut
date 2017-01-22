Vue.filter('depart',function(value){
    return value + " 翻译部"
});

var app = new Vue({
    el:'#app',
    data:{
        username:"",
        colorstyle:"",
        attackcount:0,
        magic:0,
        show:true,
        employeelist:[
            { name:'Matthew', age: 28, salary:3000},
            { name:'Tina', age: 26, salary:2800},
            { name:'Jerry', age: 30, salary:3200}
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
    },
    filters:{
        salaryFilter:function(value){
            if(value>3000){
                return 3000
            }
            return value;
        }  
    }

})