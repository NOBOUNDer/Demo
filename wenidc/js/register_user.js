(function(){
    function valueCheck(className) {
        var ele=$('.'+className),
            ipt=ele.find('input'),
            tip=ele.find('p.tip'),
            msg='';
        //console.log(ipt);
        //console.log(tip);
        ipt.blur(function(){
            var iptVal=$(this).val(),
                pwd=$('.password').find('input').val();
            switch(className){
                case 'phone':
                    if(!iptVal) msg='请输入正确的手机号';
                    else if(!/^1[^012]\d{9}$/.test(iptVal)) msg='手机号码格式不正确';
                    else msg='';
                    break;
                case 'password':
                    if (/^\S{6,12}$/.test(iptVal)) msg='';
                    else if (iptVal) msg='6-12位字母或数字或特殊字符组合';
                    else msg='请输入密码';
                    break;
                case 'confirm':
                    if (!iptVal) msg='请确认密码';
                    else if (iptVal!==pwd) msg='前后密码不一致';
                    else msg='';
                    break;
                case 'verification':
                    if (!iptVal) msg='请输入短信验证码';
                    else msg='';
                    break;
                default: throw 'error';
            }
            //console.log(msg);
            tip.text(msg);
        });
    }
    valueCheck('phone');
    valueCheck('password');
    valueCheck('confirm');
    valueCheck('verification');
})();