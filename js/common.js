//api地址
// var pubIP = 'http://api.xjv56.com/service/';
// var pubIP = 'http://api.test.xjv56.com/service/';
var pubIP = 'http://192.168.1.80:7777/service/';
// var pubIP = 'http://192.168.1.166:7777/service/';

// var pubIP = 'http://192.168.1.34:7777/service/';
// var pubIP = 'http://192.168.1.105:7777/service/';

//导出
// var dcIP = 'http://192.168.1.80:7777/';
// var dcIP = 'http://ht.test.xjv56.com/';
// var dcIP = 'http://ht.xjv56.com/';


// 物流交易衔接的链接

var wuliuIP1 = 'http://api.test.hdlsuper.com/service/';

// var wuliuIP = 'http://wl.web.xjv56.com/';
// var wuliuIP = 'http://192.168.1.159:8080/allWuliu/';
var wuliuIP = 'http://web.test.hdlsuper.com/';
// var wuliuIP = 'http://www.test.hdlsuper.com/';
// var wuliuIP = 'http://web.hdlsuper.com/';
// var wuliuIP = 'http://www.hdlsuper.com/';
//跳回登录页
//var homeUrl = 'http://192.168.1.80:8180/';
var homeUrl = 'http://web.test.xjv56.com/';
// var homeUrl = 'http://web.xjv56.com/';
//下载地址
var downIP = 'http://file.test.xjv56.com/';
// var downIP = 'http://file.xjv56.com/';
//var downIP = 'http://192.168.1.80:8680/web-file/';
//上传地址
// var uplodImgPath = 'http://file.xjv56.com/bfile/fileUpload.htm';
var uplodImgPath = 'http://file.test.xjv56.com/bfile/fileUpload.htm';

//var uplodImgPath = 'http://192.168.1.80:8680/bfile/fileUpload.htm';

var token=localStorage.getItem("token");
//var token=sessionStorage.getItem("token");
var pageSize=1;//分页的每页个数

var companyId = null, userId = null ;
var financePhoneNumber = '';

var name = '';

var userPhone = '';

var logo = '';

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
//调用： var time1 = new Date().Format("yyyy-MM-dd");var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");


var adct = document.getElementsByTagName('title')[0].getAttribute('adct');
//登录状态失效的弹框
document.writeln("<div class=\"pop\" id=\"effect\">\n" +
    "\t<div class=\"cont\" >\n" +
    "\t\t<div class=\"cance2\" >\n" +
    "\t\t\t<span class=\"popTitle Lf\" >提示</span>\n" +
    "\t\t\t<div class=\"close Rt\" onclick=\"popEffectLogin()\" style=\"width:46px;height:48px;margin-right: -20px;margin-top: 0; background: url('img/gsxq_del.png') no-repeat ; background-size: contain;\" onclick=\"cf_popEffectClose1(this)\"></div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"deanger\"></div>\n" +
    // "\t\t<div class=\"contTitle\">您好，<span>您的登录已经过期</span>,请先<i onclick=\"popEffectLogin()\" style=\"color: #00a0e9;\">登录</i>，以便使用更多功能。</div>\n" +
    "\t\t<div class=\"contTitle\">您好，<span>您尚未登录</span>,请先<i onclick=\"popEffectLogin()\" style=\"color: #00a0e9;\">登录</i>，以便使用更多功能。</div>\n" +
    "\t\t<div class=\"popLogin\" style=\"width:130px;height:35px;line-height:35px;font-size:16px;\" id=\"popLogin\" onclick=\"popEffectLogin()\">登录</div>\n" +
    "\t</div>\n" +
    "</div>");

//登录状态失效的弹框
document.writeln("<div class=\"pop\" id=\"effect402\">\n" +
    "\t<div class=\"cont\" >\n" +
    "\t\t<div class=\"cance2\" >\n" +
    "\t\t\t<span class=\"popTitle Lf\" >提示</span>\n" +
    "\t\t\t<div class=\"close Rt\" onclick=\"popEffectLogin()\" style=\"width:46px;height:48px;margin-right: -20px;margin-top: 0; background: url('img/gsxq_del.png') no-repeat ; background-size: contain;\" onclick=\"cf_popEffectClose1(this)\"></div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"deanger\"></div>\n" +
    "\t\t<div class=\"contTitle\">您的账号已在其他设备进行登录，本设备已下线，请重新<i onclick=\"popEffectLogin()\" style=\"color: #00a0e9;\">登录</i></div>\n" +
    "\t\t<div class=\"popLogin\" style=\"width:130px;height:35px;line-height:35px;font-size:16px;\" id=\"popLogin\" onclick=\"popEffectLogin()\">登录</div>\n" +
    "\t</div>\n" +
    "</div>");

