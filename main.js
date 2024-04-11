document.getElementById('button').addEventListener('click', function() {
    let circle=document.createElement('div')
    circle.className='circle';

    let randomColor='#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor=randomColor;
    circle.style.height='50px'
    circle.style.width='50px'


    const box=document.getElementById("box");
    let diameter= Math.floor(Math.random()*100)+50;
    var x = Math.random() * (box.clientWidth - diameter);
    var y = Math.random() * (box.clientHeight - diameter);
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    box.appendChild(circle);

})









// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }