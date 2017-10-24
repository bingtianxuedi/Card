/*
* @Author: admin
* @Date:   2017-10-23 17:07:35
* @Last Modified by:   admin
* @Last Modified time: 2017-10-24 10:06:55
*/
    //响应式js样式
    (function (doc, win) {
                    var docEl = doc.documentElement,
                            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                            recalc = function () {
                                var clientWidth = docEl.clientWidth;
                                if (!clientWidth) return;
                                if(clientWidth>=640){
                                    docEl.style.fontSize = '100px';
                                }else{
                                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                                }
                            };
                    if (!doc.addEventListener) return;
                    win.addEventListener(resizeEvt, recalc, false);
                    doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);  


   
 new Swiper(".swiper-container",{
	direction : 'vertical',
	loop:true,
    // initialSlide :1,// 
    // 回调函数，swiper从一个slide过渡到另一个slide结束时执行。
    onSlideChangeEnd: function(swiper){
        var slideArr=swiper.slides;//获取当前有多少活动快类数组
        //返回当前活动块(激活块)的索引。loop模式下注意该值会被加上复制的slide数
        var curIn=swiper.activeIndex;
        // console.log(curIn);
        var totle=slideArr.length;
         // console.log(totle);

        //计算ID是？
        var tagId="page";
        switch(curIn){
            case 0:
                tagId+=totle-2;
                break;
            case (totle-1):
                tagId+=1;
                break;
            default:
                tagId+=curIn;
        }
        // 给当前活动块添加Id，还要把其余的移除
        [].forEach.call(slideArr,function(item, index){
           if(curIn===index){
                item.id=tagId;
                return;
           }
            item.id=null;
        });
        
    }
}); 


~function(){
    var oAudioBox=document.getElementById("audiob");
     var oAudio=document.getElementById("audiop");

     oAudioBox.addEventListener('click',function(){
        if(oAudio.paused){
           oAudio.play();
           oAudioBox.className='audio move';
           return;
        }
        oAudio.pause();
        oAudioBox.className='audio';
     },false);

    function contralAudio(){
       oAudio.volume=0.5;
       oAudio.play();
       oAudio.addEventListener('canplay',function(){
          oAudioBox.style.display='block';
          oAudioBox.className='audio move';
       },false)
    };

    window.setTimeout(contralAudio,1000);

 }();