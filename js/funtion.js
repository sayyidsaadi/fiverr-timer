/**
 * Counter Funtion
 */
const counterFuntion = (date, time, timer_result, timerIntrval = null)=>{
       // Get Time time Val
       let stat_time = Date.now();
       let end_time = new Date(date +' '+time);
       let order_time = Math.floor(Math.abs(end_time.getTime() - stat_time));

       // Get Total Time
       let total_sec = Math.floor(order_time / 1000);
       let total_min = Math.floor(total_sec / 60);
       let total_hours = Math.floor(total_min / 60);
       let total_day = Math.floor(total_hours / 24);

       if(total_sec<=0){
           clearInterval(timerIntrval)
           
       }

       let hours = total_hours - (total_day * 24);
       let min = total_min - (total_day * 24 * 60) - (hours * 60);
       let sec = total_sec - (total_day * 24 * 60 * 60) - (min * 60) - ( hours * 60);
       timer_result.innerHTML=`
           <h3>${total_day} Day : ${hours} Hour : ${min} Minute :  ${sec} Sec</h3>
       `
}


/**
 * Loading Funtion
 */
const loadingFuntion=(start_time, end_time)=>{

    let diff_time = end_time - start_time;
    let time_change = end_time - Date.now();
    return Math.floor((100 * time_change)/diff_time);
    
}