import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Reset variables and commands
		
		/* remove(ref(db));
		
		update(ref(db, 'variables'), {
			spinning_miliseconds: 7500,
			spinning_rotating_degree: 0,
			spinning_random_degree: 0,
			round: '',
			
			contestant_1_name: '',
			contestant_2_name: '',
			contestant_3_name: '',
			
			contestant_1_score_round: 0,
			contestant_2_score_round: 0,
			contestant_3_score_round: 0,
			
			contestant_1_score_total: 0,
			contestant_2_score_total: 0,
			contestant_3_score_total: 0,
			
			buzzer_toggle: 0,
			buzzer_status: 0,
			buzzer_number: 0
		})
		
		update(ref(db, 'variables/letters'), {
			category : '',
			hint : ''
		})
		
		for(var i = 1; i <= 64; i++){
			update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + i] : '' })
			update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + i] : '' })
			update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + i] : false })
			update(ref(db, 'variables/letters/status'), { ['letter_' + i] : 0 })
		}
		
		update(ref(db, 'commands'), {
			
		}) */
		
		// Get data
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
			
			if(data.buzzer_status == 1){
				$('#tossup_buzzer').click();
				update(ref(db, 'variables'), { buzzer_status: 0 })
			}
		})
		
		onValue(ref(db, 'variables/letters'), (snapshot) => {
			const data = snapshot.val();
			
			$('#qi_category').html(data.category);
			$('#qi_hint').html(data.hint);
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			
			// Button Function using Commands Data
		})
		
		// Button Function
		
		$('button[name="autocmd"]').click(function(){
			update(ref(db, 'commands'), { [this.id] : 1 })
		})
		$('button[name="autocmd_class"]').click(function(){
			update(ref(db, 'commands'), { [this.className] : 1 })
		})
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});