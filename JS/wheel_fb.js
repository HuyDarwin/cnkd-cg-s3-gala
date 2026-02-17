import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Reset variables and commands

		update(ref(db, 'variables'), {

		})

		update(ref(db, 'commands'), {

		})

		// Get data


		var a;
		var b;
		var c;
		var d;

		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
			a = data.spinning_rotating_degree,
			b = data.spinning_random_degree,
			c = data.spinning_miliseconds,
			d = data.spinning_fspin_miliseconds
		})

		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();

			if (data.reload == 1) {
				location.reload(true);
				update(ref(db, 'commands'), { reload: 0 });
			}


			if (data.cwb_main == 1) {
				$('.wheel_backdrop div').css('opacity', 0)
				//$('.wheel_backdrop video').trigger('pause');
				$('#wheel_main').css('opacity', 1)
				//$('#wheel_main').trigger('play');
				update(ref(db, 'commands'), { cwb_main: 0 })
			}
			if (data.cwb_red == 1) {
				$('.wheel_backdrop div').css('opacity', 0)
				//$('.wheel_backdrop video').trigger('pause');
				$('#wheel_red').css('opacity', 1)
				//$('#wheel_red').trigger('play');
				update(ref(db, 'commands'), { cwb_red: 0 })
			}
			if (data.cwb_yellow == 1) {
				$('.wheel_backdrop div').css('opacity', 0)
				//$('.wheel_backdrop video').trigger('pause');
				$('#wheel_yellow').css('opacity', 1)
				//$('#wheel_yellow').trigger('play');
				update(ref(db, 'commands'), { cwb_yellow: 0 })
			}
			if (data.cwb_blue == 1) {
				$('.wheel_backdrop div').css('opacity', 0)
				//$('.wheel_backdrop video').trigger('pause');
				$('#wheel_blue').css('opacity', 1)
				//$('#wheel_blue').trigger('play');
				update(ref(db, 'commands'), { cwb_blue: 0 })
			}

			if (data.cw_v1 == 1) {
				$('.wheel').css('background-image', 'url("Assets/nón%20v1%403x.png")');
				update(ref(db, 'commands'), { cw_v1: 0 })
			}
			if (data.cw_v2 == 1) {
				$('.wheel').css('background-image', 'url("Assets/nón%20v2%403x.png")');
				update(ref(db, 'commands'), { cw_v2: 0 })
			}
			if (data.cw_v3 == 1) {
				$('.wheel').css('background-image', 'url("Assets/nón%20v2%403x.png")');
				update(ref(db, 'commands'), { cw_v3: 0 })
			}
			if (data.cw_v4 == 1) {
				$('.wheel').css('background-image', 'url("Assets/nón%20v3_tuket@3x.png")');
				update(ref(db, 'commands'), { cw_v4: 0 })
			}
			if (data.spin == 1) {
				var spinning_final_rotating_degree = (a + b) % 360;
				$('.wheel').rotate(a + b, c, a, function () {
					$('.wheel').rotate(spinning_final_rotating_degree, 0, spinning_final_rotating_degree);
					update(ref(db, 'variables'), { spinning_rotating_degree: spinning_final_rotating_degree })
				});
				update(ref(db, 'commands'), { spin: 0 })
			}
			if (data.fspin == 1) {
				var spinning_final_rotating_degree = (a + b) % 360;
				$('.wheel').rotate(a + b, d, a, function () {
					$('.wheel').rotate(spinning_final_rotating_degree, 0, spinning_final_rotating_degree);
					update(ref(db, 'variables'), { spinning_rotating_degree: spinning_final_rotating_degree })
				});
				update(ref(db, 'commands'), { fspin: 0 })
			}
			/*
				  if(data.awt_1m == 1){
					  $('#wwt_1m').css('opacity', 1);
				  }
				  if(data.awt_ex == 1){
					  $('#wwt_ex').css('opacity', 1);
				  }
				  if(data.awt_jack == 1){
					  $('#wwt_jack').css('opacity', 1);
				  }
				  if(data.awt_may == 1){
					  $('#wwt_may').css('opacity', 1);
				  }
				  if(data.awt_mys == 1){
					  $('#wwt_mys_1, #wwt_mys_2').css('opacity', 1);
				  }
				  if(data.awt_gift == 1){
					  $('#wwt_gift').css('opacity', 1);
				  }
				  if(data.awt_rui == 1){
					  $('#wwt_rui').css('opacity', 1);
				  }
				  if(data.awt_switch == 1){
					  $('#wwt_switch').css('opacity', 1);
				  }
				  if(data.awt_them == 1){
					  $('#wwt_them').css('opacity', 1);
				  }
				  if(data.awt_wild == 1){
					  $('#wwt_wild').css('opacity', 1);
				  }
			*/

			$('#wwt_1m').css('opacity', data.awt_1m);
			$('#wwt_ex').css('opacity', data.awt_ex);
			$('#wwt_qn').css('opacity', data.awt_qn);
			$('#wwt_may').css('opacity', data.awt_may);
			$('#wwt_mys_1, #wwt_mys_2').css('opacity', data.awt_mys);
			$('#wwt_gift').css('opacity', data.awt_gift);
			$('#wwt_rui').css('opacity', data.awt_rui);
			$('#wwt_ks').css('opacity', data.awt_ks);
			$('#wwt_them').css('opacity', data.awt_them);
			$('#wwt_wild').css('opacity', data.awt_wild);
			$('#wwt_half_1').css('opacity', data.awt_half_1);
			$('#wwt_half_2').css('opacity', data.awt_half_2);

			if (data.reset_wedges_tags == 1) {
				$('.wheel_wedges_tags').css('opacity', 0);
				update(ref(db, 'commands'), {
					awt_1m: 0,
					awt_ex: 0,
					awt_jack: 0,
					awt_may: 0,
					awt_mys: 0,
					awt_gift: 0,
					awt_rui: 0,
					awt_switch: 0,
					awt_them: 0,
					awt_wild: 0,
					awt_qn: 0,
					awt_ks: 0,
					reset_wedges_tags: 0
				})
			}
		})

		// Action

		$('#wwt_1m').css('transform', 'rotate(225deg)');
		$('#wwt_ex').css('transform', 'rotate(150deg)');
		$('#wwt_qn').css('transform', 'rotate(60deg)');
		$('#wwt_may').css('transform', 'rotate(210deg)');
		$('#wwt_mys_1').css('transform', 'rotate(165deg)');
		$('#wwt_mys_2').css('transform', 'rotate(345deg)');
		$('#wwt_gift').css('transform', 'rotate(15deg)');
		$('#wwt_rui').css('transform', 'rotate(105deg)');
		$('#wwt_ks').css('transform', 'rotate(150deg)');
		$('#wwt_them').css('transform', 'rotate(150deg)');
		$('#wwt_wild').css('transform', 'rotate(300deg)');
		$('#wwt_half_1').css('transform', 'rotate(60deg)');
		$('#wwt_half_2').css('transform', 'rotate(255deg)');

	}(window.CNKDCGV = window.CNKDCGV || {}));
});