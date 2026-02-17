import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
    
    const maxhang = 4;
    const maxcot = 14;
		
		// Reset variables and commands
		
		update(ref(db, 'variables'), {
			
		})
		
		update(ref(db, 'commands'), {
			
		})
    
    // Function
    
    function PlayVideoOnce(video) {
      $(video).css('opacity',1)
      $(video).trigger('play');
      $(video)[0].playbackRate = 1;
      $(video).on('ended',function(){
        $(video).css('opacity',0)
        $(video).trigger('pause');
        $(video)[0].currentTime = 0;
      });
    }

    function PlayVideoOnceFadeIn(video) {
      $(video).animate({opacity: 1}, 250);
      $(video).trigger('play');
      $(video)[0].playbackRate = 1;
      $(video).on('ended',function(){
        $(video).css('opacity',0)
        $(video).trigger('pause');
        $(video)[0].currentTime = 0;
      });
    }
    
    function StopVideo(video) {    
      $(video).css('opacity',0)
      $(video).trigger('pause');
      $(video)[0].currentTime = 0;
    }
    
    function StopVideoFadeIn(video) {    
      $(video).animate({opacity: 0}, 250);
      $(video).trigger('pause');
      $(video)[0].currentTime = 0;
    }
    
    function ShowLoopVideo(video) {
      $(video).css('opacity',1);
    }
    
    function HideLoopVideo(video) {
      $(video).css('opacity',0);
    }
		
		// Get data
    
    var a = "";
    var b;
    var c;
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
      
      a = data.round;
			b = data.br_question_index;
      c = data.empty_puzzleboard;

      if (c == 1) {
        $('.puzzleboard').css('opacity', 0);
        $('.puzzleboard_empty').css('opacity', 1);
      }
      else {
        $('.puzzleboard').css('opacity', 1);
        $('.puzzleboard_empty').css('opacity', 0);
      }
		})
		
		onValue(ref(db, 'variables/letters/status'), (snapshot) => {
			const data = snapshot.val();
			for(var i = 1; i <= maxhang * maxcot; i++) {
          
          if(i == 1 || i == maxcot || i == (maxhang - 1) * maxcot + 1 || i == maxhang * maxcot){
            continue;
          }
          else{
            $('#letter_empty_' + i + ' div').html('');

            var ten;
            if (b == 2) {
              ten = "br_letter_2_";
            }
            else if (b == 3) {  
              ten = "br_letter_3_";
            }
            else if (b == 4) {  
              ten = "br_letter_4_";
            }
            else if (b == 5) {  
              ten = "br_letter_5_";
            }
            else {
              ten = "letter_";
            }

            if(eval("data." + ten + i) != undefined && eval("data." + ten + i) != null){
              if(eval("data." + ten + i) == 0){
                $('#letter_' + i).css('background-image', 'url("Assets/o_chu_xanh_luc.jpg")');
              }
              if(eval("data." + ten + i) == 1 || eval("data." + ten + i) == 3 || eval("data." + ten + i) == 4){
                $('#letter_' + i).css('background-image', 'url("Assets/o_chu_trang.jpg")');
              }
              if(eval("data." + ten + i) == 2){
                $('#letter_' + i).css('background-image', 'url("Assets/o_chu_xanh_lam.jpg")');
              }
              if(eval("data." + ten + i) == 5){
                $('#letter_' + i).css('background-image', 'url("Assets/ô_chữ_giải_mã.png")');
              }

              if(eval("data." + ten + i) == 3){
                onValue(ref(db, 'variables/letters/no_tonemark'), (snapshot) => {
                  $('#letter_' + i + ' div').html(eval('snapshot.val().' + ten + i));
                })
              }
              else if(eval("data." + ten + i) == 4){
                onValue(ref(db, 'variables/letters/having_tonemark'), (snapshot) => {
                  $('#letter_' + i + ' div').html(eval('snapshot.val().' + ten + i));
                })
              }
              else{
                $('#letter_' + i + ' div').html('');
              }
            }
          }
      }
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			
			if(data.reset_puzzleboard == 1){
				update(ref(db, 'commands'), { reset_puzzleboard : 0 })
			}
			if(data.reset_puzzleboard_data == 1){
				update(ref(db, 'commands'), { reset_puzzleboard_data : 0 })
			}
			if(data.puzzle_reveal == 1){
        if(a == "bonus_round") {
          PlayVideoOnce("#puzzle_bonus_reveal");
        }
        else {
          PlayVideoOnce("#puzzle_reveal");
        }
				update(ref(db, 'commands'), { puzzle_reveal : 0 })
			}
			if(data.play_vid_puzzle_tossup == 1){
        PlayVideoOnce("#puzzle_tossup");
				update(ref(db, 'commands'), { play_vid_puzzle_tossup : 0 })
			}
			if(data.play_vid_puzzle_bonus_moving == 1){
        $("#puzzle_bonus_moving").animate({opacity: 1}, 250);
				update(ref(db, 'commands'), { play_vid_puzzle_bonus_moving : 0 })
			}
			if(data.stop_vid_puzzle_bonus_moving == 1){
        $("#puzzle_bonus_buzzer").css('opacity', 0);
        $("#puzzle_bonus_correct").css('opacity', 0);
        $("#puzzle_bonus_moving").animate({opacity: 0}, 250);
				update(ref(db, 'commands'), { stop_vid_puzzle_bonus_moving : 0 })
			}
			if(data.reveal_backdrop == 1){
				$('.backdrop').css('opacity', 1);
				update(ref(db, 'commands'), { reveal_backdrop : 0 })
			}
			if(data.hide_backdrop == 1){
				$('.backdrop').css('opacity', 0);
				update(ref(db, 'commands'), { hide_backdrop : 0 })
			}
			if(data.reveal_camera == 1){
				$('.camera_source').css('opacity', 1);
				update(ref(db, 'commands'), { reveal_camera : 0 })
			}
			if(data.hide_camera == 1){
				$('.camera_source').css('opacity', 0);
				update(ref(db, 'commands'), { hide_camera : 0 })
			}

      if(a == 'bonus_round'){
        if(data.tossup_buzzer == 1) {
          $("#puzzle_bonus_buzzer").css('opacity', 0);
          $("#puzzle_bonus_correct").css('opacity', 0);
          $("#puzzle_bonus_buzzer").animate({opacity: 1}, 250);
          update(ref(db, 'commands'), { tossup_buzzer : 0 });
        }
        if(data.tossup_continue == 1) {
          $("#puzzle_bonus_buzzer").css('opacity', 1);
          $("#puzzle_bonus_correct").css('opacity', 0);
          $("#puzzle_bonus_buzzer").animate({opacity: 0}, 250);
          update(ref(db, 'commands'), { tossup_continue : 0 });
        }
      }

      if(data.bonus_correct_once == 1) {
        $("#puzzle_bonus_buzzer").css('opacity', 0);
        $("#puzzle_bonus_correct").css('opacity', 1);
        setTimeout(function() {  
          $("#puzzle_bonus_correct").animate({opacity: 0}, 1000);
        }, 1250);
        update(ref(db, 'commands'), { bonus_correct_once : 0 });
      } 
      
      if(data.puzzle_back_1 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_bonus_buzzer").css('opacity', 0);
        $("#puzzle_bonus_correct").css('opacity', 0);
        $("#puzzle_back_main").css('opacity', 1);

        $("#puzzle_frame_bonus").css('opacity', 0);
        $("#puzzle_frame_main").css('opacity', 1);

				update(ref(db, 'commands'), { puzzle_back_1 : 0 })
      }   
      if(data.puzzle_back_2 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_bonus_buzzer").css('opacity', 0);
        $("#puzzle_bonus_correct").css('opacity', 0);
        $("#puzzle_back_bonus").css('opacity', 1);

        $("#puzzle_frame_main").css('opacity', 0);
        $("#puzzle_frame_bonus").css('opacity', 1);
        
				update(ref(db, 'commands'), { puzzle_back_2 : 0 })
      }   
      if(data.puzzle_back_3 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_bonus_buzzer").css('opacity', 0);
        $("#puzzle_bonus_correct").css('opacity', 0);
        $("#puzzle_back_end_bonus").css('opacity', 1);

        $("#puzzle_frame_main").css('opacity', 0);
        $("#puzzle_frame_bonus").css('opacity', 1);
        
				update(ref(db, 'commands'), { puzzle_back_3 : 0 })
      }
      if(data.puzzle_solve == 1) {
        if (a == "tossup_1" || a == "tossup_2" || a == "triple_tossup_1" || a == "triple_tossup_2" || a == "triple_tossup_3" || a == "tiebreak"){
          setTimeout(function(){
            StopVideo("#puzzle_tossup");
          }, 500)
				  PlayVideoOnce("#puzzle_solve_tossup");
        }
        else if(a == "round_1" || a == "round_2" || a == "round_3" || a == "audience_round" || a == "round_4" || a == "final_spin") {
          PlayVideoOnce("#puzzle_solve_main");
        }
				update(ref(db, 'commands'), { puzzle_solve : 0 })
      }
		})
		
		// Action
		
		var string = "";
    var string_empty = "";
		for(var j = 0; j < maxhang; j++){
			string += "<tr>";
			string_empty += "<tr>";
			for(var i = 1; i <= maxcot; i++){
				string += "<td class='letter' id='letter_" + (i + ((maxcot - 1) * j) + j) + "'><div></div></td>";
				string_empty += "<td class='letter_empty' id='letter_empty_" + (i + ((maxcot - 1) * j) + j) + "'><div></div></td>";
			}
			string += "</tr>";
			string_empty += "</tr>";
		}
		$('.puzzleboard').html(string);
		$('.puzzleboard_empty').html(string_empty);
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});