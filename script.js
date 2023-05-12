function updateClock(){
    const currentDate = new Date();
    const secs = currentDate.getSeconds()
    const mins = currentDate.getMinutes()
    const hours = currentDate.getHours()

    console.log('current time:', `${hours}:${mins}:${secs}`)
    const secHandRotate = document.getElementById('seconds').setAttribute('transform', `rotate(${secs * (360/60)}, 244, 251)`)
}

setInterval(()=>{
    updateClock()
},1000)

// runUpdate()