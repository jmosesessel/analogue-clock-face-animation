function updateClock(){
    const currentDate = new Date();
    const secs = currentDate.getSeconds()
    const mins = currentDate.getMinutes()
    const hours = currentDate.getHours()

    console.log('current time:', `${hours}:${mins}:${secs}`)
}

setInterval(()=>{
    //updateClock()
},1000)

// runUpdate()