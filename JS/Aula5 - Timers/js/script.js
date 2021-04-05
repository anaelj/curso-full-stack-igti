window.addEventListener('load', function (){
    const timer = document.querySelector('#timer');
    timer.textContent = '1';
    let count = 0;

    const interval = this.setInterval(()=> {
        timer.textContent = ++count;

        if (count === 10){
            this.clearInterval(interval);
            return
        }            

        if (count % 5 === 0){
            setTimeout(() => {
               timer.textContent = count + ',5'; 
            }, 500);
        }
    }, 1000)


})