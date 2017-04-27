var login = {
  name: '',
  num: '',
  class: '',
  sex: '',
  tel: '',
  message: '',
  group: '',
  session: '',
  vercode: '',
  password: '',
  type: '',
  mail: '',
  state: '',
  
  init: function(){
    this.checkInfHandle(login.checkInf);
  },

  checkInfHandle: function(callback){
    var temp = "";
    var url = location.search;
    temp = url.split("=")[1];
    login.num = (url.split("=")[1]).substr(0, 8);
    login.group = (url.split("=")[1]).substr(8);
    document.getElementById('num').value = login.num;
    callback();
  },

  checkInf: function(){
    $.ajax({
      url: 'http://www.tjoe18.cn:3000/check',
      dataType: "jsonp",
      data: {
        num: login.num,
      },
      headers: {withCredentials: true},
      success: function(data){
        if(data.result == "without sign"){
          login.setOption();
          login.signOut();
          login.setSwiper();
          login.setBtnStyle();
          login.setForm();
          login.setBack();
          login.setHomeHandle();
          login.setBtnHandle();
        }else if(data.result == "sign up"){
          login.setThenAnimated();
          login.signOut();
        }else if(data.result == "without login"){
          window.location.href = "index.html";
        }
      }
    });
  },

  setOption: function(){
    var iGro = document.getElementById('group');

    var aWeb = document.createElement('option');
    var aiOS = document.createElement('option');
    var aAndroid = document.createElement('option');
    aWeb.setAttribute("value", "Web");
    aiOS.setAttribute("value", "iOS");
    aAndroid.setAttribute("value", "Android");
    aWeb.innerHTML = "Web";
    aiOS.innerHTML = "iOS";
    aAndroid.innerHTML = "Android";

    if(login.group == "Android"){
      iGro.appendChild(aAndroid);
      iGro.appendChild(aWeb);
      iGro.appendChild(aiOS);
    }else if(login.group == "iOS"){
      iGro.appendChild(aiOS);
      iGro.appendChild(aWeb);
      iGro.appendChild(aAndroid);
    }else if(login.group == "Web"){
      iGro.appendChild(aWeb);
      iGro.appendChild(aiOS);
      iGro.appendChild(aAndroid);
    }
  },

  signOut: function(){
    var btn = document.getElementById('quit');

    btn.onclick = function(){
      var ans = confirm("确认是否退出？");
      if(ans == true){
        $.cookie("session_from_qd", null);
        window.location.href = "index.html";
      }
      else{

      }
    };
  },

  setBtnHandle: function(){
    var btn = document.getElementById('login-btn');
    btn.onclick = login.setBtn;
  },

  removeSetBtn: function(){
    var btn = document.getElementById('login-btn');
    btn.removeEventListener('click', this.setBtn);
  },

  setBtn: function(){
    login.name = document.getElementById('name').value;
    login.num = document.getElementById('num').value;
    login.tel = document.getElementById('tel').value;
    login.message = document.getElementById('message').value;
    login.group = document.getElementById('group').value;
    login.mail = document.getElementById('mail').value;

    var telRe = /^(13[0-9]|15[0|1|3|6|7|8|9]|17[0-9]|18[0-9])\d{8}$/;
    var mailRe = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var nameRe = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
    var numRe = /^[0-9]*$/;

    if(!nameRe.test(login.name)){
      alert("请检查姓名是否输入正确");
      // return;
    }
    else if(!numRe.test(login.num)){
      alert("请检查学号是否输入正确");
      // return;
    }
    else if(!mailRe.test(login.mail)){
      alert("请检查邮箱是否输入正确");
      // return;
    }
    else if(login.message.length > 100){
      alert("留言不要太多哦");
      // return;
    }
    else if(!telRe.test(login.tel)){
      alert("请检查电话是否正确");
      // return;
    }
    else if(!login.mail){
      alert("老铁，都啥时代了还没邮箱？");
      // return;
    }
    else if(!login.group){
      alert("一定要选个方向呀~!");
      // return;
    }
    else{
      $.ajax({
        url: 'http://www.tjoe18.cn:3000/add',
        dataType: "jsonp",

        headers: {withCredentials: true},

        data: {
          newData:{
            name: login.name,
            num: login.num,
            class: login.class,
            sex: login.sex,
            tel: login.tel,
            message: login.message,
            mail: login.mail,
            group: login.group,
          },
        },
        success: function(data){
          if(!data.error){
            alert("报名成功啦~");
            login.setThenAnimated();
          }else if(data.result == "wrong name"){
            alert("请检查姓名是否正确");
          }else if(data.result == "wrong num"){
            alert("请检查学号是否正确");
          }else if(data.result == "name err"){
            alert("请检查姓名是否正确");
          }else if(data.result == "num err"){
            alert("请检查学号是否正确");
          }else if(data.result == "tel err"){
            alert("请检查电话是否正确");
          }else if(data.result == "mail err"){
            alert("请检查邮箱是否正确");
          }else if(data.result == "group err"){
            alert("请检查方向是否正确");
          }else if(data.result == "state err"){
            alert("请检查状态是否正确");
          }
        },
      });
    }
  },

  setThenAnimated: function(){
    clearInterval(login.timeId);
    var form = document.getElementsByClassName('login-form')[0];
    var btn = document.getElementById('login-btn');
    form.setAttribute("class", "login-form");
    form.setAttribute("class", "login-form animated bounceOut");
    btn.setAttribute("class", "login-form animated bounceOut");

    $.ajax({
      url: 'http://www.tjoe18.cn:3000/returnInf',
      dataType: "jsonp",
      data: { 
        num: login.num,
      },
      headers: {withCredentials: true},
      success: function(data){
        var message = document.getElementById('iMessage');

        if(data.result[0].state == "已发光"){
          iMessage.value = data.result[0].name + "同学你好！是金子总会发光的，请继续努力！";
        }else{
          if(!data.result[0].state){
            login.state = "未面试或状态未更新";
          }else{
            login.state = data.result[0].state;
          }
          iMessage.value = data.result[0].name + "同学你好！你已经投递了" + data.result[0].group + "组啦~~你现在的状态是：" + login.state;
        }
      }
    });

    setTimeout(function(){
      var lis = document.getElementsByClassName('check-li');
      lis[0].style.display = "block";
      lis[0].setAttribute("class", "check-li animated bounceInRight");
      setTimeout(function(){
        var lis = document.getElementsByClassName('check-li');
        lis[1].style.display = "block";
        lis[1].setAttribute("class", "check-li animated bounceInRight");

        var iSwiper = new Swiper(".swiper-container", {
          initialSlide: 1,
          parallax: true,
          touchRatio: 0,
        });

      }, 200);
    }, 20);

  },

  setSwiper: function(){
    var iSwiper = new Swiper(".swiper-container", {
      initialSlide: 0,
      parallax: true,
      touchRatio: 0,
    });
  },


  setBack: function(){
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
      var back = document.getElementById("login");
      var html = document.getElementsByTagName("html")[0];
      var body = document.getElementsByTagName("body")[0];
      body.style.width = html.style.width = document.body.clientWidth + "px";
      body.style.height = html.style.height = document.body.clientHeight + "px";
      back.style.backgroundSize = document.body.clientWidth + "px " + document.body.clientHeight + "px";
    }
  },

  timeId: '',
  setBtnStyle: function(){
    var btn = document.getElementById('login-btn');
    login.timeId = setInterval(function(){
      btn.setAttribute("class", "animated swing");
      setTimeout(function(){
        btn.setAttribute("class", "");
      }, 1000);
    }, 3000);
  },

  setForm: function(){
    var lis = document.getElementsByClassName('login-li');
    var i = 0;
    setTimeout(function(){
      lis[i].setAttribute("class", "login-li animated bounceInRight");
      lis[i].style.display = "block";
      i++;
      setTimeout(function(){
        lis[i].setAttribute("class", "login-li animated bounceInRight");
        lis[i].style.display = "block";
        i++;
        setTimeout(function(){
          lis[i].setAttribute("class", "login-li animated bounceInRight");
          lis[i].style.display = "block";
          i++;
          setTimeout(function(){
            lis[i].setAttribute("class", "login-li animated bounceInRight");
            lis[i].style.display = "block";
            i++;
            setTimeout(function(){
              lis[i].setAttribute("class", "login-li animated bounceInRight");
              lis[i].style.display = "block";
              i++;
              setTimeout(function(){
                lis[i].setAttribute("class", "login-li animated bounceInRight");
                lis[i].style.display = "block";
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  },


  setHomeHandle: function(){
    
  },
};



login.init();