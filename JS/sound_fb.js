import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Get data

		var h;
		var i;
		var bri;
		onValue(ref(db, 'variables'), (snapshot) => {
			h = snapshot.val().round
			i = snapshot.val().win_or_lose
			bri = snapshot.val().br_question_index
		})

		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();

			if (data.sound_intro == 1) {
				con.PlaySound("Assets/Intro.mp3", 1);
				update(ref(db, 'commands'), { sound_intro: 0 });
			}
			if (data.sound_theme_1 == 1) {
				con.PlaySound("Assets/Mùa 3 (Tứ Kết trở đi)/Celebrity Wheel Of Fortune Theme (Short).mp3", 5);
				update(ref(db, 'commands'), { sound_theme_1: 0 });
			}
			if (data.sound_theme_2 == 1) {
				con.PlaySound("Assets/Mùa 3 (Tứ Kết trở đi)/Celebrity Wheel Of Fortune Theme (Short, Version 2 ).mp3", 5);
				update(ref(db, 'commands'), { sound_theme_2: 0 });
			}
			if (data.sound_bg_1 == 1) {
				con.PlaySound("Assets/Background_1.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_1: 0 });
			}
			if (data.sound_bg_2 == 1) {
				con.PlaySound("Assets/Background%202.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_2: 0 });
			}
			if (data.sound_bg_3 == 1) {
				con.PlaySound("Assets/Background%203.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_3: 0 });
			}
			if (data.sound_bg_4 == 1) {
				con.PlaySound("Assets/Background%204.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_4: 0 });
			}
			if (data.sound_bg_5 == 1) {
				con.PlaySound("Assets/Background%205.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_5: 0 });
			}
			if (data.sound_bg_6 == 1) {
				con.PlaySound("Assets/Background%206.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_6: 0 });
			}
			if (data.sound_bg_7 == 1) {
				con.PlaySound("Assets/Wheel%20of%20Fortune%201983-1989%20Changing%20Keys%20Theme.mp3", 1);
				update(ref(db, 'commands'), { sound_bg_7: 0 });
			}
			if (data.sound_bg_8 == 1) {
				con.PlaySound("Assets/Background%208.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_8: 0 });
			}
			if (data.sound_bg_9 == 1) {
				con.PlaySound("Assets/Background%209.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_9: 0 });
			}
			if (data.sound_bg_10 == 1) {
				con.PlaySound("Assets/Background%2010.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_10: 0 });
			}
			if (data.sound_bg_11 == 1) {
				con.PlaySound("Assets/Background%2011.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_11: 0 });
			}
			if (data.sound_bg_12 == 1) {
				con.PlaySound("Assets/Background%2012.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_12: 0 });
			}
			if (data.sound_bg_13 == 1) {
				con.PlaySound("Assets/Background%2013.wav", 3);
				update(ref(db, 'commands'), { sound_bg_13: 0 });
			}

			if (data.sound_giaima == 1) {
				con.PlaySound("Assets/SFX%20ô%20chữ%20có%20CHP.mp3", 2);
				update(ref(db, 'commands'), { sound_giaima: 0 });
			}
			if (data.sound_wrong == 1) {
				con.StopAllSounds(4);
				con.PlaySound("Assets/Letter%20Buzzer.wav", 2);
				update(ref(db, 'commands'), { sound_wrong: 0 });
			}
			if (data.sound_wrong_nostop == 1) {
				con.PlaySound("Assets/Letter%20Buzzer.wav", 2);
				update(ref(db, 'commands'), { sound_wrong_nostop: 0 });
			}
			if (data.sound_br_double_buzzer == 1) {
				con.PlaySound("Assets/Double%20Buzzer%20(For%20Bonus%20Round).mp3", 2);
				update(ref(db, 'commands'), { sound_br_double_buzzer: 0 });
			}

			if (data.sound_1m == 1) {
				con.PlaySound("Assets/1%20Triệu%20CG.wav", 2);
				update(ref(db, 'commands'), { sound_1m: 0 });
			}
			if (data.sound_br == 1) {
				con.StopAllSounds(5);
				con.PlaySound("Assets/Bankrupt.wav", 2);
				update(ref(db, 'commands'), { sound_br: 0 });
			}
			if (data.sound_ch == 1) {
				con.PlaySound("Assets/Cơ%20Hội.wav", 2);
				update(ref(db, 'commands'), { sound_ch: 0 });
			}
			if (data.sound_jack == 1) {
				con.PlaySound("Assets/Độc%20Đắc.wav", 2);
				update(ref(db, 'commands'), { sound_jack: 0 });
			}
			if (data.sound_dd == 1) {
				con.PlaySound("Assets/Đổi%20Điểm.wav", 2);
				update(ref(db, 'commands'), { sound_dd: 0 });
			}
			if (data.sound_st == 1) {
				con.PlaySound("Assets/Express%20SFX.mp3", 2);
				update(ref(db, 'commands'), { sound_st: 0 });
			}
			if (data.sound_mm == 1) {
				con.PlaySound("Assets/May%20Mắn.wav", 2);
				update(ref(db, 'commands'), { sound_mm: 0 });
			}
			if (data.sound_mr == 1) {
				con.PlaySound("Assets/May%20Rủi.wav", 2);
				update(ref(db, 'commands'), { sound_mr: 0 });
			}
			if (data.sound_mys == 1) {
				con.PlaySound("Assets/Mystery.mp3", 2);
				update(ref(db, 'commands'), { sound_mys: 0 });
			}
			if (data.sound_tl == 1) {
				con.PlaySound("Assets/Thêm%20Lượt.wav", 2);
				update(ref(db, 'commands'), { sound_tl: 0 });
			}
			if (data.sound_half == 1) {
				con.PlaySound("Assets/1_2%20CG.mp3", 2);
				update(ref(db, 'commands'), { sound_half: 0 });
			}
			if (data.sound_ml == 1) {
				con.PlaySound("Assets/Lose%20A%20Turn%20(_).wav", 2);
				update(ref(db, 'commands'), { sound_ml: 0 });
			}
			if (data.sound_pt == 1) {
				con.PlaySound("Assets/Phần%20Thưởng.wav", 2);
				update(ref(db, 'commands'), { sound_pt: 0 });
			}
			if (data.sound_qn == 1) {
				con.PlaySound("Assets/club_levelup.wav", 2);
				update(ref(db, 'commands'), { sound_qn: 0 });
			}
			if (data.sound_ks == 1) {
				con.PlaySound("Assets/lucky_coin_redeem.wav", 2);
				update(ref(db, 'commands'), { sound_ks: 0 });
			}
			if (data.sound_ex_bg == 1) {
				con.StopAllSounds(4);
				con.PlaySound("Assets/Express%20Music.mp3", 5);
				update(ref(db, 'commands'), { sound_ex_bg: 0 });
			}
			if (data.sound_speedup_bg == 1) {
				con.StopAllSounds(4);
				con.PlaySound("Assets/Wheel%20Of%20Fortune%20Speed%20Up%20Music%20(2021-Present)%20(CLEAN).mp3", 4);
				update(ref(db, 'commands'), { sound_speedup_bg: 0 });
			}

			if (data.sound_br_spin == 1) {
				con.PlaySound("Assets/Bonus%20Spin%20Cue.mp3", 1);
				update(ref(db, 'commands'), { sound_br_spin: 0 });
			}
			/*
				  if (data.sound_br_trans == 1){
			  con.StopAllSounds(1)
					  con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Transition.mp3?v=1688743124414',3);
					  update(ref(db, 'commands'), { sound_br_trans : 0 });
				  }
			*/
			if (data.sound_br_rstlne == 1) {
				con.StopAllSounds(1)
				con.PlaySound("Assets/RSTLNE%20Reveal%20Cue.mp3", 5);
				update(ref(db, 'commands'), { sound_br_rstlne: 0 });
			}
			if (data.sound_br_3c1v == 1) {
				con.StopAllSounds(5)
				con.PlaySound("Assets/3%20Consonants%201%20Vowel%20Cue.mp3", 5);
				update(ref(db, 'commands'), { sound_br_3c1v: 0 });
			}
			if (data.sound_br_10s_think == 1) {
				con.StopAllSounds(5)
				con.PlaySound("Assets/10%20Seconds%20thinking%20.mp3", 1);
				update(ref(db, 'commands'), { sound_br_10s_think: 0 });
			}
			if (data.sound_br_10s == 1) {
				con.StopAllSounds(3)
				con.PlaySound("Assets/10%20Second%20Timer%20(With%20Buzzer).mp3", 1);
				update(ref(db, 'commands'), { sound_br_10s: 0 });
			}
			if (data.sound_br_win == 1) {
				con.StopAllSounds(1);
				con.PlaySound("Assets/Bonus%20Round%20Win.mp3", 4);
				update(ref(db, 'commands'), { sound_br_win: 0 });
			}
			if (data.sound_br_1m_win == 1) {
				con.StopAllSounds(1);
				con.PlaySound("Assets/Bonus%20Round%201%20Million%20Win.mp3", 4);
				update(ref(db, 'commands'), { sound_br_1m_win: 0 });
			}
			if (data.sound_br_lose == 1) {
				con.StopAllSounds(1);
				con.PlaySound("Assets/BR%20Loss%20Cue_.mp3", 4);
				update(ref(db, 'commands'), { sound_br_lose: 0 });
			}

			if (data.sound_letter == 1) {
				con.PlaySound("Assets/Letter%20_Ding_.mp3", 2);
				update(ref(db, 'commands'), { sound_letter: 0 });
			}
			if (data.sound_double_buzzer == 1) {
				con.PlaySound("Assets/Double%20Buzzer.wav", 2);
				update(ref(db, 'commands'), { sound_double_buzzer: 0 });
			}

			if (data.spin == 1) {
				//con.PlaySound("Assets/Wheel%20Spin%20Edit%202%20(With%20Spin%20SFX).mp3", 1);
				con.PlaySound("Assets/CNKD%20CG%20S3%20Wheel%20Spin%20Final.mp3", 1);
				update(ref(db, 'commands'), { spin: 0 });
			}
			if (data.fspin == 1) {
				con.PlaySound("Assets/CNKD%20CG%20S3%20Final%20Spin%20Final.mp3", 1);
				update(ref(db, 'commands'), { fspin: 0 });
			}
			if (data.puzzle_reveal == 1) {
				if (h != 'bonus_round') {
					con.PlaySound("Assets/Puzzle%20Reveal.wav", 1);
				}
				update(ref(db, 'commands'), { puzzle_reveal: 0 });
			}
			if (data.open_letter == 1) {
				if (h == 'tossup_1' || h == 'tossup_2' || h == 'triple_tossup_1' || h == 'tiebreak') {
					con.PlaySound("Assets/Triple%20Toss%20Up%20%231.mp3", 4);
				}
				else if (h == 'triple_tossup_2') {
					con.PlaySound("Assets/Triple%20Toss%20Up%20%232.mp3", 4);
				}
				else if (h == 'triple_tossup_3') {
					con.PlaySound("Assets/Triple%20Toss%20Up%20%233.mp3", 4);
				}
				update(ref(db, 'commands'), { open_letter: 0 });
			}
			if (data.tossup_buzzer == 1) {
				if (h == 'bonus_round') {
					con.PlaySound("Assets/EP30 ONLY/BR Multiplier Buzzer.mp3", 2);
				}
				else {
					con.PlaySound("Assets/Letter%20_Ding_.mp3", 2);
				}
				update(ref(db, 'commands'), { tossup_buzzer: 0 });
			}
			if (data.bonus_correct_once == 1) {
				con.PlaySound("Assets/EP30 ONLY/BR Multiplier Correct.mp3", 2);
				update(ref(db, 'commands'), { bonus_correct_once: 0 });
			}
			if (data.bonus_win == 1) {
				setTimeout(function () {
					con.StopAllSounds(2);
					con.StopAllSounds(4);
				}, 750);
				con.PlaySound("Assets/Mùa 3 (Tứ Kết trở đi)/Celeb Wheel bonus win long.mp3", 1);
				update(ref(db, 'commands'), { bonus_win: 0 });
			}
			if (data.bonus_lose == 1) {
				setTimeout(function () {
					con.StopAllSounds(2);
					con.StopAllSounds(4);
				}, 750);
				con.PlaySound("Assets/Double Buzzer (For Bonus Round).mp3", 1);
				update(ref(db, 'commands'), { bonus_lose: 0 });
			}
			if (data.puzzle_solve == 1) {
				if (h == 'tossup_1' || h == 'tossup_2' || h == 'triple_tossup_3' || h == 'tiebreak') {
					con.StopAllSounds(4);
					con.PlaySound("Assets/Toss%20Up%20Solve%20Cue.mp3", 1);
				}
				else if (h == 'triple_tossup_1' || h == 'triple_tossup_2') {
					con.PlaySound("Assets/Triple%20Toss%20Up%20Solve.mp3", 1);
					setTimeout(function () {
						con.StopAllSounds(4);
					}, 250)
				}
				else if (h != 'bonus_round') {
					con.StopAllSounds(4);
					con.StopAllSounds(5);
					con.PlaySound("Assets/2021%20Wheel%20of%20Fortune%20Puzzle%20Solve%20SFX%20-%20FULLY%20CLEAN!.mp3", 1);
				}
				update(ref(db, 'commands'), { puzzle_solve: 0 });
			}
			if (data.puzzle_fs == 1) {
				con.PlaySound("Assets/Wheel%20of%20fortune%20final%20spin%20bell.mp3", 1);
				update(ref(db, 'commands'), { puzzle_fs: 0 });
			}

			if (data.sound_45s == 1) {
				con.StopAllSounds(5);
				con.PlaySound("Assets/EP30 ONLY/CNKD CG M3 VDB 45s.mp3", 4);
				update(ref(db, 'commands'), { sound_45s: 0 });
			}

			if (data.sound_cus_1 == 1) {
				con.PlaySound("Assets/10s%20Countdown.mp3", 1);
				update(ref(db, 'commands'), { sound_cus_1: 0 });
			}
			if (data.sound_cus_2 == 1) {
				con.PlaySound("Assets/30s%20Countdown.mp3", 1);
				update(ref(db, 'commands'), { sound_cus_2: 0 });
			}
			if (data.sound_cus_3 == 1) {
				con.PlaySound("Assets/60s.mp3", 1);
				update(ref(db, 'commands'), { sound_cus_3: 0 });
			}
			if (data.sound_cus_4 == 1) {
				con.PlaySound("Assets/RightObstacle.mp3", 1);
				update(ref(db, 'commands'), { sound_cus_4: 0 });
			}
            if(data.sound_cus_5 == 1){
              con.PlaySound("Assets/y2mate.com%20-%20Cute%20Dog%20%20Cat%20Song.mp3", 1)
				update(ref(db, 'commands'), { sound_cus_5: 0 });
            }
            if(data.sound_cus_6 == 1){
              con.PlaySound("Assets/utomp3.com%20-%20miaw%20miaw%20miaw%20miaw%20sound%20sad%20viral%20tiktok.mp3", 1)
				update(ref(db, 'commands'), { sound_cus_6: 0 });
            }
            if(data.sound_cus_7 == 1){
              con.PlaySound("Assets/tuyệt%20đỉnh%20song%20ca.mp3", 1)
				update(ref(db, 'commands'), { sound_cus_7: 0 });
            }
            if(data.sound_cus_8 == 1){
              con.PlaySound("Assets/y2mate.com - Background Suspense Music  Suspenseful  Dramatic Film Soundtracks ANTICIPATION.mp3", 5)
				update(ref(db, 'commands'), { sound_cus_8: 0 });
            }

			if (data.sound_stop == 1) {
				con.StopAllSounds();
				update(ref(db, 'commands'), { sound_stop: 0 });
			}
		})

	}(window.CNKDCGV = window.CNKDCGV || {}));
});