//当返回code为401时需要调用此方法
function missedLogin() {
    window.parent.$("#effect").css("display","block");
}

//当返回code为402时需要调用此方法
function missedLogin402() {
    window.parent.$("#effect402").css("display","block");
}

if (adct == '免费找货' || adct == '立即询盘' || adct=='login') {
    $('.close').css('background', 'url("../img/gsxq_del.png") no-repeat');
}

//跳回登录页
function popEffectLogin() {
	var isOld = localStorage.getItem('isOld');
	if(isOld == '0' || isOld == '1'){
        window.location.href=homeUrl+'login/login.html';
		// if(adct=="首页"){
	    //     window.location.href='./login/login.html';
		// }else{
		// 	if(location.href.indexOf('account') != -1){
		// 		parent.location.href = '../login/login.html';
		// 	}else{
		// 		window.location.href='../login/login.html';
		// 	}
		// }
	}else if(isOld == '-1'){
		if(adct=="首页"){
			if ($('#popLogin').text() == '认证') {
				window.location.href = "account/account.html";
				sessionStorage.setItem('hzf_showPage', 'flag_qyrz');
			} else {
				window.location.href='account/account.html';
			}
		}else{
			window.location.href='../account/account.html';
		}
	}
}

function cf_popEffectClose1(that) {
	$(that).parent().parent().parent().css("display","none");
}


var url = window.location.href;
/**
 * @desc 获取url参数
 * @param {String} _url  url路径
 */
function parse_url(_url){
    var pattern = /(\w+)=(\w+)/ig;
    var parames = {};
    url.replace(pattern, function(a, b, c){
    parames[b] = c;
    });
    return parames;
}
var parames = parse_url(url);


if (adct == 'messied_login') {
    $('.close').css('background', 'url("../img/gsxq_del.png") no-repeat');
}

