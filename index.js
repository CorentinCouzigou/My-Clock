clock();

function clock() {
    const date = new Date();
    const hours =((date.getHours() + 11)%12 +1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours*30;
    const minute = minutes*6;
    const second = seconds*6;

    console.log (date);
    console.log(hours);
    console.log(minutes);

    // document.querySelector('.heure').style.transform = `rotate(${hour-90}deg)`;
    // document.querySelector('.minute').style.transform = `rotate(${minute-90}deg)`;
    // document.querySelector('.seconde').style.transform = `rotate(${second-90}deg)`;

    // setInterval(clock,1000);


}