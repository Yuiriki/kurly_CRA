(function($){



    var chkBox=$('.chkbox');
    var idfail =false;
    var idfail2  =false;
    var pwfail  =false;
    var pwfail2  =false;
    var emailfail  =false;
    var numfail  =false;
    var numfail2  =false;
    var numconfirm  =false;
    var yearfail =true;
    var monthfail  =true;
    var datefail =true;
    

    $('#inputId').on({
        mousedown:function(){
            $('.guide-id').show();
        }
    });

    $('#inputId').on({
        keyup:function(){ 
            
            var idValue=$(this).val().toString();
            const regExp = /(?=.*[A-Za-z])+(?=.*[0-9])*[A-Za-z0-9]{6,}/;
            if(idValue===''){
                $('.guide-id p').eq(0).removeClass('error');
                $('.guide-id p').eq(0).removeClass('success');
                idfail=false;
               
            }else{
                if(regExp.test(idValue)===true){
                $('.guide-id p').eq(0).removeClass('error');
                $('.guide-id p').eq(0).addClass('success');
                
                idfail=true;
            }else if(regExp.test(idValue)===false){
                $('.guide-id p').eq(0).removeClass('success');
                $('.guide-id p').eq(0).addClass('error');
                
                idfail=false;
            }

            }
           
            
        }
    });

    function idDoubleCheck(){
        var inputId=$('#inputId').val();
        var ok=false;
        for(let i=0;i<localStorage.length;i++){
            localStorage.key(i);
            
            if(JSON.parse(localStorage.getItem(localStorage.key(i))).아이디===inputId){
                ok=true;             
                
            }
        }
        if(ok===true){    
            alert('중복된 아이디입니다.');
            idfail2=false;
            $('.guide-id p').eq(1).removeClass('success');
            $('.guide-id p').eq(1).addClass('error');
            
        }else{
            alert('사용이 가능한 아이디입니다.');
            idfail2=true;
            $('.guide-id p').eq(1).removeClass('error');
            $('.guide-id p').eq(1).addClass('success');
           
            
        }
    }
    $('.id-double-btn').on({
        click:function(e){
            e.preventDefault();
           var idValue= $('#inputId').val();
           
            const regExp = /(?=.*[A-Za-z])+(?=.*[0-9])*[A-Za-z0-9]{6,}/;
            if(idValue===''){
                $('.guide-id p').eq(0).removeClass('error');
                $('.guide-id p').eq(0).removeClass('success');
               modal('아이디를 입력해 주세요.');
               idfail2=false;
            }else{
                if(regExp.test(idValue)===true){
                $('.guide-id p').eq(0).addClass('success');
                $('.guide-id p').eq(0).removeClass('error');
                idfail2=true;
                console.log('사용이 가능합니다')
                idDoubleCheck();
            }else if(regExp.test(idValue)===false){
                $('.guide-id p').eq(0).addClass('error');
                $('.guide-id p').eq(0).removeClass('success');
                idfail2=false;
                modal('아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다');

            }

            }
        }
    });

    

    $('#inputPw').on({
        mousedown:function(){
            $('.guide-pw').show();
        }
    });

    $('#inputPw').on({
        keyup:function(e){
            e.preventDefault();
            var regExp1 = /.{10,}/;
            var regExp2 = /((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[~!@#$%^&*_-])+)+)[^\s][A-Za-z0-9~!@#$%^&*_-]/;
            var regExp3 = /(\d)\1\1/;
            var pwValue=$('#inputPw').val().toString();
            
            if(pwValue===''){
                $('.guide-pw p').removeClass('success');
                $('.guide-pw p').removeClass('error');
                pwfail=false;
            }else{
                if(regExp1.test(pwValue)){
                    $('.guide-pw p').eq(0).removeClass('error');
                    $('.guide-pw p').eq(0).addClass('success');
                    
                    pwfail=true;
                }else{
                    $('.guide-pw p').eq(0).removeClass('success');
                    $('.guide-pw p').eq(0).addClass('error');
                    
                    pwfail=false;
                }
                
                if(regExp2.test(pwValue)){
                    $('.guide-pw p').eq(1).removeClass('error');
                    $('.guide-pw p').eq(1).addClass('success');
                    
                    pwfail=true;
                }else{
                    $('.guide-pw p').eq(1).removeClass('success');
                    $('.guide-pw p').eq(1).addClass('error');
                    
                    pwfail=false;
                }
                if(regExp3.test(pwValue)){
                    $('.guide-pw p').eq(2).removeClass('success');
                    $('.guide-pw p').eq(2).addClass('error');
                    
                    pwfail=false;
                }else{
                    $('.guide-pw p').eq(2).removeClass('error');
                    $('.guide-pw p').eq(2).addClass('success');
                    
                    pwfail=true;
                }
            }
           
        }
    });
    //비밀번호 확인
    $('#inputPw2').on({
        mousedown:function(){
            $('.guide-pw2').show();
        }
    });
    $('#inputPw2').on({
        keyup:function(){
        let pwValue=$('#inputPw').val();
        let pwValue2=$('#inputPw2').val();
        
        if(pwValue2===''){
            $('.guide-pw2 p').removeClass('error');
            $('.guide-pw2 p').removeClass('success');
            pwfail2=false;
        }else{
            if(pwValue2===pwValue){
            $('.guide-pw2 p').removeClass('error');
            $('.guide-pw2 p').addClass('success');
           
            pwfail2=true;
            }else{
            $('.guide-pw2 p').removeClass('success');
            $('.guide-pw2 p').addClass('error');
            
            pwfail2=false;
            }
        } 
        }
       
        
    });

    $('#inputName').on({
        keyup:function(){
            $(this).val($(this).val().toString().replace(/[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]*/g,''));
        }
    });
    
    function emailDoubleCheck(){
        var inputEmail=$('#inputEmail').val();
        var ok= false;

        for(let i=0;i<localStorage.length;i++){
            if(JSON.parse(localStorage.getItem(localStorage.key(i))).이메일===inputEmail){
                ok=true;
            }
        }
        if(ok===true){
            alert('중복된 이메일입니다.');
            emailfail=false;
        }else{
            alert('사용이 가능한 이메일입니다.');
            emailfail=true;
        }
    }

    $('.email-double-btn').on({
        click:function(e){
            e.preventDefault();
            var regExpEmail = /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
            
            var inputEmailValue=$('#inputEmail').val();
            var inputEmail=$('#inputEmail');
            
            var message='';

            if(inputEmailValue===''){
                message='이메일 주소를 입력해주세요';
                modal(message);
                emailfail=false;
            }else{ 
                if(regExpEmail.test(inputEmailValue)===false){
                    inputEmail.removeClass('success');
                    inputEmail.addClass('error');  
                    message='잘못된 이메일 형식입니다.'; 
                    modal(message); 
                    emailfail=false;          
            }else{
                inputEmail.removeClass('error');
                inputEmail.addClass('success');
                emailfail=true;
                emailDoubleCheck();
                
            }

            }
            

        }
    });

    function modal(message){
        $('#modal').addClass('show');
        $('.modal-message').text(message);
    }
    $('.modal-close').on({
        click:function(){
            $('#modal').removeClass('show');
        }
    });


    
    

    
    //휴대폰    
    $('#inputPhone').on({

        keyup:function(){
            var numValue=$(this).val();  
            var regExp1=/[^0-9]/g;
            var regExp2=/^01[0|6|7|8|9]+\d{3,4}\d{4}$/;
              

            $(this).val(numValue.replace(regExp1, ''));
            
            if(numValue===''){
                $(this).removeClass('error');
                $('.phone-btn').removeClass('on');
                numfail=false;
            }else{
                if(numValue.length>=10){
                    $('.phone-btn').addClass('on');
                }else{
                    $('.phone-btn').removeClass('on');
                }
               
                if(regExp2.test(numValue)===false){
                    $(this).removeClass('success');
                    $(this).addClass('error')  
                    numfail=false;          
                    }else{
                    $(this).removeClass('error')
                    $(this).addClass('success');
                    numfail=true;
                    } 
            }
                
            
        }
        
    });
    var setId=0 
    $('.phone-btn').on({
        click:function(e){
            e.preventDefault();
            var numValue=$('#inputPhone').val();            
            var regExp2=/^01[0|6|7|8|9]+\d{3,4}\d{4}$/;                
            
           
            if(numValue<10){
                return;
                numfail2=false;
            }
            if(regExp2.test(numValue)===false){                
                $('#inputPhone').addClass('error')   
                    modal('잘못된 휴대폰 번호입니다.확인 후 다시 시도해주세요.'); 
                    numfail2=false;        
                }else{
                $('#inputPhone').removeClass('error')
                $('#inputPhoneConfirm').show();
                $('.phone-btn-confirm').addClass('on').show();
                $('.count-timer').show();
                countTimer();
                modal('인증번호가 전송되었습니다.');
                numfail2=true;
                } 

        }
    });

    function countTimer(){
        
        var sec=59;
        var min=2;
        
        setId = setInterval(function(){
            sec--;
             if(sec<0){
                min--;
                sec=59;
                if(min<0){
                    clearInterval(setId);
                    $('#inputPhoneConfirm').prop('disabled',true);                    
                    $('.phone-btn-confirm').removeClass('on');
                    $('.count-timer').html('');                    
                    modal('인증제한시간이 끝났습니다');
                    return;
                }
            }
             $('.count-timer').html(min+':'+( sec < 10 ? ( '0'+sec ) :sec));

        },1000);
       
    }
    var confirm=false;
    $('.phone-btn-confirm').on({
        click:function(e){
            e.preventDefault();
            var confirmkey='546546';
            
            if($('#inputPhoneConfirm').val()===confirmkey){
                modal('인증번호가 확인되었습니다');
                confirm=true;
                numconfirm=true;
                clearInterval(setId);
                    $('#inputPhoneConfirm').prop('disabled',true);
                    $('#inputPhone').prop('disabled',true);
                    $('.phone-btn-confirm').prop('disabled',true);
                    $('.phone-btn-confirm').removeClass('on');
                    $('.count-timer').html('');
                    
                return;
            }else{
                modal('인증번호를 확인하여주십시오.');
                numconfirm=false;
                
            }
        }
    });

    //생년월일


    function inputBoxRegExpCheck(value){
        var regExp=/[^0-9]/g;
        return value.trim().replace(regExp,'');

    }
    function birthdayCheck(){
        var year=$('#year').val().trim().toString();
        var month=$('#month').val().trim().toString();
        var date=$('#date').val().trim().toString();
        var birthLastDate = new Date(year,month,0);
       
        var nowYear=new Date().getFullYear();
        var nowMonth=new Date().getMonth();
        var nowDate=new Date().getDate();
        
      if($('#year').val()==='' && $('#month').val()==='' && $('#date').val()===''){
        yearfail=true;
        monthfail=true;
        datefail=true;
        return;
          
      }else{
       
        //year
            if(!/^([1][9]\d\d|[2]\d\d\d)$/g.test(year)){
                
                $('.guide-birth p').show().text('태어난 년도 4자리를 정확하게 입력해 주세요');
                yearfail=false;
                return ;
            }else{
                $('.guide-birth p').hide();
                 //month
                 if(!/^(?:0?[1-9]|1[0-2])$/g.test(month)){
                    monthfail=false;
                $('.guide-birth p').show().text('태어난 월을 정확하게 입력해 주세요');
                return;
                }else{
                    $('.guide-birth p').hide();
                      //date
                        if(!/^(?:0?[1-9]|[12][0-9]|3[0-1])$/g.test(date) || date>birthLastDate.getDate() ){
                            datefail=false;
                        $('.guide-birth p').show().text('태어난 일을 정확하게 입력해 주세요');
                        return;
                    }else{
                         $('.guide-birth p').hide();
                         datefail=true;

                         const nowYear14 =new Date(nowYear-14,nowMonth,nowDate);
                         const nowYear100 =new Date(nowYear-100,nowMonth,nowDate);
                         const birthday =new Date(year,month,date);

                         if(birthday>new Date()){
                            $('.guide-birth p').show().text('생년월일이 미래로 입력되었어요.');
                            datefail=false;
                            return;
                         }else{
                            $('.guide-birth p').hide();
                            datefail=true;
                         }


                         if(birthday>nowYear14){
                            $('.guide-birth p').show().text('만 14세 미만은 가입이 불가합니다.');
                            datefail=false;
                            return;
                         }else{
                            datefail=true;
                            $('.guide-birth p').hide();
                         }
                         if(birthday<nowYear100){
                            datefail=false;
                            $('.guide-birth p').show().text('생년월일을 다시 확인해주세요.');
                            return;
                         }else{
                            $('.guide-birth p').hide();
                            datefail=true;
                         }
                    }   
            
                }
            
            }
            
           
        
        
      }



    }

    $('#year').on({
      keyup:function(){
        $(this).val(inputBoxRegExpCheck($(this).val()));
        
      },
     
      focusout:function(){
        birthdayCheck($(this).val());
      }
 

      
    });
    $('#month').on({
        keyup:function(){
            $(this).val(inputBoxRegExpCheck($(this).val()));
        },
       
        focusout:function(){
            birthdayCheck($(this).val());
        },
        focusin:function(){
            birthdayCheck($(this).val());
        }
   
  
        
      });
      $('#date').on({
        keyup:function(){
            $(this).val(inputBoxRegExpCheck($(this).val()));
        },
        
        focusout:function(){
            birthdayCheck($(this).val());
        },
        focusin:function(){
            birthdayCheck($(this).val());
        }
   
  
        
      });








    //주소검색
    $('.address-btn').on({
        click:function(e){
            e.preventDefault();
            $('.address input').show();
            $('.address-btn').removeClass('address-btn');
            $('#addressBtn i').text('재검색');
            
            new daum.Postcode({
                oncomplete:function(data){
                   
                    $('#inputAddress1').val(`${data.zonecode} ${data.address}`);
                    $('#inputAddress2').focus();


                    if($('#inputAddress1').val().indexOf('서울')!=-1 ||$('#inputAddress1').val().indexOf('경기')!=-1 ||$('#inputAddress1').val().indexOf('인천')!=-1 || $('#inputAddress1').val().indexOf('대전')!=-1){
                        $('.guide-address h4').show().text('샛별배송');
                        $('.guide-address h4').removeClass('not');
                    }else if($('#inputAddress1').val().indexOf('제주특별자치도')!=-1 || $('#inputAddress1').val().indexOf('신안군')!=-1 || $('#inputAddress1').val().indexOf('울릉')!=-1){
                        $('.guide-address h4').show().text('배송불가');
                        $('.guide-address h4').addClass('not');
                    }else{
                        $('.guide-address h4').show().text('택배배송');
                        $('.guide-address h4').removeClass('not');
                    }
                    
                }
            }).open();
        }
    });

    $('#recommend-id').on({
        change:function(){
            $('.add-input-box').show();
            $('#inputAdd').attr("placeholder",'추천인 아이디를 입력해주세요.');
        }
    });

    $('#event').on({
        change:function(){
            $('.add-input-box').show();
            $('#inputAdd').attr("placeholder",'참여 이벤트명을 입력해주세요.');
        }
    });

    //이용약관
    $('#chk4').on({
        change:function(){
            if($(this).is(':checked')){
                $('#chk5').prop('checked',true);
                $('#chk6').prop('checked',true);
            }else{
                $('#chk5').prop('checked',false);
                $('#chk6').prop('checked',false);
            }
        }
    });
    $('#chk5').on({
        change:function(){
            if($('#chk5').is(':checked')===false || $('#chk6').is(':checked')===false){
                $('#chk4').prop('checked',false);
            }else{
                $('#chk4').prop('checked',true);
            }
        }
    });
    $('#chk6').on({
        change:function(){
            if($('#chk5').is(':checked')===false || $('#chk6').is(':checked')===false){
                $('#chk4').prop('checked',false);
            }else{
                $('#chk4').prop('checked',true);
            }
        }
    });



    chkBox.each(function(idx){
        $(this).on({
            change:function(){
               

                let cnt=0;

                for(var i=0;i<chkBox.length;i++){
                 if(chkBox.eq(i).is(':checked')){
                     cnt++;
                 }
                }
                if(cnt===7){
                    $('#chkAll').prop('checked',true);
                }else{
                    $('#chkAll').prop('checked',false);
                }
            }
        });
    });

    $('#chkAll').on({
        change:function(){
            if($(this).is(':checked')){
                chkBox.prop('checked',true);
            }else{
                chkBox.prop('checked',false);
            }
        }
    });


    
    //전송

    $('.submit-btn').on({
        click:function(e){
            e.preventDefault();

            //필수 선택 활성화
            if($('#inputPw').val()!=$('#inputPw2').val()){
                modal('비밀번호를 확인해주세요.');
                return;
            } 
            else if(idfail===false){
                modal('아이디 잘못된 부분을 확인해주세요.');
                return;
            }
            else if(idfail2===false){
                modal('아이디 중복확인 확인해주세요.');
                return;
            } 
            else if(pwfail===false){
                modal('비밀번호를 확인해주세요.');
                return;
            } 
            else if(pwfail2===false){
                modal('비밀번호확인을 확인해주세요.');
                return;
            }  
            else if(emailfail===false){
                modal('이메일 중복확인을 확인해주세요.');
                return;
            }
            else if(numfail===false){
                modal('휴대폰 번호를 확인해주세요.');
                return;
            }  
            else if(numfail2===false){
                modal('인증번호 받기를 확인해주세요.');
                return;
            }
            else if(numconfirm===false){
                modal('인증번호를 확인해주세요.');
                return;
            }  
            else if(yearfail===false){
                modal('생일 연도를 확인해주세요.');
                return;
            } 
            else if(monthfail===false){
                modal('생일 월을 확인해주세요.');
                return;
            }
            else if(datefail===false){
                modal('생일 날짜를 확인해주세요.');
                return;
            }       
            else if($('#inputId').val()==='' || $('#inputPw').val()==='' ||$('#inputPw2').val()==='' || $('#inputName').val()==='' || $('#inputEmail').val()==='' || $('#inputPhone').val()==='' || $('#inputAddress1').val()==='' ){
                modal('필수입력창을 확인해주세요.');
                return;
            }else if(confirm===false){
                modal('휴대폰번호 인증을 확인해주세요.');
                return;
            }else if( $('#inputAddress2').val()===''){
                modal('상세주소를 입력해주세요.');
                return;
            }
            else{
                if($('#chk1').is(':checked')===false || $('#chk2').is(':checked')===false || $('#chk7').is(':checked')===false){
                    modal('필수입력창을 확인해주세요.');
                    return;
                }else{
                     var idVal = $('#inputId').val();
                     
            var pwVal = $('#inputPw').val();
            var nameVal = $('#inputName').val();
            var emailVal = $('#inputEmail').val();
            var phoneVal = $('#inputPhone').val();
            var addressVal = $('#inputAddress1').val() + '' + $('#inputAddress2').val();            
            var genderVal = '';            
            var birthVal = $('#year').val()+'-'+$('#month').val()+'-'+$('#date').val();
            var addVal1 = '';
            var addVal2 = '';
            var serviceVal = [];
            
            

            //성별
            if($('#male').is(':checked')){
                genderVal=$('#male').val();
            }else if($('#female').is(':checked')){
                genderVal=$('#female').val();
            }else{
                genderVal=$('#none').val();
            }
            //추가입력

            if($('#recommend-id').is(':checked')){
                addVal1=$('#recommend-id').val();
            }
            if($('#event').is(':checked')){
                addVal2=$('#event').val();
            }

            //약관동의

            $('.chkbox').each(function(){
                if($('.chkbox').is(':checked')){
                    serviceVal.push($('.chkbox').val());
                }
            });

            
            var membership ={
                아이디:idVal,
                비밀번호:pwVal,
                이름:nameVal,
                이메일:emailVal,
                휴대폰번호:phoneVal,
                주소:addressVal,
                성별:genderVal,
                생년월일:birthVal,
                추가입력사항:addVal1,
                추가입력사항:addVal2,
                이용약관:serviceVal
            }
            //local storage save
            localStorage.setItem(membership.아이디,JSON.stringify(membership));

            //초기화

            $('#inputId').val('');
            $('#inputPw').val('');
            $('#inputPw2').val('');
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputPhone').val('');
            $('#inputPhoneConfirm').val('');
            $('.phone-btn').val('');
            $('#inputAddress1').val('');
            $('#inputAddress2').val('');                 
            $('#year').val('');
            $('#month').val('');
            $('#date').val('');
            
            var serviceVal = [];


            $('#male').prop('checked',false);
            $('#female').prop('checked',false);
            $('#none').prop('checked',false);
            $('#recommend-id').prop('checked',false);
            $('#event').prop('checked',false);
            $('#inputPhoneConfirm').prop('disabled',false);
            $('#inputPhone').prop('disabled',false);
            $('.phone-btn-confirm').prop('disabled',false);

            
            //체크박스 초기화
            $('#chkAll').prop('checked',false);
            $('.chkbox').each(function(){
                $('.chkbox').prop('checked',false);                
                
            });

            
            
            $('.guide text').hide();
            $('.guide pw').hide();
            $('.guide pw2').hide();
            $('#inputPhoneConfirm').hide();
            $('.phone-btn-confirm').hide();
            $('.guide-address h4').hide();
            $('.guide-id p').removeClass('success');
            $('.guide-id p').removeClass('error');
            $('.guide-pw p').removeClass('success');
            $('.guide-pw p').removeClass('error');
            $('.guide-pw2 p').removeClass('error');
            $('.guide-pw2 p').removeClass('success');
            $('#inputEmail').removeClass('error');
            $('#inputEmail').removeClass('success');
            $('.phone-btn').removeClass('on');
            $('#inputPhone').removeClass('error');
            $('#inputPhone').removeClass('success');
            $('.guide-birth p').hide();
            $('.address input').hide();
            $('.add-input-box').hide();
            $('#addressBtn').addClass('address-btn');
            $('#addressBtn i').text('주소검색');
            $('.guide-address h4').removeClass('not');
        } 
            }
                }
           
            
    });
    








})(jQuery)