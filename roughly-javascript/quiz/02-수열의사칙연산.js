var op = '+-*/';
var numTest = '1234';
var rvsTest = '4321';

for(var a=1000; a<5000; a++)
{
    var num = a.toString();
    var rvs = num.split('').reverse().join('');

    for(var i=0; i<4; i++){
    
        //console.log(op[i]);
    
        //연산자 1개 계산
        for(var x=1; x<=3; x++){
            var fom = num.substr(0,x).concat(op[i], num.substr(x));
            //console.log(fom);
    
            var res = eval(fom).toString();
            //console.log(res);
    
            if(rvs === res)
            {
                console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
                break;
            }
        }
    
        for(var k=0; k<4; k++){
    
            //console.log(op[i] + op[k]);
    
            //연산자 2개 계산
            for(var x=1; x<=2; x++){
                var fom = num.substr(0,1).concat(op[i], num.substr(1,x), op[k], num.substr(x+1));
                //console.log(fom);
        
                var res = eval(fom).toString();
                //console.log(res);
    
                if(rvs === res)
                {
                    console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
                    break;
                }
            }
    
            for(var m=0; m<4; m++){
                
                //console.log(op[i] + op[k] + op[m]);
    
                //연산자 3개 계산
                var fom = num.substr(0,1).concat(op[i], num.substr(1,1), op[k], num.substr(2,1), op[m], num.substr(3));
                //console.log(fom);
    
                var res = eval(fom).toString();
                //console.log(res);
    
                if(rvs === res)
                {
                    console.log('num = ' + num + ' res = ' + res + ' fom = ' + fom);
                    break;
                }
            }
        }
    }

}


var a = [
    '1a234',
    '12a34',
    '123a4',
    '1a2b34',
    '1a23b4',
    '1a2b3c4',
];


1#234 //1인덱스
12#34 //2
123#4 //3

1#2#34 //1,3
1#23#4 //1,4

1#2#3#4 //1,3,5


1234