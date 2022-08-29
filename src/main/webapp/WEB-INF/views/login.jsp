<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<title>로그인</title>
<script type="text/javascript">

function login(){
	
	var id = $("#id").val();
	var pw = $("#pw").val();
	
	if (id == null) {
		alert("id를 입력하세요.")
	}
	if (pw == null) {
		alert("비밀번호를 입력하세요.")
	}
	
	const user ={
			id, pw
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
	
	var id = $("#id").val();
	
	$.ajax({
		  type: "POST",
		  url: "/emotiary/logout",
		  dataType:'text',
		  data : JSON.stringify(id),
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
      <input type="text" id="id" name="id" placeholder="ID를 입력하세요"><br/>
      <label for="pw">PW</label>
      <input type="text" id="pw" name="pw" placeholder="암호를 입력하세요"><br/>
	</div>
	<input type="button" id="login" value="로그인" onclick="javascript:login()"/>
	<input type="button" id="logout" value="로그아웃" onclick="javascript:logout()"/>
</div> <!-- /container -->
</body>
</html>