if(token && parames.type == null){
	//底部信息ajax
	$.ajax({ 
		  type:"post",
		  url:pubIP+"platform/getPlatformInfo",//v1.0
		  cache:false,
		  dataType: "json",
		  headers: {
		  	token: token
		  },
		  success: function(json){
		    //console.log(json.code);
		  	$('.kfPhone').text(json.data.customerMobile);
		  	$('.kfEm').text(json.data.customerEmail);
		  },
		  error:function(xhr,statues,error){
		      
		  }
	});

    

    //是否开启权限 1不开启，2开启
    var flag = '';
    // var flag = 1;


	//isOld token
	//2 ok 已认证
	//0 超时
	//1 未登录
	//-1 未认证
	//-2 审核中
	$.ajax({ 
		  type:"post",
		  url:pubIP+"user/getUserInfoByToken",//v1.0
		  cache:false,
		  dataType: "json",
		  async:false,
		  headers: {
		  	token: token
		  },
		  success: function(json){
		    console.log(json.data);
            
            
			//是否超时
		    if(json.code == 401){
		    	localStorage.setItem('isOld','0');
		  		if(location.href.indexOf('login') == -1){
					  
					 if(!(location.href.substring('26') == '' || location.href.indexOf('index') != -1 || location.href.indexOf('aboutUs') != -1)){
					//if(location.href.indexOf('index') == -1){
		  				if(location.href.indexOf('account') != -1 || location.href.indexOf('shopManage') != -1){
		  					$("#effect" , parent.document).show();
		  				}else{
		  					missedLogin();
		  				}
		  			}
		  		}
                return false;
		  	} else if (json.code == 402) { //账号被别人登录了

                localStorage.setItem('isOld','0');
                if(location.href.indexOf('login') == -1){
                      
                     if(!(location.href.indexOf('index') != -1 || location.href.indexOf('aboutUs') != -1)){
                    //if(location.href.indexOf('index') == -1){
                        if(location.href.indexOf('account') != -1 || location.href.indexOf('shopManage') != -1){
                            $("#effect402" , parent.document).show();
                        }else{
                            missedLogin402();
                        }
                    }
                }
                return false;

            } else if(json.code == -1001){
                localStorage.setItem('isOld','1');
                localStorage.setItem('token','');
                if(!(location.href.indexOf('index') != -1 || location.href.indexOf('aboutUs') != -1)){
                    //if(location.href.indexOf('index') == -1){
                    if(location.href.indexOf('account') != -1 || location.href.indexOf('shopManage') != -1){
                        $("#effect" , parent.document).show();
                    }else{
                        missedLogin();
                    }
                }
                return false;
            }else{
		  		//是否认证
		  		$.ajax({ 
					  type:"post",
					  url:pubIP+"companyCertification/getCompanyWriteStateByUserToken",//v1.0
					  cache:false,
					  dataType: "json",
					  headers: {
					  	token: token
					  },
					  success: function(json){
						console.log(json.code);
					    var rzType = null;
					    if (json.code.type != '') {
					    	switch(json.data.type){
								case 1:
								  //未认证
								  rzType = '-1';
								  break;
								case 2:
								  //审核
								  rzType = '-2';
								  break;
								case 3:
								  //已认证
								  rzType = '2';
								  break;
								case 4:
								  rzType = '-1';
								  break;
								case 5:
								  rzType = '-2';
								  break;
								case 6:
								  rzType = '-2';
								  break;
								default:
								  rzType = '-1';
							}
						  	localStorage.setItem('isOld',rzType);
                             
					    }
					  },
					  error:function(xhr,statues,error){
					      
					  }
				});
		  		//localStorage.setItem('isOld','2');
		  	}
            companyId = json.data.companyId;
			userId = json.data.id;

            financePhoneNumber = json.financePhoneNumber;
            userPhone = json.data.mobile;
            name = json.data.name;

            logo = json.logo;
            
            if (localStorage.getItem('isOld') == '-1' || localStorage.getItem('isOld') == '-2' || localStorage.getItem('isOld') == '0' || localStorage.getItem('isOld') == '1') {
                flag = 1;
            } else {
                flag = 2;
            }

            
            if (flag == 2) {

                $('.exist_qx').css('visibility','hidden');
                $('.exist_one_qx').css('display','none');


                yiyou_quanxian(userId);
            }
            
            if (flag == 1) {
                if (localStorage.getItem('isOld') == 2) {
                    $('.my_xunpan, .my_baojia, .go_qiye, .go_zizhi, .update_login, .update_phone, .jiyi_pass_edit').addClass('quanxian');
                    $('.purchase1, .purchase2, .purchase3, .purchase4, .sale_order1, .sale_order2, .sale_order3, .sale_order4, .weiRenZheng_btn').parent().addClass('quanxian');
                }
                
            }
            
            console.log(flag);

		  },
		  error:function(xhr,statues,error){
		      
		  }
	});
}else{
    // missedLogin() ;
    if(location.href.indexOf('account') != -1){
        missedLogin() ;
    }
	localStorage.setItem('isOld','1');

}
//else{
//	localStorage.setItem('isOld','1');
//	if(location.href.indexOf('login') == -1){
//		if(location.href.indexOf('index') == -1){
//			$('#effect .contTitle span').text('您尚未登录');
//			missedLogin() ;
//		}
//	}
//}

