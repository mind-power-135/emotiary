package com.mindpower.emotiary.user;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mindpower.emotiary.common.CommonDao;

@Repository
public class UserDao extends CommonDao {
	
	// 회원가입
	public String insertUser(Map<String, Object> paramMap) throws SQLException {
		return sqlSession.selectOne(UserDao.class.getName() + ".insertUser", paramMap);
	}

}
