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
	return '<button type ="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
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
