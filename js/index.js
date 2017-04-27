window.onload = function(){
	/*使用swiper插件*/
	  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        mousewheelControl: true,
        speed:700,
				paginationClickable :true,
				resistanceRatio:0,
    });
	 /*点击图标 页面滑动*/
	 $(".index-join").click(function(){
	 	swiper.slideTo(1,1000,false);
	 });
	 $(".icon-all").click(function(){
	 	swiper.slideTo(2,1000,false);
	 });
	 $(".icon-android").click(function(){
	 	swiper.slideTo(3,1000,false);
	 });
	 $(".icon-web").click(function(){
	 	swiper.slideTo(5,1000,false);
	 });
	 $(".icon-ios").click(function(){
	 	swiper.slideTo(7,1000,false);
	 });
	 $(".icon-windows").click(function(){
	 	swiper.slideTo(9,1000,false);
	 });


	 /*点击Back按钮返回导航页*/
	$(".group-back").click(function(){
		swiper.slideTo(1,1000,false);
	});

	

	/*--------------------------------------------*/
	  /*点击图标 页面滑动*/
	 $(".index-join-pc").click(function(){
	 	swiper.slideTo(1,1000,false);
	 });
	 $(".icon-all-pc").click(function(){
	 	swiper.slideTo(2,1000,false);
	 });
	 $(".icon-android-pc").click(function(){
	 	swiper.slideTo(3,1000,false);
	 });
	 $(".icon-web-pc").click(function(){
	 	swiper.slideTo(5,1000,false);
	 });
	 $(".icon-ios-pc").click(function(){
	 	swiper.slideTo(7,1000,false);
	 });
	 $(".icon-windows-pc").click(function(){
	 	swiper.slideTo(9,1000,false);
	 });
	

	$(".login_del").click(function(){
		$(".bg").css("display","none");
		$(".login-pc").css("display","none");
	});


/*-----背景轮播图效果-----*/
	var container = document.getElementById("container");
	var pic = document.getElementById("pic");
	var Img = pic.getElementsByTagName("img");
	var timer;

	function auto(){
		var j = 0;
		timer = setInterval(function(){
			for(var i=0; i< Img.length; i++){
				if(Img[i].style.opacity == 1){
					Img[i].style.opacity = 0;
					j = i;
				}
			}
			if(j < Img.length-1){
				Img[j+1].style.opacity = 1;
			}
			else{
				Img[0].style.opacity = 1;
			}
		},5000);
	}
	auto();


	var picpc = document.getElementById("pic-pc");
	var Imgpc = picpc.getElementsByTagName("img");
	var timerpc;

	function autopc(){
		var j = 0;
		timerpc = setInterval(function(){
			for(var i=0; i< Imgpc.length; i++){
				if(Imgpc[i].style.opacity == 1){
					Imgpc[i].style.opacity = 0;
					j = i;
				}
			}
			if(j < Imgpc.length-1){
				Imgpc[j+1].style.opacity = 1;
			}
			else{
				Imgpc[0].style.opacity = 1;
			}
		}, 5000);
	}

	autopc();


