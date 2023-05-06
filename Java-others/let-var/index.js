function start() {
    for (var i =0; i<5; i++) {
       if (true) {
         var color = 'red';
       }
    }

    console.log(color); //red
}


function stop() {
    for (var i =0; i<5; i++) {
       if (true) {
         let color = 'red'; //ERROR
       }
    }

    console.log(color); //red
}

//Var => function-scoped
//let,const => block-scoped if using this will throw error if its not included in that function

start();
stop();