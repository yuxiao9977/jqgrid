<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jqgrid</title>
<!-- jqGrid组件基础样式包-必要 -->
<link rel="stylesheet" href="<%=path%>/jqgrid/jqgrid/css/ui.jqgrid.css" />

<!-- jqGrid主题包-非必要 --> 
<!-- 在jqgrid/css/css这个目录下还有其他的主题包，可以尝试更换看效果 -->
<link rel="stylesheet" href="<%=path%>/jqgrid/jqgrid/css/css/redmond/jquery-ui-1.8.16.custom.css" />

<!-- jquery插件包-必要 -->
<!-- 这个是所有jquery插件的基础，首先第一个引入 -->
<script type="text/javascript" src="<%=path%>/jqgrid/js/jquery.min.js"></script>

<!-- jqGrid插件包-必要 -->
<script type="text/javascript" src="<%=path%>/jqgrid/jqgrid/js/jquery.jqGrid.src.js"></script>
<script type="text/javascript" src="<%=path%>/jqgrid/jqgrid/js/grid.treegrid.js"></script>

<!-- jqGrid插件的多语言包-非必要 -->
<!-- 在jqgrid/js/i18n下还有其他的多语言包，可以尝试更换看效果 -->
<script type="text/javascript" src="<%=path%>/jqgrid/jqgrid/js/i18n/grid.locale-cn.js"></script>

<script type="text/javascript">
	var path = "<%=path%>";
</script>

<!-- 本页面初始化用到的js包，创建jqGrid的代码就在里面 -->
<script type="text/javascript" src="<%=path%>/jqgrid/js/index.js"></script>
</head>
<body onload="pageInit()">
	<table id="list2"></table>
	<div id="pager2"></div>
	<table id="list3"></table>
</body>
</html>