import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Get data

		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();

			if (data.buzzer_number != 0 && data.buzzer_number != undefined) {
				$('.who_buzzers').html(data.buzzer_number + '. ' + eval('data.contestant_' + data.buzzer_number + '_name'));
			}
			else {
				$('.who_buzzers').html('');
			}

			if (data.buzzer_toggle == 1 && eval("data.player_" + number_of_player + "_allow_buzzer") == true) {
				$('.buzzer').removeAttr('disabled');
			}
			else {
				$('.buzzer').attr('disabled', true);
			}
		})

		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();

			if (data.reload == 1) {
				location.reload(true);
				update(ref(db, 'commands'), { reload: 0 });
			}

		})

		// Button Function

		$('.buzzer').click(function () {
			$('.buzzer').attr('disabled', true);
			update(ref(db, 'variables'), {
				buzzer_status: 1,
				buzzer_number: number_of_player
			})
		})

		// Action

		$(".order").html(number_of_player);

		$('.who_buzzers').attr('disabled', true);

		$('.prev_wheel').click(function () {
			$('.prev_wheel, .prev_puzzle').attr('disabled', true);
			$('.prev_puzzle').removeAttr('disabled');
			$('.preview').css('opacity', 0);
			$('#preview_1').css('opacity', 1);
		});

		$('.prev_puzzle').click(function () {
			$('.prev_wheel, .prev_puzzle').attr('disabled', true);
			$('.prev_wheel').removeAttr('disabled');
			$('.preview').css('opacity', 0);
			$('#preview_2').css('opacity', 1);
		});

		$('.prev_wheel').click();

	}(window.CNKDCGV = window.CNKDCGV || {}));
});