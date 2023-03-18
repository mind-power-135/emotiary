package com.mindpower.emotiary;

import com.mindpower.emotiary.main.MainDao;
import com.mindpower.emotiary.main.MainService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmotiaryApplicationTests {

	@Autowired
	MainService mainService;
	@Test
	void MainEmotionsList() {
		mainService.selectEmotionsList();
	}

}
