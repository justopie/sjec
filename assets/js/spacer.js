jQuery(function(e){var a="";e(".lvca-spacer").each(function(){spacer_elem=e(this);var t="#"+spacer_elem.attr("id"),p="undefined"!=typeof spacer_elem.data("desktop_spacing")?spacer_elem.data("desktop_spacing"):50,d="undefined"!=typeof spacer_elem.data("tablet_spacing")?spacer_elem.data("tablet_spacing"):30,s=spacer_elem.data("tablet_width")||960,i="undefined"!=typeof spacer_elem.data("mobile_spacing")?spacer_elem.data("mobile_spacing"):10,c=spacer_elem.data("mobile_width")||480;a+=t+" { height:"+p+"px; }",a+=" @media only screen and (max-width: "+s+"px) { "+t+" { height:"+d+"px; } } ",a+=" @media only screen and (max-width: "+c+"px) { "+t+" { height:"+i+"px; } } "}),""!=a&&(a='<style type="text/css">'+a+"</style>",e("head").append(a))});
