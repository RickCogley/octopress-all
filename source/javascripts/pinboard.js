function pinboardNS_fetch_script(url) {
  //document.writeln('<s'+'cript type="text/javascript" src="' + url + '"></s'+'cript>');
  
  $(function(){
    
    var pinboardLinkroll = document.createElement('script');
    pinboardLinkroll.type = 'text/javascript';
    pinboardLinkroll.async = true;
    pinboardLinkroll.src = url;
    document.getElementsByTagName('head')[0].appendChild(pinboardLinkroll);

    /*$.ajax({
      url: url, 
      dataType: 'script',
      success: function(){
        if(tag != '')
          current_id = 'pinboard_' + tag;
        else
          current_id = 'pinboard_all';
        console.log(current_id)
      }
    })*/

  });


}

//callbacks
function pinboard_show_all(r){
  var lr = new Pinboard_Linkroll();
  lr.set_items(r);
  lr.show_bmarks('pinboard_all');
}

function pinboard_show_by_tag1(r){
  var lr = new Pinboard_Linkroll();
  lr.set_items(r);
  lr.show_bmarks('pinboard_' + pinboard_tag1);
}

function pinboard_show_by_tag2(r){
  var lr = new Pinboard_Linkroll();
  lr.set_items(r);
  lr.show_bmarks('pinboard_' + pinboard_tag2);
}

function Pinboard_Linkroll() {
  var items;

  this.set_items = function(i) {
    this.items = i;
  }
  this.show_bmarks = function(id) {
    var lines = [];
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      var str = this.format_item(item);
      lines.push(str);
    }
    document.getElementById(id).innerHTML = lines.join("\n");
  }
  this.cook = function(v) {
    return v.replace('<', '&lt;').replace('>', '&gt>');
  }

  this.format_item = function(it) {
    var str = "<li class=\"pin-item\">";
    if (!it.d) { return; }
    str += "<p><a class=\"pin-title\" href=\"" + this.cook(it.u) + "\">" + this.cook(it.d) + "</a>";
    if (it.n) {
      str += "<span class=\"pin-description\">" + this.cook(it.n) + "</span>\n";
    }
    if (it.t.length > 0) {
      for (var i = 0; i < it.t.length; i++) {
        var tag = it.t[i];
        str += " <a class=\"pin-tag\" href=\"https://pinboard.in/u:"+ this.cook(it.a) + "/t:" + this.cook(tag) + "\">" + this.cook(tag).replace(/^\s+|\s+$/g, '') + "</a> ";
      }
    }
    str += "</p></li>\n";
    return str;
  }
}
Pinboard_Linkroll.prototype = new Pinboard_Linkroll();
pinboardNS_fetch_script("https://feeds.pinboard.in/json/v1/u:"+pinboard_user+"/?cb=pinboard_show_all\&count="+pinboard_count);

if(pinboard_tag1 != ''){
  pinboardNS_fetch_script("https://feeds.pinboard.in/json/v1/u:"+pinboard_user+"/t:"+ pinboard_tag1 +"?cb=pinboard_show_by_tag1\&count="+pinboard_count);
}

if(pinboard_tag2 != ''){
  pinboardNS_fetch_script("https://feeds.pinboard.in/json/v1/u:"+pinboard_user+"/t:"+ pinboard_tag2 +"?cb=pinboard_show_by_tag2\&count="+pinboard_count);
}