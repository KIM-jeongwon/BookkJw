package com.bookk.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardMapper {
	public void insertBoard();
	public void updateBoard();
	public void deleteBoard();
	public List<?> boardList(HashMap<?, ?> param);
	public void selectBoard(HashMap<?, ?> param);
	public int selectBoardCount(HashMap<?, ?> param);
	public List<?> searchWriter(HashMap<?, ?> param);
	public List<?> searchWriterTitle(HashMap<?, ?> param);
	public List<?> searchTitle(HashMap<?, ?> param);
	public List<?> pageList(HashMap<?, ?> param);
}
