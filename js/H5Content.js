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


var h5Data = [{
   t1: '<div class="element-box-contents" style="width: 100%; height: 100%"><div id="1816415382" ctype="7" class="element" style="padding: 5px; width: 100%; height: 100%; font-family: zcool_weiyi; font-size: 22px; writing-mode: horizontal-tb; cursor: default; min-height: inherit; letter-spacing: 0em;"><span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">杜绝舌尖上的浪费</span></div></div>',
   t2: '<div id="8494762973" ctype="7" class="element" style="padding: 5px; width: 100%; height: 100%; font-family: &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; writing-mode: horizontal-tb; cursor: default; min-height: inherit; letter-spacing: 0em;"><span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">从你我做起</span></div>',
}, {
    t1: '响应国家号召',
    t2: '<div id="1757915968" ctype="7" class="element" style="padding: 5px; width: 100%; height: 100%; font-family: &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; writing-mode: horizontal-tb; cursor: default; min-height: inherit; letter-spacing: 0em;"><span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;中共中央总书记、国家主席、中央军委主席习近平近日对制止餐饮浪费行为作出重要指示。他指出，餐饮浪费现象，触目惊心、令人痛心！尽管我国粮食生产连年丰收，对粮食安全还是始终要有危机意识，今年全球新冠肺炎疫情所带来的影响更是给我们敲响了警钟。（人民网北京8月13日电）</span></div>',
    t3: '拒绝浪费从你我做起'
}, {
    t1: '节约从你我做起',
    t2: '<div id="3499808771" ctype="7" class="element" style="padding: 5px; width: 100%; height: 100%; font-family: hanyi_qh95; font-size: 26px; writing-mode: horizontal-tb; cursor: default; min-height: inherit; letter-spacing: 0em;"><span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">我承诺</span></div>',
    t3: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">①&nbsp;按需取餐，拒绝浪费；<br>②&nbsp;粒粒不易，不倒不弃；<br>③&nbsp;人走桌净，剩菜打包；<br>④ 拒绝铺张，不讲排场；<br>⑤&nbsp;与身边亲友互相监督，</span>',
    t4: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">即刻行动<br>将“光盘”进行到底！</span>',
}, {
    t1: '节约粮食 传统美德',
    t2: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;节约粮食，是我们每个公民应尽的义务，而不是说你的生活好了，你浪费得起就可以浪费。浪费是一种可耻的行为。只要存有节约的意识，其实做起来很简单:吃饭时吃多少盛多少，不扔剩饭菜;在餐馆用餐时点菜要适量，而不应该摆阔气，乱点一通。记住:节约粮食从我做起！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浪费可耻，从某种意义上说简直是“犯罪”。凡事贵在坚持，节约要从点滴做起，尤其需要坚持。</span>',
}, {
    t1: '杜绝舌尖上的浪费',
    t2: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">“面对疫情考验，我国及时采取了全面、严格的防控措施，有效遏制了疫情蔓延。疫情对我国农业生产带来的挑战为我们抓好粮食生产、树立爱粮节粮观念再次敲响了警钟。面对社会中存在的在餐桌上铺张奢侈行为屡禁不止的现象，我们应当从源头上着手，建立起不敢、不能、不想浪费的长效机制，包括建立节俭用餐激励机制、建立铺张浪费惩戒机制、建立节俭消费监督机制等，以刚性的制度约束狠刹浪费之风，把公款浪费、‘剩宴’等关进制度的笼子里，彻底杜绝‘舌尖上的浪费’。<br></span>',
}, {
    t1: '现状严峻 发人深省',
    t2: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;事实摆在眼前：我国人口己超过13亿，每年的净增长是1200万人；人均耕地面积1.2亩，是世界人均值1/4；耕地面积正以每年30多万亩的速度减少；全国40%的城市人口消耗的粮食依靠进口。在1981－1995年间，全国共减少了耕地8100万亩，因此减少粮食500亿斤。而且这个减少速度仍然在不断加快。乱占耕地、挖沙、土地质量下降、荒漠化等种种现象在蚕食着耕地。现实绝对不容乐观!!<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联合国把每年的10月16日定为世界粮食日，党中央、国务院决定把世界粮食日的那一周定为节粮周。<br>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;今天，我们知道了国情，明确了爱惜粮食、节约粮食的特殊意义，我们每个人都要立即行动，要拿出实际行动，为党为国家分忧，把爱惜粮食、节约粮食的活动扎扎实实地开展下去。<br></span>'
}, {
    t1: '节约粮食 行动建议',
    t2: '<span style="display: block;margin-top: 0px;margin-bottom: 0px;color: inherit;-ms-word-wrap: break-word;word-wrap: break-word; -webkit-user-select: auto">1、珍惜粮食,适量定餐,避免剩餐,减少浪费。<br>2、不攀比,以节约为荣,浪费为耻。<br>3、吃饭时吃多少盛多少,不扔剩饭剩菜。<br>4、看到浪费现象勇敢地起来制止,尽力减少浪费。<br>5、做节约宣传员,向家人,亲戚,朋友宣传浪费的可怕后果。<br>6、不偏食，不挑食。<br>7、到饭店吃饭时，点饭点菜不浪费，若有剩余的要尽量带回家。<br>8、积极监督身边的亲人和朋友，及时制止浪费粮食的现象。</span>'
}, {
    t1: '节约粮食从一粒种子开始',
    t2: '快来测测你的前世是一粒什么种子吧！',
}, {
    t1: '关注我们',
    t2: ''
}]

/*主要逻辑*/
$(function(){
    
    var h5 = new H5();

    h5.whenAddPage = function(){
        this.addComponent('top-bg', {
            center: true,
            bg: '../assets/top-bg.webp',
            css: {
                opacity: 0,
                left: 0,
                top: -21,
                width: '130px',
                height: '134.5px',
                marginLeft: '-65px',
                zIndex: 999
            },
            animateIn: {opacity: 1, top: '-21px'},
            animateOut: {opacity: 0, top: '-43px'},
            delay: 500
        });
        this.addComponent('bottom-bg', {
            center: true,
            bg: '../assets/bottom.webp',
            css: {
                opacity: 0,
                left: 0,
                bottom: -20,
                width: '100%',
                height: '33px',
                zIndex: 999
            },
            animateIn: {opacity: 1, bottom: '-1px'},
            animateOut: {opacity: 0, bottom: '-3px'},
            delay: 500
        });
    }

    h5
    .addPage()
    .addPage()
    .addPage()
        .addComponent('wenjuan', {
            html: `<div><div class="wenjuan">
                <div class="title">
                    <p>节约粮食从一粒种子开始，快来测测你的前世是一粒什么种子吧！</p>
                </div>
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
                <div id="btn" class="btn">开始测试</div>
                </div>
            </div>

            <div class="result" id="result">
            <div id="box" class="box">
                <div id="box-item" class="box-item"></div>
                <div id="btn-cancel" class="btn btn-cancel">重新测试</div>
            </div>
            </div>`,
        })
    .loader([
        '../assets/bg.JPG',
        '../assets/bg.webp',
        '../assets/bottom.webp',
        '../assets/top-bg.webp',
        '../assets/btn.png',
        '../assets/musicIcon.png',
        '../assets/p1-1.webp',
        '../assets/p1-2.png',
        '../assets/p2.webp',
        '../assets/p4.webp',
        '../assets/p5.webp',
        '../assets/qrcode.png',
        '../assets/xiaomai.png',
        '../assets/yumi.png',
        '../assets/zhima.png',
        '../assets/lvdou.png',
        '../assets/huasheng.png',
        '../assets/dadou.png',
        ], 1);

})