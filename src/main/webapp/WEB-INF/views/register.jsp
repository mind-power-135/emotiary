<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<title>회원가입</title>
<script type="text/javascript">

$(document).ready(function(){
	
	clean();
	
});

function join(){
	
	var email = $("#email").val();
	var firstPw = $("#firstPw").val();
	var pw = $("#pw").val();
	var userName = $("#name").val();
	
	if(email==""){
		alert("Email 주소를 입력해주세요.");
	} if(firstPw==""){
		alert("패스워드를 입력해주세요.");
	} if(pw==""){
		alert("패스워드 확인을 입력해주세요.");
	} if(userName==""){
		alert("이름을 입력해주세요.");
	}
	
	const user ={
		email: $("#email").val(),
		pw: $("#pw").val(),
		userName: $("#name").val()
	}
	
	console.log(JSON.stringify(user));
	
	if(firstPw!=""&pw!=""){
		if(firstPw==pw && email!="" && userName!="") {
			
			if(firstPw.length < 8 || firstPw.length > 15){
			  alert("비밀번호는 8자리 이상 15자리 이내로 입력해주세요.");
			  return false;
			} else if(firstPw.search(/\s/) != -1){
			  alert("비밀번호는 공백 없이 입력해주세요.");
			  return false;
			}
			
			else {
				$.ajax({
					  type: "POST",
					  url: "/emotiary/addUser",
					  //dataType:'json',  // @ResponseBody 붙여야 함
					  dataType: 'text',
					  data : JSON.stringify(user),
					  contentType : "application/json; charset=UTF-8",
					  success : function(data) {
						  alert(data); // Controller의 return
						},
					  error :function(request,status,error){
						  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						}
				});
			}
		} else if(firstPw!=pw) {
			alert("비밀번호와 비밀번호 재확인이 같지 않습니다. 다시 입력해주세요.")
			$("#firstPw").empty();
			$("#pw").empty();
		}
	}
	
}

function idCheck(){
	
	//console.log(JSON.stringify({"id":$('#id').val()}));
	
	var email = $("#email").val();
	
	$.ajax({
	  type: "POST",
	  url: "/emotiary/idCheck",
	  dataType: 'text',
	  data : email,
	  contentType : "text/plain; charset=UTF-8",
	  success : function(data){
			if(data == 1){
				alert("이미 존재하는 이메일입니다. 다른 아이디를 입력해주세요.");
			}else if(data == 0){
				$("#idChk").attr("value", "Y");
				alert("사용 가능한 이메일입니다.");
			}
		},
	  error :function(request,status,error){
		  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
	
}

function emailVerify(){
	const eamil = $('#email').val(); // 이메일 주소값 얻어오기
	console.log('완성된 이메일 : ' + eamil); // 이메일 오는지 확인
	const checkInput = $('.mail-check-input') // 인증번호 입력하는곳 
	
	$.ajax({
		type : 'get',
		url : "/emotiary/emailVerify?email="+eamil, // GET방식
		success : function (data) {
			console.log("data : " +  data);
			checkInput.attr('disabled',false);
			code =data;
			alert('인증번호가 전송되었습니다.')
		}			
	}); // end ajax
	
	// 인증번호 비교 
	// blur -> focus가 벗어나는 경우 발생
	$('.mail-check-input').blur(function () {
		const inputCode = $(this).val();
		const $resultMsg = $('#mail-check-warn');
		
		if(inputCode === code){
			$resultMsg.html('인증번호가 일치합니다.');
			$resultMsg.css('color','green');
			$('#mail-Check-Btn').attr('disabled',true);
			$('#email').attr('readonly',true);
			$('#submit').attr('disabled',false);
		}else{
			$resultMsg.html('인증번호가 불일치 합니다. 다시 확인해주세요.');
			$resultMsg.css('color','red');
			$('#submit').attr('disabled',true);
		}
	});
}

function clean(){
	$("#firstPw").empty();
	$("#pw").empty();
	$("#name").empty();
	$("#email").empty();
}

</script>
</head>
<body>
<div class="container">
	<div class="form-group">
      <label for="id">ID(Email)</label>
      <input type="text" id="email" name="email" placeholder="ID로 사용할 이메일 주소">
      <input type="button" id="idChk" value="이메일 중복확인" onclick="javascript:idCheck()"/>
      <input type="button" id="emailVerify" value="이메일 인증" onclick="javascript:emailVerify()"/>
      <br/>
      <input class="mail-check-input" placeholder="인증번호 6자리를 입력하고 엔터를 눌러주세요." disabled="disabled" maxlength="6" style="width:280px;">
	  <span id="mail-check-warn"></span>
	  <br/>
      <label for="firstPw">PW</label>
      <input type="text" id="firstPw" name="firstPw" placeholder="암호를 입력하세요" minlength="7" maxlength="15">
      <br/>
      <label for="pw">PW재확인</label>
      <input type="text" id="pw" name="pw" placeholder="암호를 다시 입력하세요">
      <br/>
      <label for="name">이름</label>
      <input type="text" id="name" name="name" placeholder="이름을 입력하세요">
      <br/>
	</div>
	<input type="button" id="submit" value="등록" onclick="javascript:join()"/>
</div> <!-- /container -->
</body>
</html>