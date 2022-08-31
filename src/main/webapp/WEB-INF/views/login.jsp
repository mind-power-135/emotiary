<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js" charset="utf-8"></script>
<title>로그인</title>
<script type="text/javascript">

function login(){
	
	var email = $("#email").val();
	var pw = $("#pw").val();
	
	if (email == null) {
		alert("email을 입력하세요.")
	}
	if (pw == null) {
		alert("비밀번호를 입력하세요.")
	}
	
	const user ={
			email, pw
	}
	
	console.log(user);
	
	$.ajax({
		  type: "POST",
		  url: "/emotiary/loginCheck",
		  dataType:'text',
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

function logout(){
	
	var email = $("#email").val();
	
	$.ajax({
		  type: "POST",
		  url: "/emotiary/logout",
		  dataType:'text',
		  data : JSON.stringify(email),
		  contentType : "application/json; charset=UTF-8",
		  success : function(data) {
			  alert(data); // Controller의 return
			},
		  error :function(request,status,error){
			  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
	});
	
}

</script>
</head>
<body>
<div class="container">
	<div class="form-group">
      <label for="id">ID</label>
      <input type="text" id="email" name="email" placeholder="Email을 입력하세요"><br/>
      <label for="pw">PW</label>
      <input type="text" id="pw" name="pw" placeholder="암호를 입력하세요"><br/>
	</div>
	<input type="button" id="login" value="로그인" onclick="javascript:login()"/>
	<!-- <input type="button" id="login" value="카카오 로그인" onclick="javascript:kakaoLogin()"/> -->
	<a class="p-2" href="https://kauth.kakao.com/oauth/authorize?client_id=1aecad2ec9281b4fa38d54505765097b&redirect_uri=http://localhost:8080/emotiary/kakaoLoginSuccess&response_type=code">카카오로그인</a>
	<input type="button" id="logout" value="로그아웃" onclick="javascript:logout()"/>
	<a href="/emotiary/kakaoLogout">카카오로그아웃</a>
</div> <!-- /container -->
</body>
</html>