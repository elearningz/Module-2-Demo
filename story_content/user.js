function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iQNlbcvvXL":
        Script1();
        break;
      case "6UbgdViKst3":
        Script2();
        break;
      case "5Ve3QYR10mO":
        Script3();
        break;
      case "5dkJJAxmHL4":
        Script4();
        break;
      case "5crv5eJbqHQ":
        Script5();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzG58aGy66fJdo8sg5cg5rlUUdbE2oJM284kKc9JZ7nJrAceYRI/exec";

// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Results.ScorePercent" : player.GetVar("Results.ScorePercent"), 
 "TextEntry52" : player.GetVar("TextEntry52"),
 "TextEntry71" : player.GetVar("TextEntry71"),
 "TextEntry46" : player.GetVar("TextEntry46"),
 "TextEntry47" : player.GetVar("TextEntry47"),
 "TextEntry48" : player.GetVar("TextEntry48"),
 "TextEntry49" : player.GetVar("TextEntry49"),
 "TextEntry50" : player.GetVar("TextEntry50"),
 "TextEntry51" : player.GetVar("TextEntry51"),
 "TextEntry53" : player.GetVar("TextEntry53"),
 "TextEntry54" : player.GetVar("TextEntry54"),
 "TextEntry55" : player.GetVar("TextEntry55"),
 "TextEntry56" : player.GetVar("TextEntry56"),
 "TextEntry57" : player.GetVar("TextEntry57"),
 "TextEntry58" : player.GetVar("TextEntry58"),
 "TextEntry59" : player.GetVar("TextEntry59"),
 "TextEntry60" : player.GetVar("TextEntry60"),
 "TextEntry61" : player.GetVar("TextEntry61"),
 "TextEntry62" : player.GetVar("TextEntry62"),
 "TextEntry63" : player.GetVar("TextEntry63"),
 "TextEntry64" : player.GetVar("TextEntry64"),
 "TextEntry65" : player.GetVar("TextEntry65"),
 "TextEntry66" : player.GetVar("TextEntry66"),
 "TextEntry67" : player.GetVar("TextEntry67"),
 "TextEntry6" : player.GetVar("TextEntry6"),
 "TextEntry8" : player.GetVar("TextEntry8"),
 "TextEntry9" : player.GetVar("TextEntry9"),
 "TextEntry10" : player.GetVar("TextEntry10"),
 "TextEntry11" : player.GetVar("TextEntry11"),
 "TextEntry12" : player.GetVar("TextEntry12"),
 "TextEntry13" : player.GetVar("TextEntry13"),
 "TextEntry14" : player.GetVar("TextEntry14"),
 "TextEntry15" : player.GetVar("TextEntry15"),
 "TextEntry16" : player.GetVar("TextEntry16"),
 "TextEntry26" : player.GetVar("TextEntry26"),
 "TextEntry27" : player.GetVar("TextEntry27"),
 "TextEntry28" : player.GetVar("TextEntry28"),
 "TextEntry29" : player.GetVar("TextEntry29"),
 "TextEntry30" : player.GetVar("TextEntry30"),
 "TextEntry31" : player.GetVar("TextEntry31"),
 "TextEntry32" : player.GetVar("TextEntry32"),
 "TextEntry33" : player.GetVar("TextEntry33"),
 "TextEntry34" : player.GetVar("TextEntry34"),
 "TextEntry35" : player.GetVar("TextEntry35"),
 "Project.SlidesViewed" : player.GetVar("Project.SlidesViewed")
}

}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script4()
{
  var m_names = new Array("January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if(dd<10) { dd='0'+dd }
var date= m_names[mm]+' '+dd+', '+yyyy;
var player = GetPlayer();
player.SetVar("SystemDate",date);
}

function Script5()
{
  var styles = `@media print {
  body, * { visibility: hidden; }
  html, body { overflow: hidden; transform: translateZ(0); }
  #slide {
    transform: scale(.9) !important;
  }
  #wrapper {
   transform: scale(1) !important;
  }
  #slide,
  #wrapper {
    width: 100% !important;
    height: 100% !important;
    overflow: visible !important;
  }
  #frame {
    overflow: visible !important;
  }
  .slide-transition-container {
    overflow: visible !important;
  }
  @page {size: A4 landscape;max-height:99%; max-width:99%}
    .slide-container, .slide-container * {
      visibility: visible !important;
      margin-top: 0px !important;
      margin-left: 0px !important;
    }
    #outline-panel {
      display: none !important;
    }
  }
}`
  var stylesheet = document.createElement('style');
  stylesheet.type = 'text/css';
  stylesheet.innerText = styles;
  document.head.appendChild(stylesheet);
  window.print();
}

