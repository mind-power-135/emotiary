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
	} else {
		alert("비밀번호와 비밀번호 재확인이 같지 않습니다. 다시 입력해주세요.")
		$("#firstPw").empty();
		$("#pw").empty();
	}
}

function idCheck(){
	
	//console.log(JSON.stringify({"id":$('#id').val()}));
	
	var id = $("#id").val();
	
	$.ajax({
	  type: "POST",
	  url: "/emotiary/idCheck",
	  dataType: 'text',
	  data : id,
	  contentType : "text/plain; charset=UTF-8",
	  success : function(data){
			if(data == 1){
				alert("이미 존재하는 아이디입니다. 다른 아이디를 입력해주세요.");
			}else if(data == 0){
				$("#idChk").attr("value", "Y");
				alert("사용 가능한 아이디입니다.");
			}
		},
	  error :function(request,status,error){
		  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
	
}

function alertValue(data){
	alert(data);
}

function clean(){
	$("#id").empty();
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
      <label for="id">ID</label>
      <input type="text" id="id" name="id" placeholder="ID를 입력하세요">
      <input type="button" id="idChk" value="아이디 중복확인" onclick="javascript:idCheck()"/><br/>
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