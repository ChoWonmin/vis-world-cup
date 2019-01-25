const Constant = {
  dicetory: 2014,
  filename: '/data/worldCup.csv',
  categoryColumns: ['year', 'group', 'match', 'score', 'shots', 'target',
    'LB', 'CB', 'RB', 'LM', 'CM', 'RM', 'LF', 'CF', 'RF', 'Left', 'Right', 'LPA_SPA', 'SPA_LPA',
    'coner.kicks', 'MPC', 'MPA', 'LPC', 'SPC', 'TPC', 'TPA', 'LPA', 'SPA', 'result', 'round',
    'LPP_SPP', 'LPC_SPC', 'LPC_LPA', 'Opponent', 'side', 'cluster', 'fouls', 'formation', 'LPP', 'SPP', 'side_attack'],
  mappingColumns: { team: true, formation: true, Opponent: true },
  columneByPathColor: 'cluster',
  win: '#f7c45f',
  draw1: '#f5efe4',
  draw2: '#e7cebf',
  lose: '#d65353',

  /*
   color: {
   'South Korea': '#ec6c60',
   'Japan': '#ec6c60',
   'North Korea': '#ec6c60',

   'Australia': '#ecaa41',
   'New Zealand': '#ecaa41',

   'France': '#a4d086',
   'Greece': '#a4d086',
   'England': '#a4d086',
   'Slovenia': '#a4d086',
   'Serbia': '#a4d086',
   'Germany': '#a4d086',
   'Netherlands': '#a4d086',
   'Denmark': '#a4d086',
   'Cameroon': '#a4d086',
   'Italy': '#a4d086',
   'Slovakia': '#a4d086',
   'Portugal': '#a4d086',
   'Spain': '#a4d086',
   'Switzerland': '#a4d086',

   'South Africa': '#a6d9e1',
   'Nigeria': '#a6d9e1',
   'Algeria': '#a6d9e1',
   'Ghana': '#a6d9e1',
   'Ivory Coast': '#a6d9e1',

   'United States': '#f7bc83',
   'Mexico': '#f7bc83',
   'Honduras': '#f7bc83',

   'Argentina': '#5d68af',
   'Paraguay': '#5d68af',
   'Brazil': '#5d68af',
   'Chile': '#5d68af',
   'Uruguay': '#5d68af',
   };
   */
  color: {
    1: '#F44336',
    2: '#4CAF50',
    3: '#4797d3',
    4: '#ecaa41',
  },

  position: [
    ['LB', 'LM', 'LF'], ['CB', 'CM', 'CF'], ['RB', 'RM', 'RF'],
  ],
  mappingData: {
    /* team: {
     'South Africa': 32,
     'Mexico': 31,
     'Uruguay': 30,
     'France': 29,
     'South Korea': 28,
     'Greece': 27,
     'Argentina': 26,
     'Nigeria': 25,
     'England': 24,
     'United States': 23,
     'Algeria': 22,
     'Slovenia': 21,
     'Serbia': 20,
     'Ghana': 19,
     'Germany': 18,
     'Australia': 17,
     'Netherlands': 16,
     'Denmark': 15,
     'Japan': 14,
     'Cameroon': 13,
     'Italy': 12,
     'Paraguay': 11,
     'New Zealand': 10,
     'Slovakia': 9,
     'Ivory Coast': 8,
     'Portugal': 7,
     'Brazil': 6,
     'North Korea': 5,
     'Honduras': 4,
     'Chile': 3,
     'Spain': 2,
     'Switzerland': 1,
     },
     */
    2010: {
      team: {
        'Spain': 32,
        'Netherlands': 31,
        'Germany': 30,
        'Uruguay': 29,
        'Brazil': 28,
        'Argentina': 27,
        'Paraguay': 26,
        'Ghana': 25,
        'Portugal': 24,
        'Slovakia': 23,
        'England': 22,
        'Mexico': 21,
        'Chile': 20,
        'Japan': 19,
        'South Korea': 18,
        'United States': 17,
        'South Africa': 16,
        'Greece': 15,
        'Slovenia': 14,
        'Australia': 13,
        'Denmark': 12,
        'New Zealand': 11,
        'Ivory Coast': 10,
        'Switzerland': 9,
        'France': 8,
        'Nigeria': 7,
        'Algeria': 6,
        'Serbia': 5,
        'Cameroon': 4,
        'Italy': 3,
        'North Korea': 2,
        'Honduras': 1,
      },
      Opponent: {
        'South Africa': 32,
        'Mexico': 31,
        'Uruguay': 30,
        'France': 29,
        'South Korea': 28,
        'Greece': 27,
        'Argentina': 26,
        'Nigeria': 25,
        'England': 24,
        'United States': 23,
        'Algeria': 22,
        'Slovenia': 21,
        'Serbia': 20,
        'Ghana': 19,
        'Germany': 18,
        'Australia': 17,
        'Netherlands': 16,
        'Denmark': 15,
        'Japan': 14,
        'Cameroon': 13,
        'Italy': 12,
        'Paraguay': 11,
        'New Zealand': 10,
        'Slovakia': 9,
        'Ivory Coast': 8,
        'Portugal': 7,
        'Brazil': 6,
        'North Korea': 5,
        'Honduras': 4,
        'Chile': 3,
        'Spain': 2,
        'Switzerland': 1,
      },

    },
    2014: {
      team: {
        'Germany': 31,
        'Argentina': 30,
        'Netherlands': 29,
        'Brazil': 28,
        'France': 27,
        'Belgium': 26,
        'Colombia': 25,
        'Costa Rica': 24,
        'Chile': 23,
        'Uruguay': 22,
        'Mexico': 21,
        'Switzerland': 20,
        'Algeria': 19,
        'United States': 18,
        'Greece': 17,
        'Nigeria': 16,
        'Croatia': 15,
        'Spain': 14,
        'Italy': 13,
        'Ivory Coast': 12,
        'Ecuador': 11,
        'Bosnia and Herzegovina': 10,
        'Portugal': 9,
        'Russia': 8,
        'Cameroon': 7,
        'Australia': 6,
        'Japan': 5,
        'England': 4,
        'Honduras': 3,
        'Iran': 2,
        'Ghana': 1,
        'South Korea': 0
      },
      Opponent: {
        'Germany': 31,
        'Argentina': 30,
        'Netherlands': 29,
        'Brazil': 28,
        'France': 27,
        'Belgium': 26,
        'Colombia': 25,
        'Costa Rica': 24,
        'Chile': 23,
        'Uruguay': 22,
        'Mexico': 21,
        'Switzerland': 20,
        'Algeria': 19,
        'United States': 18,
        'Greece': 17,
        'Nigeria': 16,
        'Croatia': 15,
        'Spain': 14,
        'Italy': 13,
        'Ivory Coast': 12,
        'Ecuador': 11,
        'Bosnia and Herzegovina': 10,
        'Portugal': 9,
        'Russia': 8,
        'Cameroon': 7,
        'Australia': 6,
        'Japan': 5,
        'England': 4,
        'Honduras': 3,
        'Iran': 2,
        'Ghana': 1,
        'South Korea': 0
      },
    },
    formation: {
      3421: 4,
      5131: 4,
      541: 4,
      523: 4,
      4123: 7,
      41212: 8,
      41221: 9,
      4132: 10,
      4141: 11,
      4231: 12,
      4312: 13,
      4321: 14,
      433: 15,
      442: 16,
    },
    image: {
      'South Africa': 'rsa.png',
      'Mexico': 'mex.png',
      'Uruguay': 'uru.png',
      'France': 'fra.png',
      'South Korea': 'kor.png',
      'Greece': 'gre.png',
      'Argentina': 'arg.png',
      'Nigeria': 'nga.png',
      'England': 'eng.png',
      'United States': 'usa.png',
      'Algeria': 'alg.png',
      'Slovenia': 'svn.png',
      'Serbia': 'srb.png',
      'Ghana': 'gha.png',
      'Germany': 'ger.png',
      'Australia': 'aus.png',
      'Netherlands': 'ned.png',
      'Denmark': 'den.png',
      'Japan': 'jpn.png',
      'Cameroon': 'cmr.png',
      'Italy': 'ita.png',
      'Paraguay': 'par.png',
      'New Zealand': 'nzl.png',
      'Slovakia': 'svk.png',
      'Ivory Coast': 'civ.png',
      'Portugal': 'por.png',
      'Brazil': 'bra.png',
      'North Korea': 'prk.png',
      'Honduras': 'hon.png',
      'Chile': 'chi.png',
      'Spain': 'esp.png',
      'Switzerland': 'sui.png',
      'Croatia': 'cro.png',
      'Colombia': 'col.png',
      'Iran': 'irn.png',
      'Costa Rica': 'crc.png',
      'Ecuador': 'ecu.png',
      'Bosnia and Herzegovina': 'bih.png',
      'Belgium': 'bel.png',
      'Russia': 'rus.png'
    },

  },
  pathBackgroundColor: '#E0E0E0',

  match: [
    'Match1', 'Match2', 'Match3', 'Round of 16', 'Round of 8', 'Semi_final', 'Third_place', 'Final',
  ],

  path: {
    flag: '/image/nation-flag/'
  }
};

