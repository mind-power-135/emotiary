package com.mindpower.emotiary.user;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.mindpower.emotiary.common.SHA_256;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController // @ResponseBody 안 써도 됨
//@Controller
public class UserController {
	
	@Autowired
	UserService userService;
	
	// 회원가입 페이지
	// @GetMapping("/register")
	@RequestMapping(value = "/register", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView register() throws Exception {
		return new ModelAndView("/register");
	}
	
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
	
	// 아이디 중복체크
	@PostMapping("/idCheck")
	public int idCheck(@RequestBody String account) throws Exception {
		int num = userService.idCheck(account);
		if(num == 1) {
			return num;
		} else {
			return num;
		}
	}
	
	
	// 카카오 회원가입
	
	// 이메일 회원가입
	
	// 로그인 페이지
	//@GetMapping("/login")
	@RequestMapping(value = "/login", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView login() throws Exception {
		return new ModelAndView("/login");
	}
	
	
	// 일반 로그인
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
	
	// 카카오 로그인
	
	// 이메일 로그인
	
	// 로그아웃
	@PostMapping("/logout")
	public String logout(HttpSession session) throws Exception {
		session.invalidate();
		return "Logout Success!";
	}

}
