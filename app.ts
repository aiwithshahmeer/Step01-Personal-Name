let personname :string = "";

personname = prompt('What is your Name?') || '';

if(personname !== null && personname !== ''){
    alert(`Hello ${personname}, would you like to learn some Python today?`)
}
else{
    alert('You have to fill Your Name !')
}