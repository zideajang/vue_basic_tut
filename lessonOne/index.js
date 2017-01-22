Vue.filter('depart',function(value){
    return value + " 翻译部"
});

var app = new Vue({
    el:'#app',
    data:{
        message:"",
        username:"",
        colorstyle:"",
        attackcount:0,
        sMessage:"",
        show:true,
        employeelist:[
            { name:'Matthew', age: 28, salary:3000},
            { name:'Tina', age: 26, salary:2800},
            { name:'Jerry', age: 30, salary:3200}
        ],
        projectName:"",
        projects:[
            {
                name:"SAP"
            }
        ]
    },
    methods:{
        attack(){
            this.attackcount++;
            // this.magic = -this.attackcount * 2;
        },
        sendMsg:function(){
            this.sMessage = this.username + " 发送: " + this.message;       
            console.log("send a message");
        },
        createProject(){
            this.projects.push({
                name:this.projectName
            })
        }
    },
    computed:{
        magic:function(){
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