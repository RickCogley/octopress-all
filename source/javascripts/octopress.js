/*! http://responsiveslides.com v1.31 by @viljamis  */
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",function(a){a.preventDefault();
b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=f.index(d("."+j)),
a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

function getNav() {
  var mobileNav = $('nav[role=navigation] fieldset[role=search]').after('<fieldset class="mobile-nav"></fieldset>').next().append('<select></select>');
  mobileNav.children('select').append('<option value="">Navigate&hellip;</option>');
  $('ul[role=main-navigation]').addClass('main-navigation');
  $('ul.main-navigation a').each(function(link) {
    mobileNav.children('select').append('<option value="'+link.href+'">&raquo; '+link.text+'</option>');
  });
  $('ul.subscription a').each(function(link) {
    mobileNav.children('select').append('<option value="'+link.href+'">&raquo; '+link.text+'</option>');
  });
  mobileNav.children('select').bind('change', function(event) {
    if (event.target.value) { window.location.href = event.target.value; }
  });
}

function addSidebarToggler() {
  if(!$('body').hasClass('sidebar-footer')) {
    $('#content').append('<span class="toggle-sidebar"></span>');
    $('.toggle-sidebar').bind('click', function(e) {
      e.preventDefault();
      if ($('body').hasClass('collapse-sidebar')) {
        $('body').removeClass('collapse-sidebar');
      } else {
        $('body').addClass('collapse-sidebar');
      }
    });
  }
  var sections = $('aside.sidebar > section');
  if (sections.length > 1) {
    sections.each(function(section, index){
      if ((sections.length >= 3) && index % 3 === 0) {
        $(section).addClass("first");
      }
      var count = ((index +1) % 2) ? "odd" : "even";
      $(section).addClass(count);
    });
  }
  if (sections.length >= 3){ $('aside.sidebar').addClass('thirds'); }
}

function testFeatures() {
  var features = ['maskImage'];
  $(features).map(function(i, feature) {
    if (Modernizr.testAllProps(feature)) {
      $('html').addClass(feature);
    } else {
      $('html').addClass('no-'+feature);
    }
  });
  if ("placeholder" in document.createElement("input")) {
    $('html').addClass('placeholder');
  } else {
    $('html').addClass('no-placeholder');
  }
}

function addCodeLineNumbers() {
  if (navigator.appName === 'Microsoft Internet Explorer') { return; }
  $('div.gist-highlight').each(function(code) {
    var tableStart = '<table><tbody><tr><td class="gutter">',
        lineNumbers = '<pre class="line-numbers">',
        tableMiddle = '</pre></td><td class="code">',
        tableEnd = '</td></tr></tbody></table>',
        count = $('.line', code).length;
    for (var i=1;i<=count; i++) {
      lineNumbers += '<span class="line-number">'+i+'</span>\n';
    }
    var table = tableStart + lineNumbers + tableMiddle + '<pre>'+$('pre', code).html()+'</pre>' + tableEnd;
    $(code).html(table);
  });
}

function flashVideoFallback(){
  var flashplayerlocation = "/assets/jwplayer/player.swf",
      flashplayerskin = "/assets/jwplayer/glow/glow.xml";
  $('video').each(function(video){
    video = $(video);
    if (!Modernizr.video.h264 && swfobject.getFlashPlayerVersion() || window.location.hash.indexOf("flash-test") !== -1){
      video.children('source[src$=mp4]').first().map(function(source){
        var src = $(source).attr('src'),
            id = 'video_'+Math.round(1 + Math.random()*(100000)),
            width = video.attr('width'),
            height = parseInt(video.attr('height'), 10) + 30;
            video.after('<div class="flash-video"><div><div id='+id+'>');
        swfobject.embedSWF(flashplayerlocation, id, width, height + 30, "9.0.0",
          { file : src, image : video.attr('poster'), skin : flashplayerskin } ,
          { movie : src, wmode : "opaque", allowfullscreen : "true" }
        );
      });
      video.remove();
    }
  });
}

function wrapFlashVideos() {
  $('object').each(function(object) {
    object = $(object);
    if ( $('param[name=movie]', object).length ) {
      var wrapper = object.before('<div class="flash-video"><div>').prev();
      $(wrapper).children().append(object);
    }
  });
  $('iframe[src*=vimeo],iframe[src*=youtube]').each(function(iframe) {
    iframe = $(iframe);
    var wrapper = iframe.before('<div class="flash-video"><div>').prev();
    $(wrapper).children().append(iframe);
  });
}

function renderDeliciousLinks(items) {
  var output = "<ul>";
  for (var i=0,l=items.length; i<l; i++) {
    output += '<li><a href="' + items[i].u + '" title="Tags: ' + (items[i].t == "" ? "" : items[i].t.join(', ')) + '">' + items[i].d + '</a></li>';
  }
  output += "</ul>";
  $('#delicious').html(output);
}

// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
(function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [0.25, 1.6];
    doc[addEvent](type, fix, true);
  }
}(document));

/*!	SWFObject v2.2 modified by Brandon Mathis to contain only what is necessary to dynamically embed flash objects
  * Uncompressed source in javascripts/libs/swfobject-dynamic.js
  * <http://code.google.com/p/swfobject/>
	released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){function s(a,b,d){var q,k=n(d);if(g.wk&&g.wk<312)return q;if(k){if(typeof a.id==l)a.id=d;if(g.ie&&g.win){var e="",c;for(c in a)if(a[c]!=Object.prototype[c])c.toLowerCase()=="data"?b.movie=a[c]:c.toLowerCase()=="styleclass"?e+=' class="'+a[c]+'"':c.toLowerCase()!="classid"&&(e+=" "+c+'="'+a[c]+'"');c="";for(var f in b)b[f]!=Object.prototype[f]&&(c+='<param name="'+f+'" value="'+b[f]+'" />');k.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+e+">"+c+
"</object>";q=n(a.id)}else{f=i.createElement(o);f.setAttribute("type",m);for(var h in a)a[h]!=Object.prototype[h]&&(h.toLowerCase()=="styleclass"?f.setAttribute("class",a[h]):h.toLowerCase()!="classid"&&f.setAttribute(h,a[h]));for(e in b)b[e]!=Object.prototype[e]&&e.toLowerCase()!="movie"&&(a=f,c=e,h=b[e],d=i.createElement("param"),d.setAttribute("name",c),d.setAttribute("value",h),a.appendChild(d));k.parentNode.replaceChild(f,k);q=f}}return q}function n(a){var b=null;try{b=i.getElementById(a)}catch(d){}return b}
function t(a){var b=g.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function u(a){return/[\\\"<>\.;]/.exec(a)!=null&&typeof encodeURIComponent!=l?encodeURIComponent(a):a}var l="undefined",o="object",m="application/x-shockwave-flash",v=window,i=document,j=navigator,g=function(){var a=typeof i.getElementById!=l&&typeof i.getElementsByTagName!=l&&typeof i.createElement!=l,
b=j.userAgent.toLowerCase(),d=j.platform.toLowerCase(),g=d?/win/.test(d):/win/.test(b),d=d?/mac/.test(d):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,k=!+"\u000b1",e=[0,0,0],c=null;if(typeof j.plugins!=l&&typeof j.plugins["Shockwave Flash"]==o){if((c=j.plugins["Shockwave Flash"].description)&&!(typeof j.mimeTypes!=l&&j.mimeTypes[m]&&!j.mimeTypes[m].enabledPlugin))k=!1,c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(c.replace(/^(.*)\..*$/,"$1"),
10),e[1]=parseInt(c.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(c)?parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof v.ActiveXObject!=l)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(f&&(c=f.GetVariable("$version")))k=!0,c=c.split(" ")[1].split(","),e=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]}catch(h){}return{w3:a,pv:e,wk:b,ie:k,win:g,mac:d}}();return{embedSWF:function(a,b,d,i,k,e,c,f,h){var j={success:!1,id:b};if(g.w3&&!(g.wk&&g.wk<312)&&
a&&b&&d&&i&&k){d+="";i+="";var p={};if(f&&typeof f===o)for(var m in f)p[m]=f[m];p.data=a;p.width=d;p.height=i;a={};if(c&&typeof c===o)for(var n in c)a[n]=c[n];if(e&&typeof e===o)for(var r in e)typeof a.flashvars!=l?a.flashvars+="&"+r+"="+e[r]:a.flashvars=r+"="+e[r];if(t(k))b=s(p,a,b),j.success=!0,j.ref=b}h&&h(j)},ua:g,getFlashPlayerVersion:function(){return{major:g.pv[0],minor:g.pv[1],release:g.pv[2]}},hasFlashPlayerVersion:t,createSWF:function(a,b,d){if(g.w3)return s(a,b,d)},getQueryParamValue:function(a){var b=
i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return u(b);for(var b=b.split("&"),d=0;d<b.length;d++)if(b[d].substring(0,b[d].indexOf("="))==a)return u(b[d].substring(b[d].indexOf("=")+1))}return""}}}();

$(function() {
  testFeatures();
  wrapFlashVideos();
  flashVideoFallback();
  addCodeLineNumbers();
  getNav();
  addSidebarToggler();

  // responsive drop-down menu
  $("nav ul").find('li').hover(function() {
      $(this).children("ul").stop(true, true).fadeIn(300);
  },
  function() {
      $(this).children("ul").stop(true, true).fadeOut(200);
  });

  $('#alt-menu-select').change(function(){
    document.location = $(this).val();
  })
})
