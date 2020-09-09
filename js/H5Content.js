/*加载 H5组件 相关资源*/
var html = [];
var res = [
    'Base',
    // 'Audio',
    // 'Bar','Point','Polyline',
    // 'Radar','Pie','Ring',
    // 'Logo','Phone'
    ];
for(s in res){
    html.push('<script type="text/javascript" src="js/H5Component'+res[s]+'.js?t="'+ (new Date()).getTime() +'"><\/script>');
    html.push('<link rel="stylesheet" type="text/css" href="css/H5Component'+res[s]+'.css">');
}
/*加载 工具组件*/
var toolRes = [
    // 'utils'
    ];
for(s in toolRes){
    html.push('<script type="text/javascript" src="js/'+toolRes[s]+'.js?t="'+ (new Date()).getTime() +'"><\/script>');
}
document.write( html.join('') );

/*主要逻辑*/
$(function(){
    
    var h5 = new H5();

    h5
    .addPage()
        .addComponent('caption', {
            bg: '../assets/1.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/2.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/3.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/4.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/5.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/6.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/7.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/8.jpg'
        })
    .addPage()
        .addComponent('caption', {
            bg: '../assets/9.jpg'
        })
    .addPage()
        .addComponent('wenjuan', {
            html: `<div class="wenjuan"><div class="title"></div>
                <div class="gender">
                <span>性别</span>
                <div class="gender-box">
                    <div id="girl" class="active">女</div>
                    <div id="boy">男</div>
                </div>
                </div>
                <div class="name">
                <span>姓名</span>
                <input id="name" />
                </div>
                <div id="btn" class="btn">开始测试</div></div>`,
        })
    .loader([
        '../assets/1.jpg',
        '../assets/2.jpg',
        '../assets/3.jpg',
        '../assets/4.jpg',
        '../assets/5.jpg',
        '../assets/6.jpg',
        '../assets/7.jpg',
        '../assets/8.jpg',
        '../assets/9.jpg',
        ], 1);

})