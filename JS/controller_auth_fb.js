import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
        const dbKey = "cnkdcgv";

        //

        function upd(key, val) {
            update(ref(db, dbKey), {
                [key]: val
            })
        }

        function upd_passkey(key, val) {
            update(ref(db, dbKey + "_passkey"), {
                [key]: val
            })
        }

        function enb(key) {
            $(key).removeAttr('disabled')
        }

        function dib(key) {
            $(key).attr('disabled', true);
        }

        function getRandomIntInclusive(min, max) {
          const minCeiled = Math.ceil(min);
          const maxFloored = Math.floor(max);
          return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
        }
      
        function ForbiddenButton (button) {
          $(button).css("background-color", "red");
          setTimeout(function(){
            $(button).css("background-color", "black");
          }, 250);
        }
      
        // Popup - Passkey
      
        const player_url = "player-dote.html";
        const host_url = "host-ore.html";
      
        $(".popup-close").click(function(){
          $(".popup").css("top", "1920px");
        });

        $("#reload_auth").click(function(){
          upd("reload_auth", 1);
        });
      
        $("#edit_passkey").click(function(){
          $(".popup").css("top", "1920px");
          $("#popup-passkey").css("top", "0px");
        });
      
        $(".ppp-input").keyup(function(e){
          if((e.keyCode || e.which) == 13) { 
            var id = "#" + $(this).parent().attr("id");
            var pass_inp = $(this).val();
            pass_inp = pass_inp.slice(0, -1);
            $(id + " .ppp-input").val(pass_inp);
            $(id + " .ppp-submit").click();
          }
        });
      
        $(".ppp-random").click(function(){
          var id = "#" + $(this).parent().attr("id");
          var who = id.substr(5);
          var passkey = String.fromCharCode(getRandomIntInclusive(97,122),getRandomIntInclusive(97,122),getRandomIntInclusive(97,122),getRandomIntInclusive(97,122),getRandomIntInclusive(97,122),getRandomIntInclusive(97,122));
          
          upd_passkey(who + "_passkey", passkey);
        });
      
        $(".ppp-submit").click(function(){
          var id = "#" + $(this).parent().attr("id");
          var who = id.substr(5);
          var passkey = $(id + " .ppp-input").val();
          upd_passkey(who + "_passkey", passkey);
        });
      
        upd_passkey("player_url", player_url);
        upd_passkey("host_url", host_url);
      
        onValue(ref(db, dbKey + "_passkey"), (snapshot) => {
            const data = snapshot.val();
          
            var pp_copy_string = "";
            for (var i = 1; i <= 3; i++) {
              con.TextUpdateData("#ppp_player_" + i + " .ppp-pass", eval("data.player_" + i + "_passkey"), 1);
              pp_copy_string += "Mã NC" + i + ": " + eval("data.player_" + i + "_passkey") + "\n";
            }
            con.TextUpdateData("#ppp_host .ppp-pass", data.host_passkey, 1);
            pp_copy_string += "Mã DCT: " + data.host_passkey + "\n";
            $(".popup-passkey-copy").html(pp_copy_string);
        });

		//		

	}(window.CNKDCGV = window.CNKDCGV || {}));
});