'use strict';
{                                                               //
    $('.hand').on('click',function(event){                      //ボタン押したときにイベント起こる
        event.preventDefault();
        const enemyHand = Math.floor(Math.random() * 3);        //0~2のランダムな数を生成してenemyHandに代入
        console.log(enemyHand);

        const myHand = Number(event.currentTarget.value);       //各ボタンに割り振ったvalueを取得して数値に変換
        console.log(myHand);                                                                        
        //setInterval mean 〇秒おきにこの処理を行う(今回は一回した後にクリアしてる)※今回はなぜかalertが先に出た為遅らせた
        if(enemyHand === 0){
            $('#bigimg').attr('src','images/janken_gu.png')
            if(myHand === 2){
                const intervalId = setInterval(function(){      
                    alert('勝ち！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else if(myHand === 1){
                const intervalId = setInterval(function(){      
                    alert('負け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else{
                const intervalId = setInterval(function(){      
                    alert('引き分け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }
        }else if(enemyHand === 1){
            $('#bigimg').attr('src','images/janken_choki.png')
            if(myHand === 0){
                const intervalId = setInterval(function(){      
                    alert('勝ち！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else if(myHand === 2){
                const intervalId = setInterval(function(){      
                    alert('負け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else{
                const intervalId = setInterval(function(){      
                    alert('引き分け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }
        }else if(enemyHand === 2){
            $('#bigimg').attr('src','images/janken_pa.png')
            if(myHand === 1){
                const intervalId = setInterval(function(){      
                    alert('勝ち！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else if(myHand === 0){
                const intervalId = setInterval(function(){      
                    alert('負け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }else{
                const intervalId = setInterval(function(){      
                    alert('引き分け！');
                    $('#bigimg').attr('src','images/mark_question.png')
                    clearInterval(intervalId);
                },200);
            }
        }
    })
}
