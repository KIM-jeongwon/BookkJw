<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath() %>"/>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="${context}/resources/js/app.js"></script>
	<script src="${context}/resources/js/view.js"></script>
	<link rel="stylesheet" href="${context}/resources/css/style.css" />
</head>
<body>
<div id="wrapper">
	
</div>
</body>
</html>
<script>
app.init('${context}');
</script>