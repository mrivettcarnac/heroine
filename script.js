for (var i=0; i<guardianHeroinData.length; i++){
	
	var rowData = guardianHeroinData[i];
	
		var $quoteTemplate = $('<div class="quoteContainer">'+
									'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
									'<div class="readMore">Read more </div>'+
									'<div class="moreInfo">'+
										'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
										'<div class="source">'+rowData.source+':</div>'+'<div class="yearsClean">'+rowData.yearsClean+',</div>'+'<div class="location">'+rowData.location+'</div>'+
									'</div>'+
								'</div>');
		
		$('#dataContainer').append($quoteTemplate);
		
		$quoteTemplate.on('click',seeMoreInfo);
		
		function seeMoreInfo(e){
			var container = $(e.target).parent();
			
			if($(container).hasClass('expanded')){
				
				$(container).removeClass('expanded');
				
			}else{
				
				$(container).addClass('expanded');
					
			}; //end of if-else statement.
		}; //end of function seeMoreInfo.
	
} //end of for loop.
