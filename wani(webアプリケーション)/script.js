'use strict';
{
    //はずれの数をランダムで作りthiTimeOutに代入
    const thisTimeOut = Math.floor(Math.random() * 10);
    console.log(thisTimeOut);
    //クラスtoothを押したときのイベントを作成
    $('.tooth').on('click', function (event) {
        event.preventDefault();
        let pushButton = event.currentTarget;
        let pushButtonId = event.currentTarget.id;
        let pushButtonNum = Number(pushButtonId.slice(-1));

        if (pushButtonNum !== thisTimeOut){         //セーフの時
            alert('セーフ！');
            pushButton.disabled = true;
        }else{                                      //アウトの時
            alert('アウト！')
            $('.tooth').attr('disabled', true);
        }

})
}
