window.setTimeout( () => alert("Time's Up!"), 3000);

function chant(){ console.log('Beetlejuice'); }
// Now we can set up the interval and assign it to a variable:

const summon = window.setInterval(chant,1000);
// << 6
console.log('you will need this to stop the Beetlejuice chant... window.clearInterval(summon); ');

// using this. incorrectly
const person = {
    name: 'Superman',
    introduce() { 
        console.log(`Hi, I'm ${this.name}`); // change to person.name and the console log will be correct
    }
};
                
setTimeout(person.introduce, 50);
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('display');
}

document.querySelector('#navigation').addEventListener('click', toggleMenu);

function sendAlert() {
    alert("This is an alert() method!");
}

function scrollBottom() {
    window.scrollTo(0,5000);
}

function scrollBack() {
    window.scrollTo(0,50);
}