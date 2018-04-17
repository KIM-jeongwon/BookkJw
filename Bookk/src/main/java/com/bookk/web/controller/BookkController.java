package com.bookk.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookk.web.domain.Page;
import com.bookk.web.domain.PageAdapter;
import com.bookk.web.mapper.BoardMapper;
import com.bookk.web.service.ICountService;
import com.bookk.web.service.IGetService;
import com.bookk.web.service.ISearchService;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("")
public class BookkController {

	private static final Logger logger = LoggerFactory.getLogger(BookkController.class);
	@Autowired
	Page page;
	@Autowired
	BoardMapper mapper;
	@Autowired
	PageAdapter adapter;

	@RequestMapping("/articles/{pageNum}")
	public Map<?, ?> getArticles(@PathVariable String pageNum) {
		logger.info("welcom control {}", "getArticles");
		Map<String, Object> map = new HashMap<>();
		page.setTotalCount((int) new ICountService() {

			@Override
			public Object execute(HashMap<?, ?> param) {

				return mapper.selectBoardCount(param);
			}
		}.execute((HashMap<?, ?>) map));
		page.setPageSize(3);
		page.setBlockSize(3);
		page.setPageNum(Integer.parseInt(pageNum));
		page = (Page) adapter.attr(page);
		map.put("page", page);

		map.put("list", new IGetService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return mapper.boardList(param);
			}
		}.execute((HashMap<?, ?>) map));

		System.out.println(map.get("list"));
		return map;

	}

	@RequestMapping("/searchArticle/{search}")
	public Map<?, ?> search(
			@PathVariable("search") String search,
			@RequestBody HashMap<String, String> param) {
		Map<String, Object> map = new HashMap<>();
		Object o = null;
		param.get("data");
		System.out.println(search);
		System.out.println(param.get("data"));
		switch (param.get("type")) {
		case "co_title":
			System.out.println("title");
				o = new ISearchService() {
					
					@Override
					public Object execute(HashMap<?, ?> param) {
						// TODO Auto-generated method stub
						return mapper.searchAll(param);
					}
				}.execute(param);
			break;
			
		case "titleContent":
			System.out.println("titleContent");
			o = new ISearchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAll(param);
				}
			}.execute(param);
			break;
			
		case "content":
			System.out.println("content");
			o = new ISearchService() {
				
				@Override
				public Object execute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAll(param);
				}
			}.execute(param);
			break;
		}
		System.out.println(o);
		map.put("o", o);
		
		
		return map;

	}

}
