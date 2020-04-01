var input = 1000; //지폐

var coin = [10, 50, 100, 500]; //동전

var x = 1; //조합 수
var y = 1;

var a = input / coin[0];

for(var i = 1 ; i< coin.length ; i++){
    
    var b = a / (coin[i] / coin[i-1]);
    x = x + b;
    a = b;
}

console.log(x);

/// ?????????????????? 정답이 20가지?? 내 생각이 잘못된듯

const reducer = (accumulator, currentValue) => accumulator + currentValue;

var k = input / coin[0];
var arr = new Array(k);
arr.fill(coin[0]);
console.log('조합 ' + y + ' : [' + arr + ']', ' 요소 개수 = ' + arr.length + ' 요소 합계 = ' + arr.reduce(reducer));

for(var i = 0; i < (coin.length-1) ; i++){
    for(var p = 0 ; p < arr.length ; p++){
        arr.splice(p, coin[i+1]/coin[i], coin[i+1]);
        y++;
        console.log('조합 ' + y + ' : [' + arr + ']', ' 요소 개수 = ' + arr.length + ' 요소 합계 = ' + arr.reduce(reducer));
    }
}


//reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
