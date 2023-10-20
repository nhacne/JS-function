function updateGreeting () {

    const time1 = document.getElementById('time0');
    const currentTime = new Date ();
    const time2 = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2,'0')}`;
    const currentHour = currentTime.getHours();
    const secondsElement = document.querySelector('.seconds span');

    time1.textContent = time2; 

    let greeting;
    let className;

    if (currentHour <  12){
       greeting = 'chào buổi sáng ';
       className = 'Good Morning';
    }else if (currentHour < 18) {
       greeting = 'chào buổi chiều';
       className = 'Good Afternoon';
    }else {
       greeting = 'chào buổi tối';
       className = 'Good Evening';
    }
    const hello = document.getElementById('hi');
    hello.textContent = className;

secondsElement.textContent = currentTime.getSeconds ();
}
setInterval(updateGreeting,1000);
updateGreeting();

function changeColor (){
    const textElement = document.getElementById('kitchen');
    //Lấy ra màu sắc hiện tại cho phần tử
    const currentColor = textElement.style.color;

    if(currentColor === 'blue') {
        textElement.style.color = 'red';
        textElement.textContent = 'Văn bản màu đỏ rồi sẽ thay màu';

    }
}

// Gọi hàm thay màu mỗi giây
setInterval(changeColor,1000);