const possesionView = new function () {
  const root = d3.select('#possession-view');
  const width = root.node().getBoundingClientRect().width;
  const height = root.node().getBoundingClientRect().height;

  const g = root.append('g');
  const title = g.append('g');
  const ground = g.append('g');

  const groundWidth = width - 2;
  const groundHeight = height * 1 / 2;

  const groundy = height / 3 + 28;
  const groundColor = '#81C784';

  title.attr('transform', 'translate(0,' + 4 + ')');
  ground.attr('transform', 'translate(0,' + groundy + ')');

  this.init = function () {
    title.selectAll('*').remove();
    ground.selectAll('*').remove();
  };

  this.addEvent = function (team, opponent) {
    title.selectAll('*').remove();
    ground.selectAll('*').remove();
    this.draw(0, team, opponent);
  };

  this.draw = function (x, data, opponent) {
    const heatMapWidth = groundWidth / 3;
    const heatMapHeight = groundHeight / 3;

    let barcolor = undefined;
    let barcolorOpponent = undefined;

    switch (data.result) {
      case 'w':
        barcolor = Constant.win;
        barcolorOpponent = Constant.lose;
        break;
      case 'd':
        barcolor = Constant.draw1;
        barcolorOpponent = Constant.draw2;
        break;
      case 'l':
        barcolor = Constant.lose;
        barcolorOpponent = Constant.win;
        break;
    }

    const svg = title.append('svg').attrs({
      width: width,
      height: 48,
      border: '3px solid #ccc'
    });

    svg.append('svg:image').attrs({
      'xlink:href': Constant.dicetory + Constant.path['flag'] + Constant.mappingData['image'][data['team']],
      x: 4,
      y: 4,
      width: 44,
      height: 44,
    });

    title.append('text').attrs({
      x: 54 + x,
      y: 24,
      fill: '#414e5e',
    }).text(data['team']);
    title.append('text').attrs({
      x: 54 + x,
      y: 40,
      fill: '#414e5e',
    }).text(data['formation']);
    title.append('text').attrs({
      x: 142 + x,
      y: 44,
      fill: '#414e5e',
    }).attr('font-size', '20px').text(data['score']);

    ground.append('rect').attrs({
      x: 0,
      y: 0,
      width: groundWidth,
      height: groundHeight,
      fill: groundColor,
    });
    ground.append('circle').attrs({
      cx: groundWidth / 2,
      cy: groundHeight / 2,
      r: 40,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: groundWidth / 2 - 1 / 2,
      y: 0,
      width: 1,
      height: groundHeight,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: 0,
      y: groundHeight / 2 - 40,
      width: 40,
      height: 80,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: groundWidth - 40,
      y: groundHeight / 2 - 40,
      width: 40,
      height: 80,
      stroke: '#efefef',
      fill: groundColor
    });

    for (let i = 1; i < 3; i++) {

      ground.append('rect').attrs({
        x: groundWidth / 3 * i,
        y: 0,
        width: 1,
        height: groundHeight,
        stroke: '#062546',
        opacity: 0.3
      });

      ground.append('rect').attrs({
        x: 0,
        y: groundHeight / 3 * i,
        width: groundWidth,
        height: 1,
        stroke: '#062546',
        opacity: 0.3
      });

    }
    ;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const heatMapX = heatMapWidth * j;
        const heatMapY = heatMapHeight * (i + 1);

        const possession = data[Constant.position[i][j]];
        const possessionOpponent = data[Constant.position[i][2 - j]];

        const barWidth = 30;
        const barHeight = heatMapHeight * (possession * data['possession']) / 4000;
        const barHeightOpponent = heatMapHeight * (possessionOpponent * opponent['possession']) / 4000;

        ground.append('rect').attrs({
          x: heatMapX + heatMapWidth / 2 - barWidth - 8,
          y: heatMapY - 2 - barHeight,
          width: barWidth,
          height: barHeight,
          fill: barcolor,
        });

        ground.append('text').attrs({
          x: heatMapX + heatMapWidth / 2 - 2,
          y: heatMapY - 8 - barHeight,
          fill: '#414e5e',
        }).attr('text-anchor', 'end')
          .attr('font-weight','bold')
          .text(`${Math.floor(possession * data['possession'] / 100)}% (${possession}%)`)
          .attr('font-size', '8px');

        ground.append('rect').attrs({
          x: heatMapX + heatMapWidth / 2 + 8,
          y: heatMapY - 2 - barHeightOpponent,
          width: barWidth,
          height: barHeightOpponent,
          fill: barcolorOpponent
        });

        ground.append('text').attrs({
          x: heatMapX + heatMapWidth / 2 + 2,
          y: heatMapY - 8 - barHeightOpponent,
          fill: '#414e5e',
        }).attr('font-weight','bold')
          .text(`${Math.floor(possessionOpponent * opponent['possession'] / 100)}%(${possessionOpponent}%)`)
          .attr('font-size', '8px');

      };
    };

    svg.append('svg:image').attrs({
      'xlink:href': Constant.dicetory + Constant.path['flag'] + Constant.mappingData['image'][opponent['team']],
      x: width - x - 50,
      y: 4,
      width: 44,
      height: 44,
    });

    title.append('text').attrs({
      x: width - 54,
      y: 24,
      fill: '#414e5e',
    }).attr('text-anchor', 'end').text(opponent['team']);
    title.append('text').attrs({
      x: width - 54,
      y: 40,
      fill: '#414e5e',
    }).attr('text-anchor', 'end').text(opponent['formation']);
    title.append('text').attrs({
      x: width - 142,
      y: 44,
      fill: '#414e5e',
    }).attr('text-anchor', 'end').attr('font-size', '20px').text(opponent['score']);

    title.append('text').attrs({
      x: width/2,
      y: 44,
      fill: '#414e5e',
    }).attr('text-anchor', 'middle').attr('font-size', '20px').text(':');

    title.append('text').attrs({
      x: 8,
      y: groundy - 48,
      fill: '#414e5e',
    }).text('Ball Possession');

    title.append('rect').attrs({
      x: width / 2 - 80 * data['possession'] / 100,
      y: groundy - 34,
      width: 80 * data['possession'] / 100,
      height: 22,
      fill: barcolor
    });

    title.append('rect').attrs({
      x: width / 2,
      y: groundy - 34,
      width: 80 * opponent['possession'] / 100,
      height: 22,
      fill: barcolorOpponent
    });

    title.append('text').attrs({
      x: width / 2 - 60,
      y: groundy - 20,
      fill: '#414e5e',
    }).attr('text-anchor', 'end').text(`${data['possession']}%`);

    title.append('text').attrs({
      x: width / 2 + 60,
      y: groundy - 20,
      fill: '#414e5e',
    }).text(`${opponent['possession']}%`);

  };

};
const lineUp = new function () {
  const root = d3.select('#attack-direction');
  const width = root.node().getBoundingClientRect().width - 2;
  const height = root.node().getBoundingClientRect().height;

  const groundWidth = width;
  const groundHeight = height - 80;
  const groundColor = '#81C784';

  const g = root.append('g');
  const title = g.append('g');
  const ground = g.append('g');
  const footer = g.append('g');

  ground.attr('transform', 'translate(0,' + 20 + ')');
  footer.attr('transform', 'translate(0,' + (groundHeight+20) + ')');
  this.renew = function () {
    title.selectAll('*').remove();
    ground.selectAll('*').remove();
  };

  this.draw = function (team, opponent) {

    const col = ['Left', 'Center', 'Right',];

    let arrowColor = undefined;
    let arrowOpponentColor = undefined;

    switch (team.result) {
      case 'w':
        arrowColor = Constant.win;
        arrowOpponentColor = Constant.lose;
        break;
      case 'd':
        arrowColor = Constant.draw1;
        arrowOpponentColor = Constant.draw2;
        break;
      case 'l':
        arrowColor = Constant.lose;
        arrowOpponentColor = Constant.win;
        break;
    }

    title.append('text').attrs({
      x: 8,
      y: 12,
      fill: '#414e5e',
    }).text('The direction of attack');

    ground.append('rect').attrs({
      x: 0,
      y: 0,
      width: groundWidth,
      height: groundHeight,
      fill: groundColor,
    });
    ground.append('circle').attrs({
      cx: groundWidth / 2,
      cy: groundHeight / 2,
      r: 40,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: groundWidth / 2 - 1 / 2,
      y: 0,
      width: 1,
      height: groundHeight,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: 0,
      y: groundHeight / 2 - 40,
      width: 40,
      height: 80,
      stroke: '#efefef',
      fill: groundColor
    });
    ground.append('rect').attrs({
      x: groundWidth - 40,
      y: groundHeight / 2 - 40,
      width: 40,
      height: 80,
      stroke: '#efefef',
      fill: groundColor
    });

    ground.append('svg:defs').append('svg:marker')
      .attr('id', 'arrow')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('viewBox', '0 -5 10 10')
      .append('path')
      .attr('d', 'M0,-5L5,0L0,5')
      .style('fill', arrowColor);

    ground.append('svg:defs').append('svg:marker')
      .attr('id', 'arrowO')
      .attr('refX', 0)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .attr('viewBox', '0 -5 10 10')
      .append('path')
      .attr('d', 'M0,-5L5,0L0,5')
      .style('fill', arrowOpponentColor);

    for (let i = 0; i < 3; i++) {
      const teamData = team[col[i]];
      const opponentData = opponent[col[2 - i]];

      const y = groundHeight / 3 * i + groundHeight / 6;
      const teamlength = teamData * (width / 2) / 100;
      const opponentlength = opponentData * (width / 2) / 100;

      const teamHeight = teamData * 40 / 100;
      const opponentHeight = opponentData * 40 / 100;

      const padding = 24;

      ground.append('line')
        .attr('x1', padding)
        .attr('y1', y)
        .attr('x2', padding + teamlength)
        .attr('y2', y)
        .attr('stroke', arrowColor)
        .attr('stroke-width', 6)
        .attr('marker-end', 'url(#arrow)');

      ground.append('rect')
        .attr('x', padding)
        .attr('y', y - 10)
        .attr('width', teamlength)
        .attr('height', 20)
        .attr('fill', arrowColor);

      ground.append('text').attrs({
        x: padding + (teamlength+8) / 2,
        y: y,
        fill: '#414e5e',
      }).attr('text-anchor','middle')
        .attr('alignment-baseline','central')
        .attr('font-weight','bold')
        .attr('font-size','12px').text(`${teamData}%`);

      ground.append('line')
        .attr('x1', groundWidth - padding)
        .attr('y1', y)
        .attr('x2', groundWidth - padding - opponentlength)
        .attr('y2', y)
        .attr('stroke', arrowOpponentColor)
        .attr('stroke-width', 6)
        .attr('marker-end', 'url(#arrowO)');

      ground.append('rect')
        .attr('x', groundWidth - padding - opponentlength)
        .attr('y', y - 10)
        .attr('width', opponentlength)
        .attr('height', 20)
        .attr('fill', arrowOpponentColor);

      ground.append('text').attrs({
        x: groundWidth - padding - (opponentlength+8) / 2,
        y: y,
        fill: '#414e5e',
      }).attr('text-anchor','middle')
        .attr('alignment-baseline','central')
        .attr('font-weight','bold')
        .attr('font-size','12px').text(`${opponentData}%`);
    };

    const drawFooter = () => {
      const labelHeight = 16;

      footer.append('rect')
        .attr('x', 10)
        .attr('y', 10)
        .attr('width', 20)
        .attr('height', labelHeight)
        .attr('fill', Constant.win);

      footer.append('text').attrs({
        x: 40,
        y: 10,
        fill: '#414e5e',
      }).attr('alignment-baseline','hanging').text('win');

      footer.append('rect')
        .attr('x', 10)
        .attr('y', 26)
        .attr('width', 10)
        .attr('height', labelHeight)
        .attr('fill', Constant.draw1);

      footer.append('rect')
        .attr('x', 20)
        .attr('y', 26)
        .attr('width', 10)
        .attr('height', labelHeight)
        .attr('fill', Constant.draw2);

      footer.append('text').attrs({
        x: 40,
        y: 26,
        fill: '#414e5e',
      }).attr('alignment-baseline','hanging').text('draw');

      footer.append('rect')
        .attr('x', 10)
        .attr('y', 42)
        .attr('width', 20)
        .attr('height', labelHeight)
        .attr('fill', Constant.lose);

      footer.append('text').attrs({
        x: 40,
        y: 42,
        fill: '#414e5e',
      }).attr('alignment-baseline','hanging').text('lose');
    };
    drawFooter();

  };
};
const heatMap = new function () {
  const root = d3.select('#heat-map');
  const width = root.node().getBoundingClientRect().width;
  const height = root.node().getBoundingClientRect().height;
  const names = ['Tiki-taka', 'Cross Play', 'Catenaccio', 'Total Soccer',];

  const g = root.append('g');
  const title = g.append('g');
  const content = g.append('g');
  let axiesList = Constant.match;

  const axiesHeight = height - 56;
  const divHeight = axiesHeight / 4;
  let csv;
  content.attr('transform', 'translate(' + 140 + ', 16)');
  title.attr('transform', 'translate(34, 80)');

  this.init = function () {
    d3.csv(Constant.dicetory + Constant.filename, data => {
      csv = data;
      this.draw(csv);
    });
  };

  this.draw = function (data) {
    content.selectAll('*').remove();
    title.selectAll('*').remove();

    const contentWidth = width * 5 / 7;
    const divWidth = contentWidth / _.size(axiesList);

    const map = [];

    _.forEach(names, (d, i) => {
      title.append('text').attrs({
        x: 24,
        y: divHeight * (i - 1) + 4,
        fill: '#414e5e',
      }).attr('alignment-baseline', 'hanging').attr('text-anchor', 'middle').text(d);
    });

    _.forEach(axiesList, (round, i) => {
      const listByRound = _.filter(data, row => row['round'] == round);
      map.push(_.countBy(listByRound, 'cluster'));
    });

    _.forEach(axiesList, (d, i) => {
      const x = i * divWidth;
      content.append('line').attrs({
        x1: x,
        y1: 24,
        x2: x,
        y2: height - 32,
        stroke: '#cccccc',
      }).attr('stroke-width', 2);

      let total = 0;

      _.forEach(map[i], d => {
        total += d;
      });

      _.forEach(Constant.color, (color, j) => {
        const val = map[i][j] == undefined ? 0 : map[i][j];

        if (val != 0) {
          content.append('rect').attrs({
            x: x + 2,
            y: divHeight * (j - 1) + 4 + 24,
            width: divWidth - 4,
            height: divHeight - 4,
            fill: color,
            opacity: 1 * val / total * 3,
          });


          content.append('text').attrs({
            x: x + (divWidth - 4) / 2,
            y: divHeight * (j - 1) + 36,
            fill: '#414e5e',
          }).attr('alignment-baseline', 'hanging').attr('text-anchor', 'middle').text(val);
        }

      });

      content.append('text').attrs({
        x: x,
        y: 4,
        fill: '#414e5e',
      }).attr('alignment-baseline', 'hanging').attr('text-anchor', 'middle').text(d);
    });
  };

};

