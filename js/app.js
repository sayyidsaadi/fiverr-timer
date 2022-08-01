let timer_form = document.getElementById('timer_form');
let timer_result = document.getElementById('timer_result');
let per = document.getElementById('per');

let timerIntrval;

timer_form.onsubmit = (e)=>{
    e.preventDefault();

    clearInterval(timerIntrval)


    //Get Form Value
    let frm_val = new FormData(e.target);
    let {date, time} = Object.fromEntries(frm_val.entries());
    
     // Get Time
     let stat_time = Date.now();
     let end_time = new Date(date +' '+time);
    
     timerIntrval = setInterval(()=>{

        counterFuntion(date, time, timer_result, timerIntrval)
        per.innerHTML = loadingFuntion(stat_time, end_time)
            
    },1000)
    
    


}