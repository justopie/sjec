jQuery(function(t){t(".lvca-accordion").each(function(){var n=t(this);new LVCA_Accordion(n)})});var LVCA_Accordion=function(t){this.panels=t.find(".lvca-panel"),this.toggle=!1,1==t.data("toggle")&&(this.toggle=!0),this.current=null,this.initEvents()};LVCA_Accordion.prototype.show=function(t){this.toggle?t.hasClass("lvca-active")?this.close(t):this.open(t):t.hasClass("lvca-active")?(this.close(t),this.current=null):(this.close(this.current),this.open(t),this.current=t)},LVCA_Accordion.prototype.close=function(t){null!==t&&(t.children(".lvca-panel-content").slideUp(300),t.removeClass("lvca-active"))},LVCA_Accordion.prototype.open=function(t){null!==t&&(t.children(".lvca-panel-content").slideDown(300),t.addClass("lvca-active"))},LVCA_Accordion.prototype.initEvents=function(){var t=this;this.panels.find(".lvca-panel-title").click(function(n){n.preventDefault();var c=jQuery(this).parent();t.show(c)})};
