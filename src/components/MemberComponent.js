import React, { useEffect, useState } from 'react';
import Postcode  from 'react-daum-postcode';
// import '../postCode.scss'


const MemberComponent = ({modal,modalShowFn,이용약관동의}) => {
        const [field,setField]= useState({
            아이디:'',
            showId:false,
            isErrorId: '',
            아이디중복확인:true,
            비밀번호:'',
            showPw1:false,
            showPw2:false,
            isErrorPw1:'',
            isErrorPw2:'',
            isErrorPw3:'',
            isErrorPwRe:'',
            비밀번호확인:'',           
            이름:'',
            이메일:'',
            이메일확인:'',
            이메일중복확인:true,
            휴대폰:'',
            휴대폰확인:'',
            isDisabledHp:true,
            휴대폰인증:'',
            휴대폰중복확인:true,
            휴대폰인증확인:false,
            showTimer:'true',
            setId:'',
            인증번호:'',
            인증확인번호:'',
            showHp:false,
            minutes:'4',
            seconds:'59',
            showAddress:false,
            검색주소:'',
            세부주소:'',
            주소:'',
            성별:'선택안함',
            textBirth:'',
            showBirth:false,
            년:'',
            showYear:'',
            월:'',
            showMonth:'',
            일:'',
            showDate:'',
            생년월일:'',
            showPart:false,
            추가입력사항선택:'',
            추가입력사항:'',
            이용약관동의:[],
            
        });
        const onFocusId = () =>{
            setField({...field, showId : true});
        }
        const onFocusPw1 = () =>{
            setField({...field, showPw1 : true})
        }
        const onFocusPw2 = () =>{
            setField({...field, showPw2 : true})
        }
        const onChangeId = (e) => {
            let regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])*[^\s][A-Za-z0-9]{6,}$/g;
            let isErrorId = ''


                if(regExp.test(e.target.value)===false){
                    isErrorId = false;
                }else{
                    isErrorId = true;
                }                
            
           setField({...field, 아이디 : e.target.value, isErrorId: isErrorId});
        }
        const onClickIdCheck = (e) =>{
            e.preventDefault();
            if(field.아이디 === ''){
                modalShowFn('아이디를 입력하세요');
                return;
            }else{

                if(field.isErrorId===false){
                    modalShowFn('아이디는 6자 이상의 영문과 숫자를 조합만 가능합니다')
                }
                modalShowFn('아이디 중복확인')
                let temp=[];
                for(let i=0;i<localStorage.length;i++){
                    temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    
                }
                let result =temp.map((item)=>item.아이디===field.아이디);

                if(result.includes(true)===true){
                    modalShowFn('중복된 아이디입니다.')
                    setField({...field,아이디:''});
                }else{
                    modalShowFn('사용가능한 아이디 입니다.')
                }
            }
           
        }
        const onChangePw = (e) =>{
            let regExp1 = /.{10,}/;
            let regExp2 = /((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[~!@#$%^&*_-])+)+)[^\s][A-Za-z0-9~!@#$%^&*_-]/;
            let regExp3 = /(\d)\1\1/;

            let temp1 ='';
            let temp2 ='';
            let temp3 ='';
            

            if(regExp1.test(e.target.value)===false){
                temp1 = false;
            }else{
                temp1 = true;
            }
            if(regExp2.test(e.target.value)===false){
                temp2 = false;
            }else{
                temp2 = true;
            }
            if(regExp3.test(e.target.value)===true){
                temp3 = false;
            }else{
                temp3 = true;
            }
            setField({...field, 비밀번호 : e.target.value,isErrorPw1 : temp1, isErrorPw2 : temp2, isErrorPw3 : temp3});
        }
        const onChangePw2 = (e) =>{

            let temp = '';

            if (field.비밀번호=== e.target.value){
                temp = true;
            }else{
                temp = false;
            }
            setField({...field, 비밀번호확인:e.target.value, isErrorPwRe : temp});

        }

        const onChangeName = (e) => {
            const regExp = /[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]/g;
            
            setField({...field, 이름 : e.target.value.replace(regExp,'')});
           
        }
        const onChangeEmail = (e) => {
            const regExp = /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
            let temp='';
            if(regExp.test(e.target.value)===true){
                temp=true;

            }else{
                temp=false;
            }
            setField({...field, 이메일 : e.target.value,이메일확인:temp});
        }
        const onClickEmailCheck = (e) =>{
            e.preventDefault();
            if(field.이메일===''){
                 modalShowFn('이메일을 입력하세요')
            }else{
                let temp=[];
                if(field.이메일확인===false){
                    modalShowFn('잘못된 이메일 형식입니다');
                }
                for(let i=0;i<localStorage.length;i++){
                    temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    
                }
                let result =temp.map((item)=>item.이메일===field.이메일);

                if(result.includes(true)===true){
                    modalShowFn('중복된 이메일입니다.')
                    setField({...field,이메일:''});
                }else{
                    modalShowFn('사용가능한 이메일 입니다.')
                }
            }
           
        }
        const onChangePhone = (e) => {
           
            const regExp=/^01[0|6|7|8|9]+\d{3,4}\d{4}$/g;

            let temp = '';
            if(regExp.test(e.target.value)===true){
                temp=true;                
            }else{
                temp=false;
            }
            setField({...field, 휴대폰 : e.target.value, 휴대폰확인:temp, isDisabledHp : !temp});
        }
        const onClickHp = (e) =>{
            e.preventDefault();
            let temp=[];
            for(let i=0;i<localStorage.length;i++){
                temp.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                
            }
            let result =temp.map((item)=>item.휴대폰===field.휴대폰);

            if(result.includes(true)===true){
                modalShowFn('중복된 휴대폰번호입니다.')
                setField({...field,휴대폰:''});
                return;
            }else{
                modalShowFn('사용가능한 휴대폰번호입니다.')
            }

            let num = Math.floor(Math.random()*900000+100000);
            modalShowFn(`인증번호를 입력하세요 ${num}`)
            setField({...field, showHp : true, 인증번호 : num.toString()});
            
            
        }
        const onMouseDownHp = (e) => {
            clearInterval(field.setId);
            setField({...field,showHp:false});
        }

        useEffect(()=>{
            if(field.showHp===true){
                countTimer();
            }
        },[field.showHp]);

        const countTimer =()=>{
            let minutes = field.minutes;
            let seconds = field.seconds;
            let setId = 0;


            const setTimer = () => {
                seconds--;
                if(seconds<=0){
                    seconds=59;
                    minutes--;
                    if(minutes<0){
                        clearInterval(setId);
                        seconds=0;
                        minutes=0;
                    }
                }
                setField({...field,minutes:minutes,seconds:seconds, setId:setId})
            }
            setId = setInterval(setTimer,1000);
        }
        const onChangePhConfirm = (e) =>{
            clearInterval(field.setId);
            setField({...field, 인증확인번호:e.target.value})

        }
        const onClickPhCheck = (e) =>{
            e.preventDefault();
            if(field.인증확인번호===field.인증번호){                
                modalShowFn('인증번호 확인')
                clearInterval(field.setId)
                setField({...field,휴대폰인증확인:true,인증확인번호:'',showTimer:false,isDisabledHp:true})
            }else{
                modalShowFn('인증번호 확인필요')
                countTimer();
            }
        }
        const onClickAddress=(e)=>{
            e.preventDefault();
            setField({...field,showAddress:true});
        }
        const stylePost ={
            position :'fixed',
            top : '50%',
            left: '50%',
            width : '400px',
            height :'500px',
            backgroundColor:'#fff',
            zIndex:'2',
            border:'1px solid #ccc',
            marginTop : '-250px',
            marginLeft : '-250px'
        }

        const onCompletePost = (data) =>{
            setField({...field, 검색주소: data.roadAddress});
        }
        const onChangeAddress1 = (e) =>{
            setField({...field, 검색주소: e.target.value})
        }
        const onChangeAddress2 = (e) => {
            setField({...field, 세부주소:e.target.value});
        }
        const onChangeGender = (e) =>{
            setField({...field, 성별 : e.target.value});
        }

        const onChangeYear = (e) => {
            const regExp=/[^0-9]/g;
            
            setField({...field,년 :e.target.value.trim().replace(regExp,'')})
        }
        const onChangeMonth = (e) => {
            const regExp=/[^0-9]/g;
            
            setField({...field,월 :e.target.value.trim().replace(regExp,'')})
        }
        const onChangeDate = (e) => {
            const regExp=/[^0-9]/g;
            
            setField({...field,일 :e.target.value.trim().replace(regExp,'')})
        }   

        const birthdayCheck=()=>{

            const {년,월,일}=field;
            const nowYear=new Date().getFullYear();
            const nowMonth=new Date().getMonth()+1;
            const nowDate=new Date().getDate();
            const today= new Date(nowYear,nowMonth,nowDate);
            

            if(년==='' && 월==='' && 일===''){
                return;
            }else{
                if(!/^([1][9]\d\d|[2]\d\d\d)$/g.test(년)){
                    setField({...field,showBirth:true, textBirth:'태어난 년도 4자리를 정확하게 입력해 주세요'});
                    //$('.guide-birth p').show().text('태어난 년도 4자리를 정확하게 입력해 주세요');
                    //yearfail=false;
                    return ;
                }else{
                    setField({...field,showBirth:false, textBirth:''});
                    if(!/^(?:0?[1-9]|1[0-2])$/g.test(월)){
                        setField({...field,showBirth:true, textBirth:'태어난 월을 정확하게 입력해 주세요'});
                        return;
                    //$('.guide-birth p').show().text('태어난 월을 정확하게 입력해 주세요');
                    }else{
                        setField({...field,showBirth:false, textBirth:''});
                        if(!/^(?:0?[1-9]|[12][0-9]|3[0-1])$/g.test(일) ){
                            setField({...field,showBirth:true, textBirth:'태어난 일을 정확하게 입력해 주세요'});
                            return;
                        //$('.guide-birth p').show().text('태어난 일을 정확하게 입력해 주세요');
                        }else{
                            const birthday = new Date(년,월,일);
                            const nowYear14 =new Date(nowYear-14,nowMonth,nowDate);
                            const nowYear100 =new Date(nowYear-120,nowMonth,nowDate);
                            if(birthday>new Date()){
                                setField({...field,showBirth:true, textBirth:'생년월일이 미래로 입력되었어요.'});
                                //$('.guide-birth p').show().text('생년월일이 미래로 입력되었어요.');
                                return;
                            }else{
                                setField({...field,showBirth:false, textBirth:''});
                            }
                            if(birthday>nowYear14){
                                setField({...field,showBirth:true, textBirth:'만 14세 미만은 가입이 불가합니다.'});                                
                                return;
                             }else{
                                setField({...field,showBirth:false, textBirth:''});
                             }
                             if(birthday<nowYear100){                               
                                setField({...field,showBirth:true, textBirth:'생년월일을 다시 확인해주세요. 120세 초과된 생년월일입니다'});                                
                                return;
                             }else{
                                setField({...field,showBirth:false, textBirth:''});
                             }

                            
                        }
                    }
                }
            }

        }
        const onBlurBirth = (e) =>{
            birthdayCheck();
        }
        const onClickPart = (e) =>{
            setField({...field,showPart:true,추가입력사항선택:e.target.value});
        }
        const onChangeAdd = (e) =>{
            setField({...field,추가입력사항:e.target.value});
        }
        const onChangeChkAll = (e) =>{
            if(e.target.checked){
                setField({...field,이용약관동의:이용약관동의});
            }else{
                setField({...field,이용약관동의:[]});
            }
           
        }
        const onChangeServ = (e) =>{
            let temp =[];
            if(e.target.checked){
                if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의'){
                    setField({...field,이용약관동의:[...field.이용약관동의,'무료배송, 할인쿠폰 등 혜택/정보 수신 동의','SMS','이메일']});
                }else if(field.이용약관동의.includes('SMS') && e.target.value==='이메일'){
                    setField({...field,이용약관동의:[...field.이용약관동의,'무료배송, 할인쿠폰 등 혜택/정보 수신 동의','이메일']});
                }else if(field.이용약관동의.includes('이메일') && e.target.value==='SMS'){
                    setField({...field,이용약관동의:[...field.이용약관동의,'무료배송, 할인쿠폰 등 혜택/정보 수신 동의','SMS']});
                }else{
                    setField({...field,이용약관동의:[...field.이용약관동의,e.target.value]});
                }
                
            }else{
                if(e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의'){
                    temp = field.이용약관동의.filter((item)=>item!==e.target.value);
                    temp = temp.filter((item)=>item!== 'SMS')
                    temp = temp.filter((item)=>item!== '이메일')
                }else if(e.target.value==='이메일' && field.이용약관동의.includes('SMS')){
                    temp = field.이용약관동의.filter((item)=>item!==e.target.value);
                    temp = temp.filter((item)=>item!== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의')
                }else if(e.target.value==='SMS' && field.이용약관동의.includes('이메일') ){
                    temp = field.이용약관동의.filter((item)=>item!==e.target.value);
                    temp = temp.filter((item)=>item!== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의')
                }else{
                    temp = field.이용약관동의.filter((item)=>item!==e.target.value);                   
                }
                setField({...field,이용약관동의:temp});

            }
            
        }

        const onSubmitForm = (e) =>{
            e.preventDefault();
            const {아이디, 비밀번호,비밀번호확인,이름,이메일,휴대폰,검색주소,세부주소,성별,년,월,일,추가입력사항선택,추가입력사항,이용약관동의,아이디중복확인,이메일중복확인,휴대폰중복확인,휴대폰인증확인,이용약관필수동의} = field;



            if(아이디==='' || 비밀번호==='' || 이름==='' || 휴대폰==='' || 검색주소==='' || 세부주소==='' || 이용약관동의.length<3 || 아이디중복확인 === false || 이메일중복확인 === false || 휴대폰중복확인 === false || 휴대폰인증확인 ===false){
                if(아이디===''){
                    modalShowFn('아이디를 입력해주세요')
                }else if(비밀번호 ===''){
                    modalShowFn('비밀번호를 입력해주세요');
                }
                else if(비밀번호확인 ===''){
                    modalShowFn('비밀번호를 확인해주세요');
                }
                else if(이름===''){
                    modalShowFn('이름을 입력해주세요');
                }
                else if(이메일===''){
                    modalShowFn('이메일을 입력해주세요');
                }
                else if(휴대폰===''){
                    modalShowFn('휴대폰번호를 입력해주세요');
                }
                else if(휴대폰인증확인===false){
                    modalShowFn('휴대폰번호를 인증해주세요');
                }
                else if(검색주소===''){
                    modalShowFn('주소를 검색해주세요');
                }
                else if(세부주소===''){
                    modalShowFn('세부주소를 입력해주세요');
                }
                else if(이용약관동의.length<3){
                    modalShowFn('이용약관동의를 확인해주세요');
                }
                else if(아이디중복확인 === false){
                    modalShowFn('아이디가 중복되었습니다. 아이디를 확인해주세요');
                }
                else if(이메일중복확인 === false){
                    modalShowFn('이메일이 중복되었습니다. 이메일을 확인해주세요');
                }
                else if(휴대폰중복확인 === false){
                    modalShowFn('휴대폰번호가 중복되었습니다. 휴대폰번호를 확인해주세요');
                }
                return;
            }else{
                let cnt=0;
                이용약관동의.map((item)=>{
                    if(item.includes('필수')){
                        cnt++
                    }                    
                });
                if(cnt<3){                    
                    modalShowFn('필수약관동의를 체크해주세요');
                    return;
                }else{
                    let temp={
                        아이디:아이디,
                        비밀번호:비밀번호,
                        휴대폰:휴대폰,
                        이름:이름,
                        이메일:이메일,
                        주소:`${검색주소} ${세부주소}`,
                        성별:성별,
                        생년월일:`${년}-${월}-${일}`,
                        추가입력사항:`${추가입력사항선택}: ${추가입력사항}`,
                        이용약관동의:이용약관동의
                    };
                    localStorage.setItem(temp.아이디,JSON.stringify(temp));
                    modalShowFn('회원가입을 감사드립니다.')
                     setField({...field,
                         아이디:'',
                         showId:false,
                         isErrorId: '',
                         아이디중복확인:false,
                         비밀번호:'',
                         showPw1:false,
                         showPw2:false,
                         isErrorPw1:'',
                         isErrorPw2:'',
                         isErrorPw3:'',
                         isErrorPwRe:'',
                         비밀번호확인:'',           
                         이름:'',
                         이메일:'',
                         이메일확인:'',
                         이메일중복확인:false,
                         휴대폰:'',
                         휴대폰확인:'',
                         isDisabledHp:true,
                         휴대폰인증:'',
                         휴대폰중복확인:false,
                         휴대폰인증확인:false,
                         showTimer:'true',
                         setId:'',
                         인증번호:'',
                         인증확인번호:'',
                         showHp:false,
                         minutes:'4',
                         seconds:'59',
                         showAddress:false,
                         검색주소:'',
                         세부주소:'',
                         주소:'',
                         성별:'선택안함',
                         textBirth:'',
                         showBirth:false,
                         년:'',
                         showYear:'',
                         월:'',
                         showMonth:'',
                         일:'',
                         showDate:'',
                         생년월일:'',
                         showPart:false,
                         추가입력사항선택:'',
                         추가입력사항:'',
                         이용약관동의:[]
                    })
                }

                


            }
        }


    return (
        <section id="member">
        <div className="container">
            <div className="wrap">
                <div className="title">
                    <h2>회원가입</h2>
                </div>
                <div className="content">
                     <form id="member" name="member" method="post"  action="response.php" onSubmit={onSubmitForm}>
                        <ul id="ulMember">
                            <li>
                                <h3><i>*</i><span>필수입력사항</span></h3>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>아이디</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="text" id="inputId" name="inputId" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" minLength="6" maxLength="20" onChange={onChangeId} value={field.아이디} onFocus={onFocusId} autoComplete='off'/>
                                        <button className="id-double-btn" onClick={onClickIdCheck}>중복확인</button>
                                        {
                                        field.showId && (
                                        <div className="guide-text guide-id">
                                            <p className={field.isErrorId === '' ? '' : (field.isErrorId === false ? 'error' : 'success')}>6자 이상의 영문 혹은 영문과 숫자를 조합</p>
                                            <p>아이디 중복확인</p>                                                    
                                        </div>
                                        )}
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>비밀번호</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="password" id="inputPw" name="inputPw" placeholder="비밀번호를 입력해주세요" maxLength="20" onChange={onChangePw} onFocus={onFocusPw1} value={field.비밀번호} />
                                        {
                                        field.showPw1 && (
                                        <div className="guide-text guide-pw">
                                            <p className={field.isErrorPw1 === '' ? '' : (field.isErrorPw1 === false ? 'error' : 'success')}>10자 이상 입력</p>
                                            <p className={field.isErrorPw2 === '' ? '' : (field.isErrorPw2 === false ? 'error' : 'success')}>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>                                                    
                                            <p className={field.isErrorPw3 === '' ? '' : (field.isErrorPw3 === false ? 'error' : 'success')}>동일한 숫자 3개 이상 연속 사용 불가</p>                                                    
                                        </div>
                                        )}
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>비밀번호확인</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="password" id="inputPw2" name="inputPw2" placeholder="비밀번호를 한번 더 입력해주세요" onChange={onChangePw2} onFocus={onFocusPw2} value={field.비밀번호확인} maxLength="20"/>
                                        {
                                        field.showPw2 &&(
                                        <div className="guide-text guide-pw2">
                                            <p className={field.isErrorPwRe === '' ? '' : (field.isErrorPwRe === false ? 'error' : 'success')}>동일한 비밀번호를 입력해주세요.</p>                                                                                                      
                                        </div>
                                        )}
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>이름</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="text" id="inputName" name="inputName" placeholder="이름을 입력해주세요" onChange={onChangeName} value={field.이름}/>                                        
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>이메일</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="email" id="inputEmail" name="inputEmail" placeholder="예: marketkurly@kurly.com" onChange={onChangeEmail} value={field.이메일}/>
                                        <button onClick={onClickEmailCheck} className="email-double-btn">중복확인</button>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>휴대폰</span><i>*</i></label>
                                </div>
                                <div className="right">
                                        <input type="text" id="inputPhone" name="inputPhone" placeholder="숫자만 입력해주세요" maxLength='11' onChange={onChangePhone} value={field.휴대폰}/>
                                        <button onMouseDown={onMouseDownHp} onClick={onClickHp}disabled={field.isDisabledHp} className={field.isDisabledHp ? "phone-btn" : "phone-btn on" }>인증번호 받기</button>                                        
                                        {
                                            field.showHp && (
                                            <>
                                            <input disabled={field.휴대폰인증확인} type="text" id="inputPhoneConfirm" name="inputPhoneConfirm" placeholder="숫자만 입력해주세요" maxLength='11' onChange={onChangePhConfirm} value={field.인증확인번호}/>
                                            <button disabled={field.휴대폰인증확인} className={field.휴대폰인증확인 ? "phone-btn-confirm on" : "phone-btn-confirm"} onClick={onClickPhCheck}>인증번호 확인</button>
                                            {field.showTimer && (
                                            <span className="count-timer">{field.minutes} : {field.seconds<10?`0${field.seconds}`:field.seconds}</span>
                                            )}
                                            </>
                                        )}
                                </div>
                            </li>
                            <li className="address">
                                <div className="left">
                                    <label><span>주소</span><i>*</i></label>
                                </div>
                                <div className="right">
                                    {
                                        field.showAddress && (
                                    <>
                                    <input onChange={onChangeAddress1} value={field.검색주소} type="text" id="inputAddress1" name="inputAddress1" placeholder="검색주소"/>
                                    <input onChange={onChangeAddress2} value={field.세부주소} type="text" id="inputAddress2" name="inputAddress2" placeholder="세부주소를 입력하세요"/>
                                    </>
                                    )}
                                    <button id="addressBtn" className="address-btn" onClick={onClickAddress}><span><img src="./images/ico_search.svg" alt="search" /><i className="address-text">주소검색</i></span></button>
                                    <div className="guide-text guide-address">
                                        <h4> </h4>                                                                                                      
                                    </div>
                                    <p className="address-p">배송지에 따라 상품정보가 달라질 수 있습니다.</p>
                                    <div id="postCode">
                                        {
                                           field.showAddress && (
                                            <div>
                                                <Postcode 
                                                style={stylePost}                           
                                                onComplete={onCompletePost}  
                                                />
                                            </div>
                                           
                                         )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>성별</span></label>
                                </div>
                                <div className="right gender">
                                    <label htmlFor="male">
                                        <input onChange={onChangeGender} checked={field.성별.includes('남자')} type="radio" id="male" name="gender" value="남자"/>
                                        <span>남자</span>
                                    </label>
                                    <label htmlFor="female">
                                        <input onChange={onChangeGender} checked={field.성별.includes('여자')} type="radio" id="female" name="gender" value="여자"/>
                                        <span>여자</span>
                                    </label>
                                    <label htmlFor="none">
                                        <input onChange={onChangeGender} checked={field.성별.includes('선택안함')} type="radio" id="none" name="gender" value="선택안함"/>
                                        <span>선택안함</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label><span>생년월일</span></label>
                                </div>
                                <div className="right">
                                    <div className="date-box">
                                        <ul>
                                            <li><input type="text" id="year" name="year" placeholder="YYYY" maxLength='4' onChange={onChangeYear} onBlur={onBlurBirth} onFocus={onBlurBirth} value={field.년}/></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="month" name="month" placeholder="MM" maxLength='2' onChange={onChangeMonth}onBlur={onBlurBirth} onFocus={onBlurBirth} value={field.월}/></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="date" name="date" placeholder="DD" maxLength='2' onChange={onChangeDate}onBlur={onBlurBirth} onFocus={onBlurBirth} value={field.일}/></li>
                                        </ul>
                                    </div>
                                    {
                                        field.showBirth && (
                                    <div className="guide-text guide-birth">
                                        <p className="error">{field.textBirth}</p>                                                                                                                                                                                       
                                    </div>
                                    )}
                                </div>
                            </li>
                            <li className="add-input-item">
                                <div className="left">
                                    <label><span>추가입력 사항</span></label>
                                </div>
                                <div className="right participate">
                                    <label htmlFor="recommend">
                                        <input type="radio" id="recommend-id" name="participate" value="추천인 아이디" onChange={onClickPart} checked={field.추가입력사항선택.includes('추천인 아이디')}/>
                                        <span>추천인 아이디</span>
                                    </label>

                                    <label htmlFor="event">
                                        <input type="radio" id="event" name="participate" value="참여 이벤트명"  onChange={onClickPart} checked={field.추가입력사항선택.includes('참여 이벤트명')}/>
                                        <span>참여 이벤트명</span>
                                    </label>
                                    {
                                        field.showPart &&(
                                    <div className="add-input-box">
                                        <input type="text" id="inputAdd" name="inputAdd" placeholder="" onChange={onChangeAdd} value={field.추가입력사항}/>
                                        <p>
                                        추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>                                               
                                        가입 이후, 수정이 불가합니다.<br/>                                               
                                        대소문자 및 띄어쓰기에 유의해주세요.
                                        </p>
                                    </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <hr/>
                            </li>
                           <li className="check-box">
                            <div className="left">
                                <label><span>이용약관동의</span><i>*</i></label>
                            </div>
                            <div className="right service">
                                <ol>
                                    <li>
                                        <label htmlFor="chkAll">
                                            <input type="checkbox" id="chkAll" name="chkAll" value="전체 동의합니다." onChange={onChangeChkAll} checked={field.이용약관동의.length>=7?true:false}/>
                                            <span>전체 동의합니다.</span>                                                    
                                        </label> 
                                        <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                    </li>
                                    <li>
                                        <label htmlFor="chk1" className="view-box">
                                            <input type="checkbox" id="chk1" name="chk1" className="chkbox" value="이용약관동의(필수)" onChange={onChangeServ} checked={field.이용약관동의.includes('이용약관동의(필수)')}/>
                                            <span>이용약관 동의<i> (필수)</i></span>
                                            <span>
                                                <a href="#!" className="view-btn-box" title="약관보기">약관보기<i>&gt;</i></a>
                                            </span>
                                        </label> 
                                        
                                    </li>
                                    <li>
                                        <label htmlFor="chk2" className="view-box">
                                            <input type="checkbox" id="chk2" name="chk2" className="chkbox" value="개인정보 수집·이용 동의(필수)" onChange={onChangeServ} checked={field.이용약관동의.includes('개인정보 수집·이용 동의(필수)')}/>
                                            <span>개인정보 수집·이용 동의<i> (필수)</i></span>
                                            <span>
                                                <a href="#!" className="view-btn-box" title="약관보기">약관보기<i>&gt;</i></a>
                                            </span>
                                        </label> 
                                    </li>
                                    <li>
                                        <label htmlFor="chk3" className="view-box">
                                            <input type="checkbox" id="chk3" name="chk3" className="chkbox" value="개인정보 수집·이용 동의(선택)" onChange={onChangeServ} checked={field.이용약관동의.includes('개인정보 수집·이용 동의(선택)')}/>
                                            <span>개인정보 수집·이용 동의<i> (선택)</i></span>
                                            <span>
                                                <a href="#!" className="view-btn-box" title="약관보기">약관보기<i>&gt;</i></a>
                                            </span>
                                        </label> 
                                    </li>
                                    <li>
                                        <label htmlFor="chk4">
                                            <input type="checkbox" id="chk4" name="chk4" className="chkbox" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의" onChange={onChangeServ} checked={field.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의')}/>
                                            <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의<i> (선택)</i></span>
                                        </label>
                                        <dl>
                                            <dd>
                                                <label htmlFor="chk5">
                                                    <input type="checkbox" id="chk5" name="chk5" className="chkbox" value="SMS" onChange={onChangeServ} checked={field.이용약관동의.includes('SMS')}/>
                                                    <span>SMS</span>
                                                </label>
                                                <label htmlFor="chk6">
                                                    <input type="checkbox" id="chk6" name="chk6" className="chkbox" value="이메일" onChange={onChangeServ} checked={field.이용약관동의.includes('이메일')}/>
                                                    <span>이메일</span>
                                                </label>
                                            </dd>
                                            <dt>
                                                <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                            </dt>
                                        </dl>
                                    </li>
                                    <li>
                                        <label htmlFor="chk7">
                                            <input type="checkbox" id="chk7" name="chk7" className="chkbox" value="본인은 만 14세 이상입니다.(필수)" onChange={onChangeServ} checked={field.이용약관동의.includes('본인은 만 14세 이상입니다.(필수)')}/>
                                            <span>본인은 만 14세 이상입니다.<i> (필수)</i></span>
                                        </label> 
                                    </li>                                            
                                </ol>                                                                       
                            </div>
                        </li>
                         <li className="bottom-line">
                            <hr/>
                         </li>
                           <li className="button-box">
                            <button type="submit" className="submit-btn" >가입하기</button>
                           </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};
MemberComponent.defaultProps={
    성별 : ['남자','여자','선택안함'],
    추가입력사항 : ['추천인아이디','참여이벤트'],
    이용약관동의 :[
        
        '이용약관동의(필수)',
        '개인정보 수집·이용 동의(필수)',
        '개인정보 수집·이용 동의(선택)',
        '무료배송, 할인쿠폰 등 혜택/정보 수신 동의',
        'SMS',
        '이메일',
        '본인은 만 14세 이상입니다.(필수)'
        
        
        
    ]
}

export default MemberComponent;