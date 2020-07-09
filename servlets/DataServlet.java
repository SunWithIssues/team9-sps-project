package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import com.google.gson.Gson;

/**
 *  Creates a page of json (or gson) that stores
 *    links or phrases.
 *  TODO: Have it use a google datastore.
 */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override
  public void init() {
    phrases = new ArrayList<>();
    phrases.add("1. Empty spot for link or phrase");
    phrases.add("2. Empty spot for link or phrase");
    phrases.add("3. Empty spot for link or phrase");
  }  


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJson(phrases);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(ArrayList sample) {
    Gson gson = new Gson();
    String json = gson.toJson(sample);
    return json;
  }
}
 