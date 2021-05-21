(function ($) {
    $.fn.term = function (eval, options) {
      if ($('body').data('term')) {
        return $('body').data('term').terminal;
      }
      this.addClass('term');
      options = options || {};
      eval = eval || function (command, term) {
        term.echo("you don't set eval for term");
      };
      this.hide();
      var settings = {

        // SETTINGS Property of Terminal  \\           
        prompt: ' $ ',
        name: 'term',
        height: 320,
        enabled: false,
        greetings: "[[b;red;]Coding Tools:] [language] [download] [screenshot] [run] [tools] [addons]\n[[b;red;]Other:] [clear] [mute] [play] [pause] [resize]\n[[b;red;]Terminal Theme:] [colorterm] [colortermtext]\n[[b;red;]Page Background:] [bg] [bgp] [bgv] [colorbg]\n[[b;red;]Editor Theme:] [theme [theme name]] (e.g., 'theme dracula') [theme random] \n[[b;red;]Editor Background:] [windowpic] [colorwindow] [hpic] [scheme]\n[[b;red;]Editor Components:] [colordialog] [colortext] [random everything]\n[[b;red;]Display Customization Options:] [bg] [coloroptions] [showthemes]",
        checkArity: false,
        history: true,
        memory: true,
        keypress: function (e) {
          if (e.which == 96) {
            return false;
          }
        }
      };
      if (options) {
        $.extend(settings, options);
      }
      this.append('<div class="td"></div>');
      var self = this;
      self.terminal = this.find('.td').terminal(eval, settings);
      var focus = false;

      // Quake Functionality 
      $(document.documentElement).keypress(function (e) {
        if (e.which == 96) {
          self.slideToggle('fast');
          self.terminal.focus(focus = !focus);
          self.terminal.attr({
            scrollTop: self.terminal.attr("scrollHeight")
          });
          
        }
      });
      $('body').data('term', this);
      return self;
    };
  }) (jQuery);