function yiyou_quanxian(userId) {

    //查询某个用户已有权限
    $.ajax({
        url: pubIP + 'userPermissions/getRoleByUserId',
        type: 'get',
        headers: {
            Accept: "application/json; charset=utf-8",
            token: token
        },
        data: {
            userId: userId
        },
        cache: false,
        dataType: 'json',
        success: function (json) {
            console.log(json);

            if (json.code == 1) {

                for (var i = 0; i < json.permission.length; i++) {
                    //循环操作项
                    for (var j = 0; j < $('.exist_qx').length; j++) {
                        // debugger
                        // console.log(json.permission[i].dbid);
                        // console.log($($('.exist_qx')[j]).attr('data-exist'));

                        if (json.permission[i].dbid == $($('.exist_qx')[j]).attr('data-exist')) {
                            // debugger
                            

                            // if ($($('.exist_qx')[j]).attr('data-exist') != '19') {
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '20') {
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '16') { //账户概览-企业认证
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '17') { //账户概览-资质认证
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '18') { //账户概览-实名认证
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '23') { //账户概览-登录安全
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '24') { //账户概览-手机验证
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else if( $($('.exist_qx')[j]).attr('data-exist') != '25') { //账户概览-交易密码
                            //     $($('.exist_qx')[j]).css('visibility','visibility');  
                            // } else {

                                $($('.exist_qx')[j]).css('visibility','visible');   
                                // debugger
                            // }

                                                    

                        } else {
                            // $($('.exist_qx')[j]).removeClass('quanxian');

                            // $($('.exist_qx')[j]).css('visibility','hidden');                                                       
                        }

                        $($('.exist_qx')[j]).addClass('quanxian');

                    }        
                }

                for (var i = 0; i < json.permission.length; i++) {
                    //循环操作项
                    for (var j = 0; j < $('.exist_qx1').length; j++) {

                        if (json.permission[i].dbid == $($('.exist_qx1')[j]).attr('data-exist')) {
                            $($('.exist_qx1')[j]).addClass('quanxian');
                        } 

                    }
                }

                for (var i = 0; i < json.menu.length; i++) {
                    //循环操作项
                    for (var j = 0; j < $('.exist_one_qx').length; j++) {
                        // debugger
                        // console.log(json.permission[i].dbid);
                        // console.log($($('.exist_qx')[j]).attr('data-exist'));
                        if (json.menu[i].id == $($('.exist_one_qx')[j]).attr('data-oneExist')) {

                                $($('.exist_one_qx')[j]).css('display','block');
                          
                        }
                    }        
                }

                for (var i = 0; i < json.menu.length; i++) {
                    //循环操作项
                    for (var j = 0; j < $('.exist_one_qx1').length; j++) {
                        

                        if (json.menu[i].id ==  $($('.exist_one_qx1')[j]).attr('data-oneExist')) { //我的销售订单

                            $($('.exist_one_qx1')[j]).addClass('quanxian');

                            
                        } else {
                            $('.hzf_wdxsdd').hide();
                        }

                        if(json.menu[i].id ==  $($('.exist_one_qx1')[j]).attr('data-oneExist')) {
                            
                            $($('.exist_one_qx1')[j]).addClass('quanxian');

                        } else {
                            $('.hzf_wdcgdd').hide();
                        }

                    }
                }
                
                

                // if (json.menu.length != 0) {
                    
                //     for (var m = 0; m < json.menu.length; m++) {

                //         for (var n = 0; n < $('.first_title').length; n++) {
                //             // console.log()
                //             if ($($('.first_title')[n]).attr('data-first') == json.menu[m].id) {
                //                 // console.log($($('.first_title')[n]).find('input')[0].checked = true);
                //                 $($('.first_title')[n]).find('input')[0].checked = true;
                //             }
                //         }

                //     }   
                    
                // }

                // if (json.permission.length != 0) {

                //     for (var x = 0; x < json.permission.length; x++) {

                //         for (var y = 0; y < $('.two_title li').length; y++) {
                            
                //             if ($($('.two_title li')[y]).attr('data-second') == json.permission[x].dbid) {
                                
                //                 $($('.two_title li')[y]).find('input')[0].checked = true;
                //             }
                //         }

                //     }

                // }
                
            } else {
                cf_alert1(2, json.msg);
            }
            
        },
        error: function(err) {
            console.log(err);
        }
    });
}




// 模拟下拉框

var adct1 = document.getElementsByTagName('title')[0].getAttribute('adct1');
$('.selectPub').unbind();
$('.selectPub').click(function(event){

	console.log($(this).attr("disabled"))
	if($(this).attr("disabled")=="disabled"){return;}//不可选
	if(adct1==1){
        if($(this).children('img').attr('src') == '../img/prl-selected.jpg'){
            $(this).children('img').attr('src', '../img/prl-select.jpg')
        } else {
            $(this).children('img').attr('src', '../img/prl-selected.jpg')
        }

        event.stopPropagation();

        $(this).children('ul').toggle();
        var that = $(this);
        that.find('li').each(function(){
            $(this).mouseover(function(){
                $(this).addClass('hovered')
            });
            $(this).mouseleave(function(){
                $(this).removeClass('hovered')
            });
            if($(this).attr('data-index') == that.attr('data-selectedindex')){
                $(this).css({'background': '#6ea3ff','color': '#fff'});
                $(this).siblings('li').css({'background': '#fff','color': '#999'});
            }
        });
	}else if(adct1==2){
        if($(this).children('img').attr('src') == '../../img/prl-selected.jpg'){
            $(this).children('img').attr('src', '../../img/prl-select.jpg')
        } else {
            $(this).children('img').attr('src', '../../img/prl-selected.jpg')
        }

        event.stopPropagation();

        $(this).children('ul').toggle();
        var that = $(this);
        that.find('li').each(function(){
            $(this).mouseover(function(){
                $(this).addClass('hovered')
            });
            $(this).mouseleave(function(){
                $(this).removeClass('hovered')
            });
            if($(this).attr('data-index') == that.attr('data-selectedindex')){
                $(this).css({'background': '#6ea3ff','color': '#fff'});
                $(this).siblings('li').css({'background': '#fff','color': '#999'});
            }
        });
	}else if(adct1==0){
        if($(this).children('img').attr('src') == './img/prl-selected.jpg'){
            $(this).children('img').attr('src', './img/prl-select.jpg')
        } else {
            $(this).children('img').attr('src', './img/prl-selected.jpg')
        }

        event.stopPropagation();

        $(this).children('ul').toggle();
        var that = $(this);
        that.find('li').each(function(){
            $(this).mouseover(function(){
                $(this).addClass('hovered')
            });
            $(this).mouseleave(function(){
                $(this).removeClass('hovered')
            });
            if($(this).attr('data-index') == that.attr('data-selectedindex')){
                $(this).css({'background': '#6ea3ff','color': '#fff'});
                $(this).siblings('li').css({'background': '#fff','color': '#999'});
            }
        });
	}


}).mouseleave(function (event) {
    if(adct1==0){
        $(this).children('img').attr('src', './img/prl-select.jpg');
	}else if(adct1==1){
        $(this).children('img').attr('src', '../img/prl-select.jpg');
	}else if(adct1==2){
        $(this).children('img').attr('src', '../../img/prl-select.jpg');
    }
    $(this).children('ul').hide();
});

$('.selectPub ul li').click(function(){
    event.stopPropagation();
    $(this).parent().parent().attr('data-selectedindex', $(this).attr('data-index'));
    $(this).parent().parent().find('span').text($(this).text());
    if(adct1==0){
        $(this).parent().parent().children('img').attr('src', './img/prl-select.jpg')
    }else if(adct1==1){
        $(this).parent().parent().children('img').attr('src', '../img/prl-select.jpg')
    }else if(adct1==2){
        $(this).parent().parent().children('img').attr('src', '../../img/prl-select.jpg')
    }

    $(this).parent().css('display','none');
});



// 伪alert弹框    //type  1成功   2失败    msg消息   （注：点击该alert框的关闭或者确认，所有弹框将会被关闭，并且刷新当前页面）
function cf_alert(aa,msg) {
    if(aa==1){

        window.parent.$(".all_success_alert").show();
        window.parent.$(".all_success_alert .innerSuccmsg").text(msg);
        window.parent.$(".all_success_alert .confirm").unbind();
        window.parent.$(".all_success_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
        window.parent.$(".all_success_alert img.close").unbind();
        window.parent.$(".all_success_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
    }else {
        window.parent.$(".all_error_alert").show();
        window.parent.$(".all_error_alert .innerErrmsg").text(msg);
        window.parent.$(".all_error_alert .confirm").unbind();
        window.parent.$(".all_error_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
        window.parent.$(".all_error_alert img.close").unbind();
        window.parent.$(".all_error_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            window.location.reload();
        })
    }

}

function cf_alert1(aa,msg) {
    if(aa==1){

        window.parent.$(".all_success_alert").show();
        window.parent.$(".all_success_alert .innerSuccmsg").text(msg);
        window.parent.$(".all_success_alert .confirm").unbind();
        window.parent.$(".all_success_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            // window.location.reload();
        })
        window.parent.$(".all_success_alert img.close").unbind();
        window.parent.$(".all_success_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            // window.location.reload();
        })
    }else {
        window.parent.$(".all_error_alert").show();
        window.parent.$(".all_error_alert .innerErrmsg").text(msg);
        window.parent.$(".all_error_alert .confirm").unbind();
        window.parent.$(".all_error_alert .confirm").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            // window.location.reload();
        })
        window.parent.$(".all_error_alert img.close").unbind();
        window.parent.$(".all_error_alert img.close").click(function () {
            $(this).parents(".modelCont").parent().hide();
            window.top.$(".modelCont").parent().hide();
            // window.location.reload();
        })
    }

}
// 手机号判断
 function isPhone(poneInput) {
     var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
     if (!myreg.test(poneInput)) {
         return false;
     } else {
         return true;
     }
 }