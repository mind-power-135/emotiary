package com.mindpower.emotiary.user;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService {

	@Autowired
	private UserDao userDao;
	
	// ȸ�� ���
	public List<Map<String, Object>> getUsersList(Map<String, Object> vo) throws Exception {
		return userDao.selectUsersList(vo);
	}
	
	// ȸ������
	public Map<String, Object> addUser(Map<String, Object> vo) throws Exception {
		return userDao.insertUser(vo);
	}
	
	// ���̵� �ߺ�üũ
	public int idCheck(String account) throws Exception {
		return userDao.idCheck(account);
	}
	
	// �α��� 
	public Map<String, Object> loginCheck(Map<String, Object> vo) throws Exception {
		return userDao.loginCheck(vo);
	}
	
}
