Vue.createApp({
data() {
    return{
        goals: [],
        enteredValue: ''
    };
},
    methods:{
        addGoal(){
            if(this.enteredValue !== ''){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
            }else{
                window.alert("pusto");
            }
        }
    }
}).mount('#app');

// const input = document.querySelector('#goal');
// const button = document.querySelector('button');
// const ul = document.querySelector('ul');

// function addGoal(){
//     const endteredText = input.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = endteredText;
//     ul.appendChild(listItem);
//     input.value = '';
// }

// button.addEventListener("click", addGoal)



