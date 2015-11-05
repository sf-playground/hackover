/* global WebFont */
/* global jQuery */
jQuery(document).ready(function () {
  var debug = false,
      layer_defaults = ['Source Code Pro', 'Hack'],
      faces = [
      'Andale Mono',
      'Anonymous Pro',
      'Bitstream Vera Sans Mono',
      'Consolas',
      'Courier',
      'Courier New',
      'Cutive Mono',
      'DejaVu Sans Mono',
      'Droid Sans Mono',
      'Envy Code R',
      'Fantasque Sans Mono',
      'Fira Mono',
      'Hack',
      'Hack local install',
      'Hasklig',
      'Inconsolata',
      'Iosevka',
      'Liberation Mono',
      'Lucida Console',
      'Luculent',
      'Luxi Mono',
      'Menlo',
      'Meslo LG L',
      'Meslo LG M',
      'Meslo LG S',
      'Monaco',
      'Monofur',
      'Monoid',
      'Oxygen Mono',
      'Panic Sans',
      'Pragmata Pro',
      'PT Mono',
      'Roboto Mono',
      'Segoe UI Mono',
      'Source Code Pro',
      'Terminus',
      'Ubuntu Mono'
    ],
    webfonts_remote = [
      'Anonymous Pro',
      'Consolas',
      'Courier New',
      'Cutive Mono',
      'Droid Sans Mono',
      'Fira Mono',
      'Hack',
      'Hack local install',
      'Inconsolata',
      'Oxygen Mono',
      'PT Mono',
      'Roboto Mono',
      'Source Code Pro',
      'Ubuntu Mono'
    ],
    webfonts_local = [
      'Bitstream Vera Sans Mono',
      'Liberation Mono',
      'Luxi Mono'
    ],
    subsets = {
      'Debug': ['0040'],
      'ASCII': ['0020-007F'],
      'MES-1': ['0020-007E', '00A0-00FF', '0100-0113', '0116-012B', '012E-014D', '0150-017E',
        '02C7', '02D8-02DB', '02DD', '2015', '2018-2019', '201C-201D', '20AC', '2122', '2126',
        '215B-215E', '2190-2193', '266A'],
      'MES-2': ['0020-007E', '00A0-00FF', '0100-017F', '018F', '0192', '01B7', '01DE-01EF',
        '01FA-01FF', '0218-021B', '021E-021F', '0259', '027C', '0292', '02BB-02BD', '02C6-02C7',
        '02C9', '02D8-02DD', '02EE', '0374-0375', '037A', '037E', '0384-038A', '038C',
        '038E-03A1', '03A3-03CE', '03D7', '03DA-03E1', '0400-045F', '0490-04C4', '04C7-04C8',
        '04CB-04CC', '04D0-04EB', '04EE-04F5', '04F8-04F9', '1E02-1E03', '1E0A-1E0B',
        '1E1E-1E1F', '1E40-1E41', '1E56-1E57', '1E60-1E61', '1E6A-1E6B', '1E80-1E85', '1E9B',
        '1EF2-1EF3', '1F00-1F15', '1F18-1F1D', '1F20-1F45', '1F48-1F4D', '1F50-1F57', '1F59',
        '1F5B', '1F5D', '1F5F-1F7D', '1F80-1FB4', '1FB6-1FC4', '1FC6-1FD3', '1FD6-1FDB',
        '1FDD-1FEF', '1FF2-1FF4', '1FF6-1FFE', '2013-2015', '2017-201E', '2020-2022', '2026',
        '2030', '2032-2033', '2039-203A', '203C', '203E', '2044', '204A', '207F', '2082',
        '20A3-20A4', '20A7', '20AC', '20AF', '2105', '2116', '2122', '2126', '215B-215E',
        '2190-2195', '21A8', '2200', '2202-2203', '2206', '2208-2209', '220F', '2211-2212',
        '2219-221A', '221E-221F', '2227-222B', '2248', '2259', '2260-2261', '2264-2265',
        '2282-2283', '2295', '2297', '2302', '2310', '2320-2321', '2329-232A', '2500', '2502',
        '250C', '2510', '2514', '2518', '251C', '2524', '252C', '2534', '253C', '2550-256C',
        '2580', '2584', '2588', '258C', '2590-2593', '25A0', '25AC', '25B2', '25BA', '25BC',
        '25C4', '25CA-25CB', '25D8-25D9', '263A-263C', '2640', '2642', '2660', '2663',
        '2665-2666', '266A-266B', 'FB01-FB02', 'FFFD'],
      'MES-3B': ['0020-007E', '00A0-00FF', '0100-01FF', '0200-021F', '0222-0233', '0250-02AD',
        '02B0-02EE', '0300-034E', '0360-0362', '0374-0375', '037A', '037E', '0384-038A',
        '038C', '038E-03A1', '03A3-03CE', '03D0-03D7', '03DA-03F3', '0400-0486', '0488-0489',
        '048C-04C4', '04C7-04C8', '04CB-04CC', '04D0-04F5', '04F8-04F9', '0531-0556',
        '0559-055F', '0561-0587', '0589-058A', '10D0-10F6', '10FB', '1E00-1E9B', '1EA0-1EF9',
        '1F00-1F15', '1F18-1F1D', '1F20-1F45', '1F48-1F4D', '1F50-1F57', '1F59', '1F5B',
        '1F5D', '1F5F-1F7D', '1F80-1FB4', '1FB6-1FC4', '1FC6-1FD3', '1FD6-1FDB', '1FDD-1FEF',
        '1FF2-1FF4', '1FF6-1FFE', '2000-2046', '2048-204D', '206A-2070', '2074-208E',
        '20A0-20AF', '20D0-20E3', '2100-213A', '2153-2183', '2190-21F3', '2200-22F1',
        '2300-237B', '237D-239A', '2440-244A', '2500-2595', '25A0-25F7', '2600-2613',
        '2619-2671', 'FB00-FB06', 'FB13-FB17', 'FE20-FE23', 'FFF9-FFFD']
    },
    skip = ['0020', '007F', '00AD'], // space, DELETE, soft-hyphen
    fonts = [];

  /* Font, char checkers */
  (function (h) {
    window.isFontAvailable = function (a) {
      return h.hasClass('wf-' + a.toLowerCase().split('-').join('').split(' ').join('') + '-n4-active');
    };
    window.isFontTimedOut = function (a) {
      return h.hasClass('wf-' + a.toLowerCase().split('-').join('').split(' ').join('') + '-n4-inactive');
    };
  })($('html'));

  var loadWebfonts = function () {
    for (var i in faces) {
      var face = faces[i];

      debug && console.info('Loading ' + face + ' as web font');

      // instruct the loader to fetch this font for us
      var face_folder = face.toLowerCase().split(' ').join('-'),
        config = webfonts_local.indexOf(face) > -1
          ? { // webfont included in this repo
            custom: {
              families: [face],
              urls: ['assets/fonts/local/' + face_folder + '/webfont.css']
            }
          }
          : webfonts_remote.indexOf(face) > -1
          ? { // webfont to load from remote provider (e.g. Google), see CSS files
            custom: {
              families: [face],
              urls: ['assets/fonts/remote/' + face_folder + '.css']
            }
          }
          : { // font to load from the local computer
            custom: {
              families: [face]
            }
          };
      WebFont.load(config);
      checkFontLoaded(face);
    }
  };

  var checkFontLoaded = function (face) {
    if (isFontAvailable(face)) {
      debug && console.info(face + ' has loaded');
      // add font to drop-downs
      var $option_new, $options, i, j, $option;
      for (i = 1; i < 3; i++) {
        $option_new = $('<option>').text(face);
        $options = $('#layer' + i + ' option');
        for (j = 0; j < $options.length; j++) {
          $option = $options.eq(j);
          if ($option.text() > face) {
            $option_new.insertBefore($option);
            break;
          }
        }
        if (j === $options.length) {
          $('#layer' + i).append($option_new);
        }
      }
      if (face === layer_defaults[0]) {
        $('#layer1').val(face).trigger('change');
      }
      if (face === layer_defaults[1]) {
        $('#layer2').val(face).trigger('change');
      }
      return;
    }
    if (isFontTimedOut(face)) {
      debug && console.info(face + ' is not available');
    } else {
      debug && console.info(face + ' not loaded yet');
      setTimeout(function () {
        checkFontLoaded(face);
      }, 500);
    }
  };

  var $list = $('#grid'),
    buildGrid = function () {
      var subset = $('#subset').val(),
        chars = subsets[subset].length,
        $layer1,
        $layer2;
      for (var i in subsets[subset]) {
        var data = subsets[subset][i];

        $layer1 = $('<span>')
          .addClass('layer1')
          .text(data.char.replace(' ', ' ').replace('­', ' '));

        $layer2 = $('<span>')
          .addClass('layer2')
          .text(data.char.replace(' ', ' ').replace('­', ' '));

        $('<li>')
          .attr('title', 'U+' + data.hex + ' ' + data.char)
          .attr('data-char', data.char.replace(' ', ' '))
          .append($layer1)
          .append($layer2)
          .append($('<em>').text(data.hex))
          .appendTo($list);
      }
    };

  var explodeSubsets = function () {
    var ranges, characters, range, start, end, hex;
    for (var i in subsets) {
      ranges     = subsets[i];
      characters = [];
      for (var j in ranges) {
        range = ranges[j];
        if (range.length > 4) {
          // multi character range
          start = range.substring(0, 4);
          end = range.substring(5, 9);
        } else {
          // single character range
          start = end = range;
        }
        start = parseInt(start, 16);
        end = parseInt(end, 16);
        for (var k = start; k <= end; k++) {
          hex = k.toString(16).toUpperCase();
          hex = Array(5 - hex.length).join('0') + hex;
          characters.push({hex: hex, char: String.fromCharCode(k)});
        }
      }
      subsets[i] = characters;
    }
  };

  explodeSubsets();
  loadWebfonts();

  $('#subset').change(function (ev) {
    var subset = $(this).val();
    $(this).parent().find('span').text(subset);
    $('#grid').empty();
    buildGrid();
    $('#opacity, #yoffset, #layer1, #layer2').trigger('change');
  })
  .trigger('change');
  $('#view').change(function (ev) {
    var view = $(this).val();
    $(this).parent().find('span').text(view);
    $(document.body)
      .removeClass('view-Table')
      .removeClass('view-Details')
      .removeClass('view-Zoom')
      .addClass('view-' + view);
  })
  .trigger('change');
  $('#opacity').change(function (ev) {
    var opacity = $(this).val(),
      opacityDisplay = $(this).find('option:selected').text();
    $(this).parent().find('span').text(opacityDisplay);
    $('span.layer2').css('opacity', opacity);
  })
  .trigger('change');
  $('#yoffset').change(function (ev) {
    var offset = $(this).val(),
      offsetDisplay = $(this).find('option:selected').text();
    $(this).parent().find('span').text(offsetDisplay);
    $('span.layer2').css('marginTop', offset + 'px');
  })
  .trigger('change');
  $('#layer1, #layer2').change(function (ev) {
    var face = $(this).val();
    if (!face) {
      return;
    }
    $(this).parent().find('span').text(face);
    $('span.' + $(this).attr('id')).css('fontFamily', face);
  })
  .trigger('change');
});
