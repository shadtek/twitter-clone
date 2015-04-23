$(document).ready(function() {
	$('#tweet-controls').hide()
		$('.tweet-compose').on('click', function() {
			$('#tweet-controls').show()
			$(this).css({
				height: '5em'
		})
	})

	$('#tweet-content .tweet-compose').on('keyup', function() {
		var count = 140
		var tweetLen = $('#tweet-content .tweet-compose').val().length
		var stuff = count - tweetLen
		$('#char-count').text(stuff)
		if (tweetLen > 130) {
			$('#char-count').css({
				color: 'red'
			})
		} else {
			$('#char-count').css({
				color: '#999'
			})
		}
		if (stuff < 0) {
			$('#tweet-submit').prop('disabled', true)
		} else {
			$('#tweet-submit').prop('disabled', false)
		}
	})

	$('#tweet-submit').on('click', function(){

		var newTweet = $('.tweet:first').clone();
		newTweet.find('.avatar').prop('src', 'img/shadtek.jpg');
		newTweet.find('.fullname').html('Spencer Shattuck');
		newTweet.find('.username').html('@shadtek');
		newTweet.find('.tweet-text').html($('.tweet-compose').val());
		$('#stream').prepend(newTweet);
		
		$('#tweet-controls').hide();
		$('#tweet-content .tweet-compose').css({
			height: '2.5em'
		});

	})

})