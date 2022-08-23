<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<title>회원가입</title>
<script type="text/javascript">

function join(){
	const user ={
			id: $("#id").val(),
			pw: $("#pw").val(),
			userName: $("#name").val(),
			email: $("#email").val()
	}
	
	console.log(JSON.stringify(user));
	
	var firstPw = $("#firstPw").val();
	var pw = $("#pw").val();
	
	if(firstPw==pw) {
		$.ajax({
			  type: "POST",
			  url: "/emotiary/register",
			  dataType:'json',
			  data : JSON.stringify(user),
			  contentType : "application/json; charset=UTF-8"
		});
	} else {
		alert("비밀번호와 비밀번호 재확인이 같지 않습니다.")
	}
}

</script>
</head>
<body>
<div class="container">
	<div class="form-group">
      <label for="id">ID</label>
      <input type="text" id="id" name="id" placeholder="ID를 입력하세요"><br/>
      <label for="firstPw">PW</label>
      <input type="text" id="firstPw" name="firstPw" placeholder="암호를 입력하세요"><br/>
      <label for="pw">PW재확인</label>
      <input type="text" id="pw" name="pw" placeholder="암호를 다시 입력하세요"><br/>
      <label for="name">이름</label>
      <input type="text" id="name" name="name" placeholder="이름을 입력하세요"><br/>
      <label for="email">이메일</label>
      <input type="text" id="email" name="email" placeholder="이메일 주소를 입력하세요"><br/>
	</div>
	<input type="button" id="submit" value="등록" onclick="javascript:join()"/>
</div> <!-- /container -->
</body>
</html>