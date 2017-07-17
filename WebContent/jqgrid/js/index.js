function pageInit() {
	//创建jqGrid组件
	jQuery("#list2").jqGrid({
				url : path + '/jqgrid/data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : ['序号', '日期', '客户', '利润', '税费', '总数', '备注'],//jqGrid的列显示名字
				colModel : [//jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
		             {name : 'id',index : 'id',width : 55}, 
		             {name : 'invdate',index : 'invdate',width : 90}, 
		             {name : 'name',index : 'name asc, invdate',width : 100}, 
		             {name : 'amount',index : 'amount',width : 80,align : "right"}, 
		             {name : 'tax',index : 'tax',width : 80,align : "right"}, 
		             {name : 'total',index : 'total',width : 80,align : "right"}, 
		             {name : 'note',index : 'note',width : 150,sortable : false} 
				],
				rowNum : 8,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				mtype : "post"//向后台请求数据的ajax的类型。可选post,get
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit: true, add: true, del: true});
	
	
	$("#list3").jqGrid({
		treeGrid: true,
        treeGridModel: 'adjacency',
        ExpandColumn : 'name',
        url: path + '/jqgrid/data/JSONData2.json',
        datatype: 'json',
        mtype: "POST",
        ExpandColClick: true,
        colNames: ["姓名","id","地址"],
        colModel: [
            {name:'name', index:'name', width:110},
            {name:'id',index:'id', hidden:true},
            {name:'address', index:'address', width:110}
        ],
        jsonReader: {
            root: "rows",
            repeatitems: false
        },
        treeReader:{
        	level_field : "level_field",
			leaf_field : "leaf_field",
			parent_id_field : "parent_id_field",
			expanded_field : "expanded_field"
        },
	    caption: "jqGrid 动态(异步)树表格",
	    height: "300px"
	});
	
	
}