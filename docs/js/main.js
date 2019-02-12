$(function(e){
	let modalCount = $('.modal-content').length; // 有幾個Modal
	console.log(modalCount);

	// Scroll and show
	$('.block').smoove();

	// Animated Modal
	while(modalCount>0){
		$(".demo0"+modalCount).animatedModal({
			color:'#f8f8f8'
		});
		modalCount--;
	}
	

	// $(".demo02").animatedModal({
	// 	color:'#f8f8f8'
	// });

	// Click Link on Nav
	$('header .nav-link,header .dropdown-item').on('click',function(e){
		// e.preventDefault();

		let target = $(this).data('target'),
			targetPos =0;

		if(!target){
			return;
		}

		console.log(target);
		if(target == 'javascript' || target =='htmlcss' || target =='php'){
			console.log(target);
			targetPos = $('.works-section').offset().top;
		}else{
			targetPos = $(target).offset().top;
		}

		
			$('html').animate({
				scrollTop:targetPos+40,
			},1500);
		

		if(target == 'htmlcss'){
			$('.works-section .nav-link:eq(1)').click();
		}else if(target == 'php'){
			$('.works-section .nav-link:eq(2)').click();
		}



	});
	$('.closeModal').on('click',function(e){
		$('body').css('overflow','hidden');
	});
});