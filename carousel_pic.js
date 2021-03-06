//获得数据
var list=document.getElementById('list');
var goToNext=document.getElementById('next');
var goToPre=document.getElementById('prev');
var buttons=document.getElementById('buttons').getElementsByTagName('span');
var index=1;
//为buttons添加属性index
function addIndex(){
    for(var j=0;j<buttons.length;j++){
        buttons[j].setAttribute('index',j+'1');
    }
}
//点击向左向右图标 图片切换
function animate(offset) {
    var newLeft=parseInt(list.style.left)+offset;
    //当在最后一张图向右滚动和在第一张图向左滚动时,辅助图用来做过渡,为了不给用户留下空白时间.
    if(newLeft<-3000){
        newLeft=-600;
    }
    if(newLeft>600){
        newLeft=-3000;
    }
    list.style.left=newLeft+'px';
}
goToPre.onclick=function(){
    addIndex();
    index -=1;
    if(index<1){
        index=5;
    }
    animate(600);
    buttonChange();
};
goToNext.onclick=function(){
    addIndex();
    index +=1;
    if(index>5){
        index=1;
    }
    animate(-600);
    buttonChange();
};
//五个圆点颜色的切换
function buttonChange(){
    addIndex();
    for(var i=0;i<buttons.length;i++){
        if(buttons[i].className==='on'){
            buttons[i].className=' ';
        }
    }
    buttons[index-1].className='on';
}
//图片自动播放
function autoShow(){
   setInterval(function () {
         goToNext.onclick();
    },2500);
}
 autoShow();
//点击某个圆点,跳转至相应的图片
for(var i=0;i<buttons.length;i++){
    (function (i) {
            addIndex();
            buttons[i].onclick=function(){
            var clickIndex=parseInt(this.getAttribute('index'));
            var offset=-600*(clickIndex-index);
            animate(offset);
            index=clickIndex;
            buttonChange();
            console.log(list.style.left);
        };
    })(i)
}