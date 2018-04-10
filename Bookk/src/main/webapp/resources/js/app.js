var app = app || {};

app = {init : x=>{
	$.getScript(x+'/resources/js/router.js',()=>{
		$.extend(new Router(x));
		app.border.onCreate();
	});
}};

app.border=(()=>{
	var $wrapper,context,view;
	var onCreate=()=>{
		$wrapper = $('#wrapper');
		view = $.javascript()+'/view.js';
		setContentView();
	};
	
	var setContentView=()=>{
		$.getScript(view,()=>{
			$wrapper.html($(createDiv({id:'header',clazz:''})))
			.append($(createDiv({id:'div-body',clazz:''})))
			// Border Main Button
			
			$(createDiv({id:'jw-div',clazz:'container text-center'})).appendTo('#div-body');
			
			$(createDiv({id:'row-div',clazz:'row'})).appendTo('#jw-div').attr('style','padding: 30px; margin:0 auto; width:100%;  text-align: center;');
		/*
		 * $(createDiv({id:'image-div',clazz:'row'})).appendTo('#jw-div').attr('style','padding:
		 * 30px; margin:0 auto;');
		 */
			// notice
			
			$(createButton({id:'1-button',clazz:'col-sm-2',val:
				(createImage({
					id : 'img-1-btn', 
					src : 'https://files.slack.com/files-pri/T8NV14PJB-FA47Q1KAA/image.png', 
					clazz : 'img-1-btn'}))
					})).appendTo('#row-div')
									   .attr('style','height: 200px; padding: 0px; border: 1px solid #fff; width: 200px;display: inline-block;')	
									   .mouseover(()=>{
											$('#img-1-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA3545K44/image.png');
										})
										.mouseout(()=>{
											$('#img-1-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA47Q1KAA/image.png');
										});
			// qna
			$(createButton({id:'2-button',clazz:'col-sm-2',val:(createImage({
				id : 'img-2-btn', 
				src : 'https://files.slack.com/files-pri/T8NV14PJB-FA34CAZCL/image.png', 
				clazz : 'img-1-btn'}))
				})).appendTo('#row-div')
								   .attr('style','height: 200px; padding: 0px; border: 1px solid #fff; width: 200px;display: inline-block;')
								   .mouseover(()=>{
										$('#img-2-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA38YB0V9/image.png');
									})
									.mouseout(()=>{
										$('#img-2-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA34CAZCL/image.png');
									});
			// help
			$(createButton({id:'3-button',clazz:'col-sm-2',val:(createImage({
				id : 'img-3-btn', 
				src : 'https://files.slack.com/files-pri/T8NV14PJB-FA3B5HH0S/image.png', 
				clazz : 'img-1-btn'}))
				})).appendTo('#row-div')
								   .attr('style','height: 200px; padding: 0px; border: 1px solid #fff; width: 200px;display: inline-block;') 
								   .mouseover(()=>{
										$('#img-3-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA4DDB9N3/image.png');
									})
									.mouseout(()=>{
										$('#img-3-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA3B5HH0S/image.png');
									});
			// review
			$(createButton({id:'4-button',clazz:'col-sm-2',val:(createImage({
				id : 'img-4-btn', 
				src : 'https://files.slack.com/files-pri/T8NV14PJB-FA2L14LSU/image.png', 
				clazz : 'img-1-btn'}))
				})).appendTo('#row-div')
								   .attr('style','height: 200px; padding: 0px; border: 1px solid #fff; width: 200px;display: inline-block;')
								   .mouseover(()=>{
										$('#img-4-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA4DD75FH/image.png');
									})
									.mouseout(()=>{
										$('#img-4-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA2L14LSU/image.png');
									});
			// board
			$(createButton({id:'5-button',clazz:'col-sm-2',val:(createImage({
				id : 'img-5-btn', 
				src : 'https://files.slack.com/files-pri/T8NV14PJB-FA3F34HSR/image.png', 
				clazz : 'img-1-btn'}))
				})).appendTo('#row-div')
								   .attr('style','height: 200px; padding: 0px; border: 1px solid #fff; width: 200px;display: inline-block;')
								   .on('click',()=>{
									   alert('떳따 게시판');
									   borders();
								   })
								   .mouseover(()=>{
										$('#img-5-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA38T2JBD/image.png');
									})
									.mouseout(()=>{
										$('#img-5-btn').attr('src','https://files.slack.com/files-pri/T8NV14PJB-FA3F34HSR/image.png');
									});


		// Border Main Carousel
			$(createDiv({id:'myCarousel',clazz:'carousel slide'})).attr('data-ride','carousel').appendTo('#div-body');
			$(createOL({id:'ol-data',clazz:'carousel-indicators'})).appendTo('#myCarousel');
			$(createLI({id:'1-li',clazz:'board-li active'})).attr('data-target','#myCarousel').attr('data-slide-to','0').appendTo('#ol-data');		
			$(createLI({id:'2-li',clazz:'board-li'})).attr('data-target','#myCarousel').attr('data-slide-to','1').appendTo('#ol-data');
			$(createLI({id:'3-li',clazz:'board-li'})).attr('data-target','#myCarousel').attr('data-slide-to','2').appendTo('#ol-data');
			$(createLI({id:'4-li',clazz:'board-li'})).attr('data-target','#myCarousel').attr('data-slide-to','3').appendTo('#ol-data');
			$(createLI({id:'5-li',clazz:'board-li'})).attr('data-target','#myCarousel').attr('data-slide-to','4').appendTo('#ol-data');
			$(createLI({id:'6-li',clazz:'board-li'})).attr('data-target','#myCarousel').attr('data-slide-to','5').appendTo('#ol-data');
			// list-box
			$(createDiv({id:'inner-box',clazz:'carousel-inner'})).attr('role','listbox').appendTo('#myCarousel')
			.attr('style','margin-top:40px;');
			// 1 -box
			$(createDiv({id:'item-box',clazz:'item active'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://files.slack.com/files-pri/T8NV14PJB-F8X4J27ND/pasted_image_at_2018_01_24_03_32_pm.png'}))
			.attr('style','margin:0 auto;')
			.attr('style','width:100%; height:500px;').appendTo('#item-box');
			// 2 -box
			$(createDiv({id:'item2-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
			.attr('style','width:100%; height:500px;').appendTo('#item2-box');
			// 3-box
			$(createDiv({id:'item3-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
			.attr('style','width:100%; height:500px;').appendTo('#item3-box');
			// 4-box
			$(createDiv({id:'item4-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
			.attr('style','width:100%; height:500px;').appendTo('#item4-box');
			// 5- box
			$(createDiv({id:'item5-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe', clazz:''}))
			.attr('style','width:100%; height:500px;').appendTo('#item5-box');
			// 6- box
			$(createDiv({id:'item6-box',clazz:'item'})).appendTo('#inner-box');
			$(createImage({id:'',src:'https://placehold.it/1200x400?text=Another Image Maybe' , clazz:''}))
			.attr('style','width:100%; height:500px;').appendTo('#item6-box');
			

		});
	};
	var borders=x=>{
		alert('만호병신');
		$.getScript(view,()=>{
			$('#myCarousel').remove();
			$(createDiv({id:'borders-h',clazz:''})).appendTo('#div-body');
			$(createDiv({id:'left-side',clazz:''})).appendTo('#borders-h').attr('style','float:left; margin-left: 260px;');
			$(createUL({id:'left-ul',clazz:''})).appendTo('#left-side').attr('style','margin:0px; padding:0px; list-style:none; ');
			$(createLI({id:'1-left-li',clazz:''})).appendTo('#left-ul').attr('style',' height: 60px; line-height: 60px; border: 1px solid #dddddd; text-align: center; margin-top: -1px; position: relative;');
			$(createATag({id:'1-left-atag',link:'',val:'자유게시판'})).appendTo('#1-left-li').attr('style','padding:10px 50px 10px 50px');
			$(createLI({id:'2-left-li',clazz:''})).appendTo('#left-ul').attr('style',' height: 60px; line-height: 60px; border: 1px solid #dddddd; text-align: center; margin-top: -1px; position: relative;');;
			$(createATag({id:'2-left-atag',link:'',val:'작가노하우'})).appendTo('#2-left-li');
			$(createLI({id:'3-left-li',clazz:''})).appendTo('#left-ul').attr('style',' height: 60px; line-height: 60px; border: 1px solid #dddddd; text-align: center; margin-top: -1px; position: relative;');;
			$(createATag({id:'3-left-atag',link:'',val:'독서토론'})).appendTo('#3-left-li');
			
			// 오른쪽 상세내용
			$(createDiv({id:'borders-rb',clazz:''})).appendTo('#borders-h').attr('style','float:right;');
			$(createHTag({num:'1',val:'오른쪽게시판'})).appendTo('#borders-rb');
			$(createDiv({id:'board-search',clazz:''})).appendTo('#borders-rb');
		});
	}			
		
	return{onCreate:onCreate,borders:borders};
})();

