package com.mindpower.emotiary.common;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;

public class HttpConnection {

	public static final String ENCODING = "UTF-8";

	private HttpConnection(){}
	
	private static class HttpConnection_Singieton{
		private static final HttpConnection instance = new HttpConnection();
	}
	
	public static HttpConnection getInstance(){
		return HttpConnection_Singieton.instance;
	}
	
	//get��� rest ȣ��� ���
	public StringBuffer HttpGetConnection(String apiURL) throws IOException {
		StringBuffer response = new StringBuffer();

        URL url = new URL(apiURL);
        HttpURLConnection con = (HttpURLConnection)url.openConnection();
        con.setRequestMethod("GET");
        
        return responseHttp(con);
	}
	
	//post��� rest ȣ��� ���
	public StringBuffer HttpPostConnection(String apiURL, Map<String, String> params) throws IOException {
	      URL url = new URL(apiURL);
	      HttpURLConnection con = (HttpURLConnection)url.openConnection();
	      con.setRequestMethod("POST");
	      con.setDoOutput(true);
	      
	      //���࿡ �Ķ���Ϳ� Authorization�� �ִٸ� ����� �߰� �� params���� ����
	      if(params.get("Authorization") != null) {
	    	  con.setRequestProperty("Authorization", params.get("Authorization"));
	    	  params.remove("Authorization");
	      }
	      
	      // post request
	      // �ش� string�� UTF-8�� encode �� MS949�� �� encode�� ������ ��
	      BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(con.getOutputStream()));
          StringBuilder sb = new StringBuilder();
          
          int amp = 0;
          for( String key : params.keySet() ){
        	  //2��° �Ķ���ͺ��ʹ� ������ &�� �־���Ѵ�.
        	  if(amp >= 1) sb.append("&"); amp+=1; 
        	  
        	  sb.append(key+params.get(key));
        	     
          }
          
          System.out.println("�Ķ���� : " + sb.toString());
          
          bw.write(sb.toString());
          bw.flush();
	      bw.close();
          
	      return responseHttp(con);
	}
	
	//������ ��û�ϴ� �޼ҵ�
	public StringBuffer responseHttp(HttpURLConnection con) throws IOException {
		StringBuffer response = new StringBuffer();
		
	    int responseCode = con.getResponseCode();
	    BufferedReader br;
	    if(responseCode==200) { // ���� ȣ��
	        br = new BufferedReader(new InputStreamReader(con.getInputStream()));
	    } else {  // ���� �߻�
	        br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
	    }
	      
	    String inputLine;
	    while ((inputLine = br.readLine()) != null) {
	        response.append(inputLine);
	    }
	    br.close();
	    
	    return response;
	}
	
	//�Ķ���� URL ���ڵ�
	public String URLencoder(String contents) throws UnsupportedEncodingException {
		return URLEncoder.encode(URLEncoder.encode(contents, ENCODING), "MS949");
	}
	
}