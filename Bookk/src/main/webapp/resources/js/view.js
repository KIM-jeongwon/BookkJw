var createButton=x=>{
	return '<button type ="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
}
var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'">'+x.val+'</a>';
};
var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};
var createBorderATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'" clazz:"'+x.clazz+'" role="'+x.role+'" data-slide="'+x.slide+'" >'+x.val+'</a>';
}
var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
};

var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
};
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
	}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInputText=x=>{
	return $('<input type="text" id="'+x.id+'"class="'+x.clazz
      +'"placeholder="example">');
}
var createInputButton=x=>{
	return '<input type="'+x.type+'" class ="'+x.clazz+'"/>'
}
var createButton=x=>{
    return  '<button id="'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}

var createText=x=>{
	return '<span id="'+x+'"></span>';
}
var createHeader=x=>{
	return '<header></header>'
}
var createFooter=x=>{
	return '<footer></footer>'
}
var createOL=x=>{
	return '<ol id="'+x.id+'"class="'+x.clazz+'"></ol>';
}
var createImage=x=>{
	return '<img id="'+x.id+'" src="'+x.src+'" class="'+x.clazz+'"/>';
}
var createForm=x=>{
    return '<form id="'+x.id+'" class="'+x.clazz+'"></form>'
}
var createInput=x=>{
    return '<input id="'+x.id+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}
var createSelect=x=>{
    return '<select id="'+x.id+'"></select>'
}
var createOption=x=>{
    return '<option value="'+x.val+'">'+x.txt+'</option>'
}

var createTab=x=>{
	var a= 1;
	var tab = '<table id="'+x.id+'" class="'+x.clazz+'">'
				+'</table>'
	return tab;
}
var createTH=x=>{
	var th ='<tr>'
		$.each(x.thList, (i,j)=>{
			th +='<th id="'+x.id+'">'+j+'</th>'		
		})
			th +='</tr>'
		return th;
}
var createTRJW =x=>{
	var q =0;
	var tr = '';
	$.each(x.list, (i,j)=>{
		tr+='<tr id="jw_'+(q++)+'" class ="'+x.clazz+'">'
		+createTDJW(j)+'</tr>';
	});
	return tr;
}
var createTDJW=x=>{
	var td ='';
	var w =0;
	td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
	+x.bID+'</td>';
	td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'" >'
	+x.title+'</td>';
	td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'" >'
	+x.memID+'</td>';
	td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
	+x.viewNum+'</td>';
	td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
	+x.createDate+'</td>';
	return td;
}
var createFont=x=>{
	return '<font>'+x.val+'</font>';
}
var textarea=x=>{
	return '<textarea id="'+x.id+'">'
}
