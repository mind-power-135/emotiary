package com.mindpower.emotiary.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mindpower.emotiary.common.HttpConnection;
import com.mindpower.emotiary.common.KakaoLoginOutput;
import com.mindpower.emotiary.common.MailSendService;
import com.mindpower.emotiary.common.SHA_256;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RequiredArgsConstructor
@RestController // @ResponseBody 안 써도 됨
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	private MailSendService mailService;
	
//	// 회원가입 페이지
//	// @GetMapping("/register")
//	@RequestMapping(value = "/register", method = {RequestMethod.GET, RequestMethod.POST})
//	public ModelAndView register() throws Exception {
//		return new ModelAndView("/register");
//	}

	// 일반 회원가입
	@PostMapping("/addUser")
	public String addUser(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		SHA_256 sha_256 = new SHA_256();
		String pw = (String)paramMap.get("pw");
		String salt = sha_256.encrypt((String)paramMap.get("pw"));
		paramMap.put("salt", pw+salt);
		
		userService.addUser(paramMap);
		
		return "Join Success!";
       
	}
	
	// 일반 회원가입 시 학교정보 저장
	@PostMapping("/addSchool")
	public String addSchool(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		String schoolType = paramMap.get("schoolType").toString();
		paramMap.put("schoolType", schoolType);
		
		userService.addSchool(paramMap);
		
		return "School Info Save!";
		
	}
	
	// 이메일 인증 (confirm email authKey) // emailVerify
	@ResponseBody
	@GetMapping("/emailVerify")
	public String emailVerify(String email) {
		System.out.println("이메일 인증 요청이 들어옴!");
		System.out.println("이메일 인증 이메일 : " + email);
		return mailService.joinEmail(email);
	}
	
	
	// 아이디(이메일) 중복체크
	@PostMapping("/idCheck")
	public int idCheck(@RequestBody String account) throws Exception {
		int num = userService.idCheck(account);
		if(num == 1) {
			return num;
		} else {
			return num;
		}
	}
	
	// 이름 존재여부 체크
	@PostMapping("/nameCheck")
	public int nameCheck(@RequestBody String account) throws Exception {
		int num = userService.nameCheck(account);
		if(num == 1) {
			return num;
		} else {
			return num;
		}
	}
	
//	// 로그인 페이지
//	HttpConnection conn = HttpConnection.getInstance();
//	@RequestMapping(value = "/login", method = {RequestMethod.GET, RequestMethod.POST})
//	public ModelAndView login() throws Exception {
//		
//		return new ModelAndView("/login");
//	}
	
	
	// 일반(=이메일) 로그인
	@PostMapping("/loginCheck")
	public String login(@RequestBody Map<String, Object> paramMap, HttpServletRequest request) throws Exception {
	 
		String pw = (String)paramMap.get("pw");
		paramMap.put("salt", pw);
		
		Map<String, Object> userMap = userService.loginCheck(paramMap);
		HttpSession session = request.getSession();
		if (userMap != null) {
			session.setAttribute("userMap",userMap);
			return "Login Success!";
		} else {
			session.setAttribute("userMap",null);
			return "Login Failure";
		}
		
	}
	
	// 로그아웃
	@PostMapping("/logout")
	public String logout(HttpSession session) throws Exception {
		session.invalidate();
		return "Logout Success!";
	}
	
	// 카카오 로그인
	@GetMapping("/kakaoLogin")
	public String kakao() {
		StringBuffer loginUrl = new StringBuffer();
		loginUrl.append("https://kauth.kakao.com/oauth/authorize?client_id=");
		loginUrl.append("1aecad2ec9281b4fa38d54505765097b"); //카카오 앱에 있는 REST KEY
		loginUrl.append("&redirect_uri=");
		loginUrl.append("http://localhost:8080/emotiary/kakaoLoginSuccess"); //카카오 앱에 등록한 redirect URL
		loginUrl.append("&response_type=code");
		
		return "redirect:"+loginUrl.toString();
	}
	
	// 카카오 로그인 성공
	@GetMapping("/kakaoLoginSuccess")
	public ModelAndView redirect(@RequestParam(value="code", required=false) String code, HttpSession session) throws IOException {
			
		Map<String, String> map = new HashMap<String, String>();
		map.put("grant_type", "=authorization_code");
		map.put("client_id", "=1aecad2ec9281b4fa38d54505765097b"); //카카오 앱에 있는 REST KEY
		map.put("redirect_uri", "=http://localhost:8080/emotiary/kakaoLoginSuccess"); //카카오 앱에 등록한 redirect URL
		map.put("code", "="+code);

		HttpConnection conn = HttpConnection.getInstance();
		String out = conn.HttpPostConnection("https://kauth.kakao.com/oauth/token", map).toString();
		
		ObjectMapper mapper = new ObjectMapper();
		KakaoLoginOutput output = mapper.readValue(out, KakaoLoginOutput.class);
		
		System.out.println(output);
		session.setAttribute("access_token", output.getAccess_token());
		
		return new ModelAndView("/login");
	}
	
	// 카카오 로그아웃
	@PostMapping(value="/kakaoLogout")
	public String access(HttpSession session) throws IOException {
		
		String access_token = (String)session.getAttribute("access_token");
		Map<String, String> map = new HashMap<String, String>();
		map.put("Authorization", "Bearer "+ access_token);

		HttpConnection conn = HttpConnection.getInstance();
		String result = conn.HttpPostConnection("https://kapi.kakao.com/v1/user/logout", map).toString();
		System.out.println(result);
		
		return "Kakao Logout Success!";
	}
	
	// 비밀번호 찾기
	@PostMapping("/findPassword")
	public String findPassword(@RequestBody Map<String, Object> paramMap) {
		
		//임시 비밀번호 생성(UUID이용)
		String tempPw = UUID.randomUUID().toString().replace("-", ""); //-를 제거
		tempPw = tempPw.substring(0,10); //tempPw를 앞에서부터 10자리 잘라줌
		
		String setFrom = "powermind4pow@gmail.com"; // email-config에 설정한 자신의 이메일 주소를 입력 
		String toMail = (String)paramMap.get("emailForPw");
		String title = "EMOTIARY 임시 비밀번호입니다."; // 이메일 제목 
		String content = 
				"안녕하세요." + 	//html 형식으로 작성 
                "<br><br>" + 
			    "임시 비밀번호는 " + tempPw + "입니다." + 
			    "<br>" + 
			    "해당 임시 비밀번호로 로그인하신 뒤 비밀번호를 변경해주세요."; //이메일 내용 삽입
		mailService.mailSend(setFrom, toMail, title, content);
		
		SHA_256 sha_256 = new SHA_256();
		String salt = sha_256.encrypt((String)tempPw);
		paramMap.put("pw", tempPw);
		paramMap.put("salt", tempPw+salt);
		
		try {
		userService.modifyPassword(paramMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "Temp Password Submit!";
	}
	
}