const parallel = new function () {
  const that = this;
  const root = d3.select('#renderer');
  const width = root.node().getBoundingClientRect().width;
  const height = root.node().getBoundingClientRect().height - 60;

  const g = root.append('g');
  const backgroundG = g.append('g');
  const activeG = g.append('g');
  const nationDiv = root.append('g');
  const axisDiv = g.append('g');
  const filterDiv = g.append('g');
  g.attr('transform', 'translate(60,20)');
  nationDiv.attr('transform', 'translate(10,12)');
  let csv;

  let range = {};
  let axies = {};
  let filters = [];
  let nodes = [];
  let selectNodes = [];

  const line = d3.line()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    })
    .curve(d3.curveMonotoneX);

  this.actionInit = function () {
    const yearBtn = d3.selectAll('.year-btn');

    yearBtn.on('click', function () {
      _.forEach(filters, filter => {
        filter.attrs({
          opacity: 0,
        });
      });
      backgroundG.selectAll('*').remove();
      activeG.selectAll('*').remove();
      nationDiv.selectAll('*').remove();
      axisDiv.selectAll('*').remove();
      filterDiv.selectAll('*').remove();

      range = {};
      axies = {};
      filters = [];
      nodes = [];
      selectNodes = [];

      possesionView.init();
      lineUp.renew();

      const btn = d3.select(this);
      Constant.dicetory = btn.text();
      that.draw();
      heatMap.init();
      _.forEach(nodes, node => {
        node.render();
      });
    });
  };

  this.renew = function () {
    activeG.selectAll('*').remove();
    selectNodes = [];
    _.forEach(nodes, node => {
      node.render();
    });
    _.forEach(filters, filter => {
      filter.attrs({
        opacity: 0,
      });
    });
    filters = [];

    possesionView.init();
  };

  const Axis = function (min, max, index, axisCount, column) {
    const diff = (max - min);
    const x = width * index / axisCount;
    const divNum = 50;

    this.getCoord = function (val) {
      let vv = parseInt(val / (diff / divNum)) * (diff / divNum);

      return {
        x,
        y: height - 2 - ((val - min) / (diff) * (height - 4)),
      };
    };

    this.render = function () {
      axisDiv.append('line').attrs({
        x1: x,
        y1: 0,
        x2: x,
        y2: height,
        stroke: '#414e5e',
      }).attr('stroke-width', 2);
      axisDiv.append('text').attrs({
        x: x,
        y: height + 24,
        fill: '#414e5e',
      }).attr('text-anchor', 'middle').text(column);
    };

    return this;
  };

  const NationAxis = function (nations) {
    const imageWidth = 40;
    const padding = 1;
    const imageHeight = height / 32 - 0.5;

    var svg = nationDiv.append('svg').attrs({
      width: imageWidth,
      height: height + 30,
      border: '3px solid #ccc'
    });

    this.render = function () {
      _.forEach(nations, (nation, i) => {

        const y = (imageHeight + padding) * i;
        svg.append('svg:image').attrs({
          'xlink:href': Constant.dicetory + Constant.path['flag'] + Constant.mappingData['image'][nation],
          x: 0,
          y: y,
          width: imageWidth,
          height: imageHeight,
        }).on('click', function () {
          filterDiv.selectAll('*').remove();
          filters = [];
          activeG.selectAll('*').remove();
          selectNodes = [];

          _.forEach(nodes, node => {
            if (node.nation === nation)
              node.render();
          });


          heatMap.draw(_.filter(csv, d => d.team == nation));

        });
      });
    };
  };

  const FilterEvent = function (axis, nodes) {
    const x = axis.getCoord(0).x;
    let filterSection = null;
    let filter;

    this.render = function () {
      filterSection = filterDiv.append('rect').attrs({
        x: x - 10,
        y: 0,
        width: 20,
        height: height,
        opacity: '0',
      });

      let CreateYPosition = 0;
      let selectRange = {
        start: 0,
        end: 0,
      };

      filterSection.call(d3.drag()
        .on('start', function () {
          filter = filterDiv.append('rect').attrs({
            x: x - 10,
            y: d3.event.y,
            width: 20,
            height: 0,
            fill: '#e8a8a8',
            opacity: '0.3'
          });
          CreateYPosition = d3.event.y;
        })
        .on('drag', function () {
          let diffY = d3.event.y - CreateYPosition;
          selectRange.start = (diffY > 0) ? CreateYPosition : d3.event.y;
          selectRange.end = selectRange.start + Math.abs(diffY);

          filter.attrs({
            y: selectRange.start,
            height: Math.abs(diffY),
          });
          filter.x = x;

        })
        .on('end', function () {
          activeG.selectAll('*').attr('opacity', 0);

          if (_.find(filters, filter => filter.x == x)) { // x축에 대하여 중복의 드레그를한 경우
            _.forEach(nodes, node => {
              const coordY = node.getCoordYByX(x);

              if (selectRange.start <= coordY && coordY <= selectRange.end)
                selectNodes.push(node);
            });
          }

          const compareNodes = (selectNodes.length == 0) ? nodes : selectNodes;

          if (!(_.find(filters, filter => filter.x == x)))
            selectNodes = [];

          _.forEach(compareNodes, node => {
            const coordY = node.getCoordYByX(x);

            if (selectRange.start <= coordY && coordY <= selectRange.end)
              selectNodes.push(node);
          });

          _.forEach(selectNodes, node => {
            node.getPath().attr('opacity', .3);
          });

        }));
    };
  };

  const Node = function (data, opponent) {
    let path;
    const thatNode = this;
    this.nation = data['team'];
    const strokeWeight = 2;

    this.getPath = () => path;
    this.getCoords = function (data) {
      const coords = _.chain(data).map(function (v, k) {
        for (var i = 0; i < Constant.categoryColumns.length; i++)
          if (k === Constant.categoryColumns[i])
            return null;

        if (k == 'team' || k == 'Opponent')
          v = Constant.mappingData[Constant.dicetory][k][v];
        else if (Constant.mappingColumns[k])
          v = Constant.mappingData[k][v];

        return axies[k].getCoord(v);
      }).value();

      _.remove(coords, function (d) {
        return d === null;
      });
      return coords;
    };
    const coords = this.getCoords(data);

    this.getCoordYByX = function (x) {
      return (_.find(coords, coord => x == coord.x)).y;
    };

    this.renderbackgroundLine = function () {
      path = backgroundG.append('path').attrs({
        d: line(coords),
        stroke: Constant.pathBackgroundColor,
        opacity: 0.7,
        fill: 'none',
        strokeWeight: 10,
      });
    };

    this.render = function () {
      const color = Constant.color[data[Constant.columneByPathColor]];
      path = activeG.append('path').attrs({
        d: line(coords),
        stroke: color,
        opacity: 0.3,
        fill: 'none',
      }).attr('stroke-width', strokeWeight)
        .attr('nation', data['team']);


      path.on('mouseover', function () {
        path.attr('stroke', '#414e5e');
      }).on('mouseout', function () {
        path.attr('stroke', color);
      });

      path.on('click', function () {
        activeG.selectAll('*').attr('opacity', 0);
        path.attr('opacity', .3);
        thatNode.renderOpponent();
        possesionView.addEvent(data, opponent);
        lineUp.draw(data, opponent);
      });
    };

    this.renderOpponent = function () {
      const color = Constant.color[opponent[Constant.columneByPathColor]];
      activeG.append('path').attrs({
        d: line(this.getCoords(opponent)),
        stroke: color,
        opacity: 0.5,
        fill: 'none',
        strokeWeight: 10,
      }).attr('stroke-width', strokeWeight);
    };

    return this;
  };

  this.draw = function () {
    d3.csv(Constant.dicetory + Constant.filename, data => {
      csv = data;

      const columns = data.columns;
      let nations = _.uniq(_.map(data, d => d['team']));

      nations = _.orderBy(nations, d => Constant.mappingData[Constant.dicetory]['team'][d], 'desc');

      _.forEach(Constant.categoryColumns, rc => {
        _.remove(columns, function (column) {
          return rc === column;
        });
      });
      _.forEach(columns, (column, i) => {
        let r = {};

        if (Constant.mappingColumns[column]) {
          if (column == 'team' || column == 'Opponent') {
            r = {
              max: _.maxBy(data, d => Constant.mappingData[Constant.dicetory][column][d[column]] * 1)[column],
              min: _.minBy(data, d => Constant.mappingData[Constant.dicetory][column][d[column]] * 1)[column],
            };
            r.max = Constant.mappingData[Constant.dicetory][column][r.max];
            r.min = Constant.mappingData[Constant.dicetory][column][r.min];
          } else {
            r = {
              max: _.maxBy(data, d => Constant.mappingData[column][d[column]] * 1)[column],
              min: _.minBy(data, d => Constant.mappingData[column][d[column]] * 1)[column],
            };
            r.max = Constant.mappingData[column][r.max];
            r.min = Constant.mappingData[column][r.min];
          }


        } else {
          r = {
            max: _.maxBy(data, d => d[column] * 1)[column],
            min: _.minBy(data, d => d[column] * 1)[column],
          };
        }

        range[column] = r;
        axies[column] = new Axis(r.min, r.max, i, columns.length, column);
      });

      this.actionInit();

      const nationAxis = new NationAxis(nations);
      nodes = _.map(data, (d, i) => {
        opponent = (i % 2 == 1) ? data[i - 1] : data[i + 1];
        return new Node(d, opponent);
      });

      nationAxis.render();

      _.forEach(axies, axis => {
        axis.render();
      });

      _.forEach(nodes, node => {
        node.renderbackgroundLine();
        node.render();
      });

      const filterEvents = {};
      _.forEach(columns, column => {
        filterEvents[column] = new FilterEvent(axies[column], nodes);
      });

      _.forEach(filterEvents, filterEvent => {
        filterEvent.render();
      });

    });
  };

};

parallel.draw();
possesionView.init();
heatMap.init();
