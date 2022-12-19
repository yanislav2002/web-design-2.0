function isCorrect() {
    let quiz1 = document.getElementById('1').value;
    if (quiz1.toLowerCase() == 'alonso') {
        document.getElementById('1').style.backgroundColor = 'lawngreen';
    } else {
        document.getElementById('1').value = 'Fernando Alonso'
        document.getElementById('1').style.backgroundColor = 'red';
    }

    let quiz2 = document.getElementById('2').value;
    if (quiz2 == 1950) {
        document.getElementById('2').style.backgroundColor = 'lawngreen';
    } else {
        document.getElementById('2').value = '1950'
        document.getElementById('2').style.backgroundColor = 'red';
    }

    let quiz3 = document.getElementById('3').value;
    if (quiz3.toLowerCase() == 'monaco') {
        document.getElementById('3').style.backgroundColor = 'lawngreen';
    } else {
        document.getElementById('3').value = 'Monaco'
        document.getElementById('3').style.backgroundColor = 'red';
    }

    let quiz4 = document.getElementById('4').value;
    if (quiz4 == 10) {
        document.getElementById('4').style.backgroundColor = 'lawngreen';
    } else {
        document.getElementById('4').value = '10'
        document.getElementById('4').style.backgroundColor = 'red';
    }
}

function champions() {
    let arrayOfChampions = ['schumacher', 'hamilton', 'fangio', 'prost', 'vettel', 'brabham', 'stewart', 'lauda', 'piquet', 'senna', 'ascari', 'hill', 'clark', 'fittipaldi', 'hakkinen', 'alonso', 'verstappen', 'farina', 'hawthorn', 'hill', 'surtees', 'hulme', 'rindt', 'hunt', 'andretti', 'scheckter', 'jones', 'rosberg', 'mansell', 'villeneuve', 'raikkonen', 'button']
    let quiz = document.getElementById('5').value;
    let splitQuiz = quiz.split(' ');
    let counter = 0;
    for (const champs of splitQuiz) {
        if(arrayOfChampions.includes(champs.toLowerCase())){
            counter++;
        }
    }
    if(counter >= 3){
        document.getElementById('5').style.backgroundColor = 'lawngreen';
    } else {
        document.getElementById('5').style.backgroundColor = 'red';
    }
}