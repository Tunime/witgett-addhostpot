var shsopots=[];
var ban=0, bann=0;
(function(){
    var app = new Vue({
        el: '#foradd',
        data:{
            datoss: localStorage.getItem("istitlekey").length
        },
        methods:{
            addhostpot:function(event){
                
                var miObjeto = new Object();
                ban++;
                miObjeto.sid = ban;
                miObjeto.scaleY = document.querySelector("#scaley").value;
                document.querySelector("#scaley").value='';
                miObjeto.scaleX = document.querySelector("#scalex").value;
                document.querySelector("#scalex").value='';
                miObjeto.stitle = document.querySelector("#mstitle").value;
                document.querySelector("#mstitle").value='';
                miObjeto.ssubtitle = document.querySelector("#mssubtitle").value;
                document.querySelector("#mssubtitle").value='';
                miObjeto.sdescription = document.querySelector("#msdescription").value;
                document.querySelector("#msdescription").value='';
                miObjeto.surl = document.querySelector("#msurl").value;
                document.querySelector("#msurl").value='';
                shsopots.push(miObjeto);

                localStorage.setItem("istitlekey",JSON.stringify(shsopots));
                $("#alvarus").remove();
                $("#btnadd").css("display", "none");
                bann=0;
            }
        }
    });
    var app = new Vue({
        el: '#witget',
        data:{
            datoss: localStorage.getItem("istitlekey").length
        },
        created(){
            var datos=JSON.parse(localStorage.getItem("istitlekey"));
            render(datos);
            function render (datos) {
                var html = datos.map(function(elem, index) {
                  return('<div id="posts" style="top:'+elem.scaleY+'px; left:'+elem.scaleX+'px;">'+elem.sid+'</div><div style="top:'+elem.scaleY+'px; left:'+elem.scaleX+'px;" class="card"><h2>'+elem.stitle+'</h2><h3>'+elem.ssubtitle+'</h3><p>'+elem.sdescription+'</p><div class="firure"><img class="admin--view--img" src="'+elem.surl+'" alt=""></div></div>');
              }).join(" ");
              $('#witgetimg').append(html);
            }
        },
        methods:{
            newhospot:function(event){
                if(bann==0){
                    bann=1;
                    $("#btnadd").css("display", "flex");
                    $('#forinputs').append('<div id="alvarus" class="admin--edit--add"><input id="scaley" type="text" class="admin__input" value="'+event.clientY+'"><input id="scalex" type="text" class="admin__input" value="'+event.clientX+'"><input id="mstitle" type="text" class="admin__input" placeholder="Title"><input id="mssubtitle" type="text" class="admin__input" placeholder="Subtitle"><textarea id="msdescription" class="admin__input" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion"></textarea><input id="msurl" type="text" class="admin__input" placeholder="img URL"></div>');
                    $('#witgetimg').append('<div id="posts" style="top:'+event.clientY+'px; left:'+event.clientX+'px;">'+(ban+1)+'</div>');
                }
                
            }
        }
    });
})();