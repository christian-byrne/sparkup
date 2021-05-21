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
        greetings: "[bg] [colors] [resize] [wpic] [hpic]\n[language] to choose coding language\n[tools] for programming tools like diff or run\n[videos] [games] [controls] [more-editors]\n[help]",
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