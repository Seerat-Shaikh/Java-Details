//Local got precedence over global variables
const color = 'red'; //Global

function start() {
    const message = 'hi';
    //const color = 'blue'; but if u change it it will results blue bcz global variables are accessible 
    console.log(color); //red
}

function stop() {
    const message = 'bye';
} 

start();