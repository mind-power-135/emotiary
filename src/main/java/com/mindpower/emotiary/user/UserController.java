package com.mindpower.emotiary.user;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import com.mindpower.emotiary.common.SHA_256;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class UserController {
	
	@Autowired
	UserService userService;
	
	// 회원가입 페이지
	@GetMapping("/register")
	public ModelAndView register() throws Exception {
		return new ModelAndView("/register");
	}
	
	// 일반 회원가입
	@PostMapping("/register")
	public String addUser(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		SHA_256 sha_256 = new SHA_256();
		String pw = sha_256.encrypt((String)paramMap.get("pw"));
		System.out.print("암호화된 pw:"+pw);
		paramMap.put("pw", pw);
		
		userService.addUser(paramMap);
		
        return "/register";
	}
	
	// 카카오 회원가입
	
	// 이메일 회원가입
	
	// 로그인
	/*
	 * @PostMapping("/login") public String login(@RequestBody Map<String, String>
	 * paramMap) throws Exception {
	 * 
	 * String id = (String)paramMap.get("id")
	 * 
	 * User member = userRepository.findByEmail(user.get("email")) .orElseThrow(()
	 * -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다.")); if
	 * (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
	 * throw new IllegalArgumentException("잘못된 비밀번호입니다."); } return
	 * jwtTokenProvider.createToken(member.getUsername(), member.getRoles()); }
	 */

}
