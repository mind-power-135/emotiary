package com.mindpower.emotiary.common;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;

public class CommonDao {
	
	@Autowired(required=false) //Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No matching bean of type [org.mybatis.spring.SqlSessionTemplate] found for dependency: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)} ���� ����
	protected SqlSessionTemplate sqlSession;

}