// -------- 添加部分 -------- //
	var indexAni = function(){
		var userAgentInfo = navigator.userAgent;
    var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
    var flag = true;
    for(var v = 0; v < Agents.length; v++){
      if(userAgentInfo.indexOf(Agents[v]) > 0){
        flag = false;
        break;
      }
    }
    if(!flag){
    	$('.userid').focus(function(){
				$(".login-pc").css("top", "0");
			});
			$('.password').focus(function(){
				$(".login-pc").css("top", "0");
			});
			$('.idenCode').focus(function(){
				$(".login-pc").css("top", "0");
			});

			$(".userid").blur(function(){
				$(".login-pc").css("top", "10%");
			});
			$(".password").blur(function(){
				$(".login-pc").css("top", "10%");
			});
			$(".idenCode").blur(function(){
				$(".login-pc").css("top", "10%");
			});
      var back1 = document.getElementsByClassName("index")[0];
      var back2 = document.getElementsByClassName("nav")[0];
      var back3 = document.getElementsByClassName("all")[0];
      var back4 = document.getElementsByClassName("Android")[0];
      var back5 = document.getElementsByClassName("Android-main")[0];
      var back6 = document.getElementsByClassName("Web")[0];
      var back7 = document.getElementsByClassName("Web-main")[0];
      var back8 = document.getElementsByClassName("IOS")[0];
      var back9 = document.getElementsByClassName("IOS-main")[0];
      var back10 = document.getElementsByClassName("Windows")[0];
      var back11 = document.getElementsByClassName("Windows-main")[0];
      var html = document.getElementsByTagName("html")[0];
      var body = document.getElementsByTagName("body")[0];
      body.style.width = html.style.width = document.body.clientWidth + "px";
      body.style.height = html.style.height = document.body.clientHeight + "px";
      back1.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back2.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back3.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back4.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back5.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back6.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back7.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back8.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back9.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back10.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
      back11.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
    }

		var logo = document.getElementsByClassName('index-logo')[0];
		logo.setAttribute("class", "index-logo animated fadeIn");
		var topic = document.getElementsByClassName('index-topic')[0];
		topic.setAttribute("class", "index-topic animated swing");
		setInterval(function(){
			topic.setAttribute("class", "index-topic animated swing");
			setTimeout(function(){
				topic.setAttribute("class", "index-topic");
			}, 1000);
		}, 3000);

		var img1 = document.getElementById("nav-logo1");
    var img2 = document.getElementById("nav-logo2");
		var img3 = document.getElementById("nav-logo3");
		var img4 = document.getElementById("nav-logo4");
		setInterval(function(){
			img1.setAttribute("class", "icon-android animated rubberBand");
			img2.setAttribute("class", "icon-ios animated rubberBand");
			img3.setAttribute("class", "icon-web animated rubberBand");
			img4.setAttribute("class", "icon-windows animated rubberBand");
			setTimeout(function(){
				img1.setAttribute("class", "icon-android");
				img2.setAttribute("class", "icon-ios");
				img3.setAttribute("class", "icon-web");
				img4.setAttribute("class", "icon-windows");
			}, 1000);
		}, 3000);

		var imgPc1 = document.getElementById("nav-logo1-pc");
    var imgPc2 = document.getElementById("nav-logo2-pc");
		var imgPc3 = document.getElementById("nav-logo3-pc");
		var imgPc4 = document.getElementById("nav-logo4-pc");
		setInterval(function(){
			imgPc1.setAttribute("class", "icon-android-pc animated pulse");
			imgPc2.setAttribute("class", "icon-ios-pc animated pulse");
			imgPc3.setAttribute("class", "icon-web-pc animated pulse");
			imgPc4.setAttribute("class", "icon-windows-pc animated pulse");
			setTimeout(function(){
				imgPc1.setAttribute("class", "icon-android-pc");
				imgPc2.setAttribute("class", "icon-ios-pc");
				imgPc3.setAttribute("class", "icon-web-pc");
				imgPc4.setAttribute("class", "icon-windows-pc");
			}, 1000);
		}, 3000);

		var arrs = document.getElementsByClassName('join-arr');
		setInterval(function(){
			arrs[0].setAttribute('class', 'join-arr animated bounce');
			arrs[1].setAttribute('class', 'join-arr animated bounce');
			arrs[2].setAttribute('class', 'join-arr animated bounce');
			arrs[3].setAttribute('class', 'join-arr animated bounce');
			setTimeout(function(){
				arrs[0].setAttribute('class', 'join-arr');
				arrs[1].setAttribute('class', 'join-arr');
				arrs[2].setAttribute('class', 'join-arr');
				arrs[3].setAttribute('class', 'join-arr');
			}, 1000);
		}, 3000);

		$("#arr1").click(function(){
		 	swiper.slideTo(4,1000,false);
		 });
		$("#arr2").click(function(){
		 	swiper.slideTo(6,1000,false);
		 });
		$("#arr3").click(function(){
		 	swiper.slideTo(8,1000,false);
		 });
		$("#arr4").click(function(){
		 	swiper.slideTo(10,1000,false);
		 });
	};
	indexAni();
	// ---------- 添加部分 ---------- //


	// ---------- 请求 ---------- //
	var iRequest = function(){
		var num = "";
		var name = "";
		var password = "";
		var session = "";
		var vercode = "";

		var verCodeImg = document.getElementById('verCode');
		var btns = document.getElementsByClassName('group-button');

		var groBtn1 = document.getElementsByClassName('group-button')[0];
		var groBtn2 = document.getElementsByClassName('group-button-pc')[0];
		var groBtn3 = document.getElementsByClassName('group-button')[1];
		var groBtn4 = document.getElementsByClassName('group-button-pc')[1];
		var groBtn5 = document.getElementsByClassName('group-button')[2];
		var groBtn6 = document.getElementsByClassName('group-button-pc')[2];

		groBtn1.addEventListener('click', setGroup, false);
		groBtn2.addEventListener('click', setGroup, false);
		groBtn3.addEventListener('click', setGroup, false);
		groBtn4.addEventListener('click', setGroup, false);
		groBtn5.addEventListener('click', setGroup, false);
		groBtn6.addEventListener('click', setGroup, false);

		function setGroup(){
			$(".bg").css("display","block");
			$(".login-pc").css("display","block");
		}


		$(".login_del").click(function(){
			$(".bg").css("display","none");
			$(".login-pc").css("display","none");
		});


		verCodeImg.onclick = function(){
			$.ajax({
				url:"http://www.tjoe18.cn:3000/verCode",
				dataType:"jsonp",
				success:function(data){
					var baseCode = data.result.verCode;
					session = data.result.session;
					verCodeImg.setAttribute("src", baseCode);
				},
			});
		};

		$.ajax({
			url:"http://www.tjoe18.cn:3000/verCode",
			dataType:"jsonp",
			success:function(data){
				var baseCode = data.result.verCode;
				session = data.result.session;
				verCodeImg.setAttribute("src", baseCode);
			},
		});

		var btn = document.getElementById('btn1');
		btn.addEventListener('click', signUp, false);

		var home1 = document.getElementsByClassName('index-home')[0];
		var home2 = document.getElementsByClassName('index-home-pc')[0];

		home1.addEventListener('click', showbox, false);
		home2.addEventListener('click', showbox, false);

		function showbox(){
			$(".bg").css("display","block");
			$(".login-pc").css("display","block");
		}

		function signUp(){
			num = document.getElementById('num').value;
			password = document.getElementById('password').value;
			vercode = document.getElementById('vercode').value;

			$.ajax({
				url:"http://www.tjoe18.cn:3000/login",
				dataType:"jsonp",
				data: {
					username: num,
					password: password,
					session: session,
					verCode: vercode,
				},
				headers: {withCredentials: true},
				success:function(data){
					if(data.result.message === "login success"){
						name = data.result.name;
						$.ajax({
							url:"http://www.tjoe18.cn:3000/getInfo",
							dataType:"jsonp",
							data: {
								username: num,
								password: password,
								session: session,
								realName: name,
							},
							headers: {withCredentials: true},
							success:function(data){
								temp = 1;
								alert("登录成功啦~快去选组报名吧");
								home1.removeEventListener('click', showbox);
								home2.removeEventListener('click', showbox);

								groBtn1.removeEventListener('click', setGroup);
								groBtn2.removeEventListener('click', setGroup);
								groBtn3.removeEventListener('click', setGroup);
								groBtn4.removeEventListener('click', setGroup);
								groBtn5.removeEventListener('click', setGroup);
								groBtn6.removeEventListener('click', setGroup);

								groBtn1.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};
								groBtn2.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};
								groBtn3.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};
								groBtn4.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};
								groBtn5.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};
								groBtn6.onclick = function(event){
									var iGro = event.target.getAttribute('value');
									window.location.href = "login.html?num=" + num + iGro;
								};

								home1.addEventListener('click', function(){
									var ans = confirm("确认是否退出？");
						      if(ans === true){
						        $.cookie("session_from_qd", null);
						        window.location.href = "index.html";
						      }
						      else{

						      }
								}, false);
								home2.addEventListener('click', function(){
									var ans = confirm("确认是否退出？");
						      if(ans === true){
						        $.cookie("session_from_qd", null);
						        window.location.href = "index.html";
						      }
						      else{

						      }
								}, false);
								$(".bg").css("display","none");
								$(".login-pc").css("display","none");
								
							},
						});
					}else{
						alert("请检查输入是否正确");
						$.ajax({
							url:"http://www.tjoe18.cn:3000/verCode",
							dataType:"jsonp",
							success:function(data){
								var baseCode = data.result.verCode;
								session = data.result.session;
								verCodeImg.setAttribute("src", baseCode);
							},
						});
					}

				},
			});
		}



	};
	iRequest();

};