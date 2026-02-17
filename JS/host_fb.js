import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Functions

		function AnimateKSTextArea() {
			for (var i = 0; i <= 2; i++) {
				setTimeout(function(){
					$('#qi_ks').css("color", "aqua");
					$('#qi_ks').css("border-color", "aqua");
					setTimeout(function(){
						$('#qi_ks').css("color", "white");
						$('#qi_ks').css("border-color", "white");
					}, 150);
				}, 300 * i);
			}
		}
		
		// Get data

		var ks_content = "";
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
			
			$('#cs_c1 #cs_td_name').html(data.contestant_1_name);
			$('#cs_c2 #cs_td_name').html(data.contestant_2_name);
			$('#cs_c3 #cs_td_name').html(data.contestant_3_name);
			
			$('#cs_c1 #cs_td_round').html(data.contestant_1_score_round);
			$('#cs_c2 #cs_td_round').html(data.contestant_2_score_round);
			$('#cs_c3 #cs_td_round').html(data.contestant_3_score_round);
			
			$('#cs_c1 #cs_td_total').html(data.contestant_1_score_total);
			$('#cs_c2 #cs_td_total').html(data.contestant_2_score_total);
			$('#cs_c3 #cs_td_total').html(data.contestant_3_score_total);
			
			$('.contestants_score td').css('background-color','black');
			if(data.buzzer_number != 0 && data.buzzer_number != undefined){
				$('#cs_c' + data.buzzer_number + ' #cs_td_name, #cs_c' + data.buzzer_number + ' #cs_td_round, #cs_c' + data.buzzer_number + ' #cs_td_total').css('background-color','green');
			}

			if (data.ket_sat_property != ks_content) {
				ks_content = data.ket_sat_property;
				$('#qi_ks').html(ks_content);
				AnimateKSTextArea();
			}

			$(".timer_text").html(data.timer);
		})
		
		onValue(ref(db, 'variables/letters'), (snapshot) => {
			const data = snapshot.val();
			
			$('#qi_category').html(data.category);
			$('#qi_hint').html(data.hint);
		})
		
		onValue(ref(db, 'variables/letters/status'), (snapshot) => {
			const data = snapshot.val();
			
			for(var i = 1; i <= 64; i++){
				if(eval('data.letter_' + i) == 0 || eval('data.letter_' + i) == 1 || eval('data.letter_' + i) == 5){
					$('#letter_' + i + ' div').css('opacity','1');
				}
				else{
					$('#letter_' + i + ' div').css('opacity','0.25');
				}
			}
		})
		
		onValue(ref(db, 'variables/letters/no_tonemark'), (snapshot) => {
			const data = snapshot.val();
			
			for(var i = 1; i <= 64; i++){
				if(eval('data.letter_' + i) == '$'){
					$('#letter_' + i + ' div').css('color','aqua');
				}
				else{
					$('#letter_' + i + ' div').css('color','white');
				}
			}
		})
		
		onValue(ref(db, 'variables/letters/having_tonemark'), (snapshot) => {
			const data = snapshot.val();
			
			for(var i = 1; i <= 64; i++){
				if(eval('snapshot.val().letter_' + i) == '.'){
					$('#letter_' + i + ' div').html('');
				}
				else{
					$('#letter_' + i + ' div').html(eval('snapshot.val().letter_' + i));
				}
			}
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			if (data.reload_host == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload_host : 0 });
			}
			
		})
		
		// Button Function
		
		$('.pick_letter').click(function(){
			$('#' + this.id).attr('disabled', true);
			$('#pl_reset').removeAttr('disabled');
		})		
		$('#pl_reset').click(function(){
			$('#pl_reset').attr('disabled', true);
			$('.pick_letter').removeAttr('disabled');
		})
    
    $('.prev_wheel').click(function(){
      $('.prev_wheel, .prev_puzzle').attr('disabled', true);
      $('.prev_puzzle').removeAttr('disabled');
      $('.preview').css('opacity',0);
      $('#pre_wheel').css('opacity',1);
    });
    
    $('.prev_puzzle').click(function(){
      $('.prev_wheel, .prev_puzzle').attr('disabled', true);
      $('.prev_wheel').removeAttr('disabled');
      $('.preview').css('opacity',0);
      $('#pre_puzzleboard').css('opacity',1);
    });
    
    $('.prev_wheel').click();
		
		// Action
		
		var string = "";
		for(var j = 0; j <= 3; j++){
			string += "<tr>";
			for(var i = 1; i <= 14; i++){
				string += "<td class='letter' id='letter_" + (i + (13 * j) + j) + "'><div></div></td>"
			}
			string += "</tr>";
		}
		$('.puzzleboard_ans').html(string);
		
		$('#pl_reset, .question_info').attr('disabled', true);
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});