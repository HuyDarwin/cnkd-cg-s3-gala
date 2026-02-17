import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
    "use strict";

    window.CNKDCGV = window.CNKDCGV || {};

    (function (con) {
        //

        const db = getDatabase();
        const dbKey = "cnkdcgv";

        //

        function upd(key, val) {
            update(ref(db, dbKey), {
                [key]: val
            })
        }

        function enb(key) {
            $(key).removeAttr('disabled')
        }

        function dib(key) {
            $(key).attr('disabled', true);
        }
      
        $('button [name="autoname_class"]').click(function(){
          var bid = this.class;
          upd(bid, 1);
        })
      
        $('button [name="autoname"]').click(function(){
          var bid = this.id;
          upd(bid, 1);
        })
      
        $(".autoname").click(function(){
          upd(this.id, 1);
        });
      
        //

        onValue(ref(db, dbKey), (snapshot) => {
            const data = snapshot.val();

            if(data.reload_auth == 1) {
              location.reload();
              upd("reload_auth", 0);
            }     
        });    

        onValue(ref(db, dbKey + "_passkey"), (snapshot) => {
            const data = snapshot.val();
          
            $(".passkey-submit").click(function(){
              var pass_inp = $(".passkey-input").val();
              for (var i = 1; i <= 3; i++) {
                if (pass_inp == eval("data.player_" + i + "_passkey")) {
                  $(".stage").html("<iframe style='width:100%;height:100%;left:0%;top:0%;' src='" + data.player_url + "?player=" + i + "'></iframe>");
                  $(document).prop('title', 'Player ' + i);
                  break;
                }
              }
              if (pass_inp == data.host_passkey) {
                $(".stage").html("<iframe style='width:100%;height:100%;left:0%;top:0%;' src='" + data.host_url + "'></iframe>");
                $(document).prop('title', 'Host');
              }
            });
          
            $(".passkey-input").keyup(function(e){
              if((e.keyCode || e.which) == 13) { 
                var pass_inp = $(".passkey-input").val();
                pass_inp = pass_inp.slice(0, -1);
                $(".passkey-input").val(pass_inp);
                $(".passkey-submit").click();
              }
            });
    
        });    

    }(window.CNKDCGV = window.CNKDCGV || {}));
});