package com.mindpower.emotiary.school;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.*;


// @Controller("user-data-controller")
// @RequestMapping("/accounts")
@RestController
public class SchoolController {

    private Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * Json 데이터 파싱을 위한 매퍼 정의
     */
    private static final ObjectMapper MAPPER = new ObjectMapper();

    /**
     * 학교검색 (커리어넷 Open API 를 사용 )
     * <p>
     * <p>
     * 파라메터 gubun 학교구분 값 [필수]:
     * <ul>
     * <li>초등학교 : elem_list</li>
     * <li>중학교 :midd_list</li>
     * <li>고등학교 : high_list</li>
     * <li>대학교 : univ_list</li>
     * <li>특수/각종기타학교 : seet_list</li>
     * <li>대안학교 : alte_list</li>
     * </ul>
     *
     * @param gubun    학교구분
     * @param request
     * @param response
     * @return
     */

    //@RequestMapping(value="/school/list.json",method={RequestMethod.POST} )
    @PostMapping("/school/list.json")
    public SchoolItemList findSchool(@RequestBody Map<String, Object> paramMap, HttpServletRequest request, HttpServletResponse response) throws Exception {

        String gubun = (String) paramMap.get("gubun");
        String region = (String) paramMap.get("region");
        String name = (String) paramMap.get("name");
        String page = String.valueOf(paramMap.get("page")); // 바로 형변환 하면 500에러 뜨므로 String.valueOf() 이용
        String pageSize = String.valueOf(paramMap.get("pageSize"));

        SchoolItemList items = new SchoolItemList(Collections.EMPTY_LIST, 0);
        StringBuilder sb = new StringBuilder("http://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=9cd0fb892f0a37f05518e97bd74603c9&svcType=api&svcCode=SCHOOL&contentType=json");
        sb.append("&gubun=").append(gubun);
        if (!StringUtils.isEmpty(region)) {
            sb.append("&region=").append(region);
        }

        if (!StringUtils.isEmpty(name)) {
            String UrlName = URLEncoder.encode(name, "UTF-8");
            // sb.append("&searchSchulNm=").append(name); // 이렇게 하면 검색한 한글이 바로 들어가서 java.io.IOException: Server returned HTTP response code: 400 for URL 에러.
            // sb.append("&searchSchulNm=").append("%EB%8F%99%EC%8B%A0"); // 동신 - https://www.career.go.kr/cnet/front/openapi/openApiSchoolCenter.do
            sb.append("&searchSchulNm=").append(UrlName);
        }

        sb.append("&thisPage=").append(page);
        sb.append("&perPage=").append(pageSize);

        try {
            URL url = new URL(sb.toString());
            URLConnection connection = url.openConnection();
            InputStream is = connection.getInputStream();
            JsonNode jn = MAPPER.readTree(is);
            JsonNode jn2 = jn.get("dataSearch").get("content");
            Iterator<JsonNode> iter = jn2.elements();
            List<School> list = new ArrayList<School>();
            while (iter.hasNext()) {
                JsonNode jn3 = iter.next();
                if (items.getTotalCount() == 0)
                    items.setTotalCount(jn3.get("totalCount").asInt());
                list.add(new School(
                        jn3.get("seq").asInt(0),
                        jn3.get("schoolName").textValue(),
                        jn3.get("region").textValue(),
                        jn3.get("adres").textValue()
                ));
            }

            items.setItems(list);

        } catch (Exception e) {
            logger.error("CAREER API ERROR", e);
        }
        return items;
    }

}