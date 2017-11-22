//获得数据
var list=document.getElementById('list');
var goToNext=document.getElementById('next');
var goToPre=document.getElementById('prev');
var buttons=document.getElementById('buttons').getElementsByTagName('span');
var index=1;
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
    index -=1;
    if(index<1){
        index=5;
    }
    animate(600);
    buttonChange();
};
goToNext.onclick=function(){
    index +=1;
    if(index>5){
        index=1;
    }
    animate(-600);
    buttonChange();
};
//五个圆点颜色的切换
function buttonChange(){
    for(var i=0;i<buttons.length;i++){
        if(buttons[i].className==='on'){
            buttons[i].className=' ';
        }
    }
    buttons[index-1].className='on';
}