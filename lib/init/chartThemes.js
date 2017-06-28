//coding by JinXiongfei
__alarmLevels=[
            {"levelColor":"#999999","levelID":-1,"levelName":"未知","levelSound":"","remark":""},
            {"levelColor":"#39c8f1","levelID":0,"levelName":"正常","levelSound":"","remark":""},
            {"levelColor":"#d5e920","levelID":1,"levelName":"轻微","levelSound":"","remark":""},
            {"levelColor":"#f0d438","levelID":2,"levelName":"警告","levelSound":"","remark":""},
            {"levelColor":"#fda128","levelID":3,"levelName":"次要","levelSound":"","remark":""},
            {"levelColor":"#fc3a47","levelID":4,"levelName":"主要","levelSound":"","remark":""},
            {"levelColor":"#ba1621","levelID":5,"levelName":"严重","levelSound":"","remark":""},
            {"levelColor":"#8b3826","levelID":-3,"levelName":"未确认","levelSound":"","remark":""},
            {"levelColor":"#1f7756","levelID":-2,"levelName":"已确认","levelSound":"","remark":""},
        ];
var __amAvailColors={"ua":"#f3bf6d","us":"#eaebd9","a":"#b5da69","pa":"#faffba","e":"#f87745"};   

var stars = {
    style:"试验",
    pallet:"星辰",
    bgTone:"#000",
    colorTable:{
        bg:["111111","444444"],     //指定最亮和最暗两种颜色，求出渐变。
        line:["16414a","61b3bf"],      //指定中间色，通过明暗梯度，求出其它颜色。
        text:"83a8b1(0.5)",      //只给定一个颜色，认为是最亮（5级）颜色，向bgTone渐变算出其它颜色。
        chart:['f14343','fda128','f0d438','75ffda','23b8dd','66ade9','a49ef0','ff55b5']      //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};

var galaxy = {
    style:"试验",
    pallet:"银河",
    bgTone:"#000",
    colorTable:{
        bg:["111111","444444"],     //指定最亮和最暗两种颜色，求出渐变。
        line:["093971","19385c"],      //指定中间色，通过明暗梯度，求出其它颜色。
        text:"6387bf(0.5)",      //只给定一个颜色，认为是最亮（5级）颜色，向bgTone渐变算出其它颜色。
        chart:['f14343','fda128','f0d438','75ffda','23b8dd','66ade9','a49ef0','ff55b5']      //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};

var graydark = {
    style:"试验",
    pallet:"深灰",
    bgTone:"#333",
    colorTable:{
        //jinxfei 20160908 增强颜色定义和渐变算法
        //之前，如果bg,line和text定义一个颜色的时候，都是跟bgTone之间去做渐变，
        //现在支持：如果bg,line,text定义的颜色只有两个的话，则使用者两个颜色码计算渐变
        //还支持：如果一个颜色定义为：#666(-0.2,+0.1)，则将颜色码当作中间值，通过提亮和变暗算出其它值(+代表变亮的梯度，-代表变暗的梯度，通常取值在0.1-1之间）。
        //如果两个方向梯度一致，也可以简写为：#666(0.2)
        bg:["111111","444444"],     //指定最亮和最暗两种颜色，求出渐变。
        line:"666(0.5)",      //指定中间色，通过明暗梯度，求出其它颜色。
        text:"999(0.5)",      //只给定一个颜色，认为是最亮（5级）颜色，向bgTone渐变算出其它颜色。
        chart:['f14343','fda128','f0d438','75ffda','23b8dd','66ade9','a49ef0','ff55b5']      //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};
var black = {
    style:"试验",
    pallet:"黑",
    bgTone:"#000",
    colorTable:{
        bg:["111111","444444"],     //指定最亮和最暗两种颜色，求出渐变。
        line:"555(0.5)",      //指定中间色，通过明暗梯度，求出其它颜色。
        text:"888(0.5)",      //只给定一个颜色，认为是最亮（5级）颜色，向bgTone渐变算出其它颜色。
        chart:['f14343','fda128','f0d438','75ffda','23b8dd','66ade9','a49ef0','ff55b5']      //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};
var white = {
    style:"试验",
    pallet:"白",
    bgTone:"#ffffff",
    colorTable:{
        bg:["#f0f0f0","#e0e0e0","#d0d0d0","#c0c0c0","#b0b0b0"],     //显式指定五种背景色。
        line:["ddd","999"],       //显式指定五种边线色。
        text:"666(0.5)",       //显式指定五种文字色。
        chart:['f14343','23b8dd','66ade9','a49ef0','ff55b5','fda128','f0d438','75ffda']       //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};
var ocean={
    style:"试验",
    pallet:"蓝",
    bgTone:"193e67",
    colorTable:{
        bg:"275381",       //基于这个给定背景色计算出五种亮度的背景色。
        line:["264a70","0e2b49"],      //基于这个给定线条颜色计算出五种亮度的线条色。
        text:"bad2eb(0.5)",     //基于这个给定的文字颜色计算出五种亮度的文字色。
        chart:['f14343','23b8dd','fda128','f0d438','75ffda','66ade9','a49ef0','ff55b5']       //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};
var green={
    style:"试验",
    pallet:"绿",
    bgTone:"#12353b",
    colorTable:{
        bg:"#306748",       //基于这个给定背景色计算出五种亮度的背景色。
        line:"32ad7e",      //基于这个给定线条颜色计算出五种亮度的线条色。
        text:"#e9fdff",     //基于这个给定的文字颜色计算出五种亮度的文字色。
        chart:['#009900','#00ff00','#00ff99']       //这里可以给定2种以上12种以下的颜色，由系统补全为12种渐变色
    }
};
var judgeTheme=function(){
    
    if($("html").hasClass("theme-future-stars")){
        aniSwithc();
        chartTheme.dashBoardObj.theme.def=stars;
    }else if($("html").hasClass("theme-future-galaxy")){
        aniSwithc();
        chartTheme.dashBoardObj.theme.def=galaxy;
    }else if($("html").hasClass("theme-metro-black")){
        chartTheme.dashBoardObj.theme.def=black;
    }else if($("html").hasClass("theme-metro-graydark")){
        chartTheme.dashBoardObj.theme.def=graydark;
    }else if($("html").hasClass("theme-metro-ocean")){
        chartTheme.dashBoardObj.theme.def=ocean;
    }else if($("html").hasClass("theme-metro-whitecyan")||$("html").hasClass("theme-metro-whiteblue")){
        chartTheme.dashBoardObj.theme.def=white;
    }else{
        chartTheme.dashBoardObj.theme.def=white;
    }
    if($("html").hasClass("theme-future-stars")==false&&$("html").hasClass("theme-future-galaxy")==false){
        clearCanvas();
    }
}

var chartTheme={
    dashBoardObj:{
        theme:{
            def:white,
            getBGColor:function(level){//level可以是1到5的数字，也可以是vlow,low,med,high,vhigh。一一对应，如果是这些值之外的，则默认取3，也就是med。
                level=this._formatLevel(level);
                return this._getColor(this.def.colorTable.bg,level,5);
            },
            getLineColor:function(level){
                level=this._formatLevel(level);
                return this._getColor(this.def.colorTable.line,level,5);
            },
            getTextColor:function(level){                           
                level=this._formatLevel(level);
                return this._getColor(this.def.colorTable.text,level, 5, 6);
            },
            getChartColor:function(index){
                if (index>12){
                    index=12;
                }else if (index<1){
                    index=1;
                }
                var colorDef=this.def.colorTable.chart;
                if (typeof colorDef==="string"){    //字符串模式下，也支持想bgTone过度和中间色亮暗过度
                    if (colorDef.indexOf("(")!=-1){
                        return this._calcColorByStep(colorDef,index, 12).hex();     
                    }else{  //向bgTone渐变
                        var scale=chroma.scale([this.def.bgTone,colorDef]);
                        return scale((index+3)/15).hex();//为防止太靠近背景色，这里分段多一些，且从第二个颜色开始
                    }
                }else{
                    if (colorDef>=12){
                        return colorDef[index];
                    }else{
                        var scale=chroma.scale(colorDef);
                        return scale((index-1)/11).hex();
                    }
                }
            },
            _getColor:function(colorDef, level, required, total){
                if (!total){
                    total=required;//默认模式下，bgTone不能作为一个有效颜色，所以渐变分段取required，舍弃最低一个颜色码（=bgTone）
                }
                total=total*1.0;
                if (!(typeof colorDef==="string") && colorDef.length>=required){//颜色定义是数组，且长度至少为required，则直接取颜色码
                    return chroma(colorDef[level-1]).hex();
                }else{
                    var color1=this.def.bgTone;
                    var color2=colorDef;
                    if (typeof colorDef==="string" && colorDef.indexOf("(")!=-1){//是字符串，且包含()，取扩展区间进行渐变
                        return this._calcColorByStep(colorDef,level, required).hex();                                   
                    }else if (!(typeof colorDef==="string")){       //不是字符串，那就必定是数组，且不足五个的时候，取前两个颜色码渐变
                        total=required-1;
                        color1=colorDef[0];
                        color2=colorDef[1];
                    }
                    var scale=chroma.scale([color1,color2]);
                    return scale((level+total-5)/total).hex();
                }
                
            },
            _calcColorByStep: function(colorDef, level, steps){//根据 666(+0.5,-0.3)这样的定义计算梯度颜色, level是当前要取的序号，steps是总阶梯数
                var segs=colorDef.replace(")","").split(/\(|\)|,/);
                var midColor=chroma(segs[0]);
                var dstep=segs[1]*1.0;//先默认设置变暗阶梯为第一个参数
                var bstep=dstep;        //先默认亮和暗梯度一致
                if (segs.length>2){
                    bstep=segs[2]*1.0;//如果设置了多个梯度，则把变亮阶梯默认设置为第二个参数                                  
                }
                if (dstep>0){   //如果第一个值大于零，就认为第一个是变亮，第二个是变暗，交换一下
                    var tmp=dstep;dstep=bstep;bstep=tmp;                                        
                }
                //确保两个都是正数。
                bstep=Math.abs(bstep);
                dstep=Math.abs(dstep);
                
                var resultColor=midColor;
                var midNum=Math.ceil(steps/2.0);
                if (level<midNum){
                    resultColor=midColor.darken((midNum-level)*dstep);
                }else if (level>midNum){
                    resultColor=midColor.brighten((level-midNum)*bstep);
                }
                return resultColor;
            },
            _formatLevel: function(level){  //标准化获取颜色的指定级别
                if (level==null || level==undefined){
                    level=3;
                }
                if (level==1 || 'vlow'==level){
                    level=1;
                }else if (level==2 || 'low'==level){
                    level=2;
                }else if (level==3 || 'med'==level){
                    level=3;
                }else if (level==4 || 'high'==level){
                    level=4;
                }else if (level==5 || 'vhigh'==level){
                    level=5;
                }else{
                    level=3;
                }
                return level;
            }
        }
    }
};