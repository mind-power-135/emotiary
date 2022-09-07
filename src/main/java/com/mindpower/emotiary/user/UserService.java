package com.mindpower.emotiary.user;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService {

	@Autowired
	private UserDao userDao;
	
	// 회원 목록
	public List<Map<String, Object>> getUsersList(Map<String, Object> vo) throws Exception {
		return userDao.selectUsersList(vo);
	}
	
	// 회원가입
	public Map<String, Object> addUser(Map<String, Object> vo) throws Exception {
		return userDao.insertUser(vo);
	}
	
	// 회원가입
	public int idCheck(String account) throws Exception {
		return userDao.idCheck(account);
	}
	
	// 로그인 
	public Map<String, Object> loginCheck(Map<String, Object> vo) throws Exception {
		return userDao.loginCheck(vo);
	}
	
	// 비밀번호 찾기
	public Map<String, Object> modifyPassword(Map<String, Object> vo) throws Exception {
		return userDao.updatePassword(vo);
	}
	
}
