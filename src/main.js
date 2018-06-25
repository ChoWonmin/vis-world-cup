const Constant = new function() {
        this.dicetory = 2014;
        this.filename = '/data/worldCup.csv';
        this.categoryColumns = [ 'year', 'group', 'match', 'score', 'shots', 'target',
            'LB', 'CB', 'RB', 'LM', 'CM', 'RM', 'LF', 'CF', 'RF', 'Left', 'Right', 'LPA_SPA',
            'coner.kicks', 'MPC', 'MPA', 'LPC', 'SPC', 'TPC', 'TPA', 'LPA', 'SPA', 'result', 'round',
            'LPP_SPP', 'LPC_SPC', 'LPC_LPA', 'Opponent', 'side', 'cluster', 'fouls', 'formation', 'LPP', 'SPP', 'side_attack' ];
        this.mappingColumns = { team: true, formation: true, Opponent: true };
        this.columneByPathColor = 'cluster';

        /*
        this.color = {
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
        this.color = {
            1: '#F44336',
            2: '#4CAF50',
            3: '#4797d3',
            4: '#ecaa41',
        };

        this.position = [
            [ 'LB', 'LM', 'LF' ], [ 'CB', 'CM', 'CF' ], [ 'RB', 'RM', 'RF' ],
        ];
        this.mappingData = {
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

        };
        this.pathBackgroundColor = '#E0E0E0';

        this.match = [
            'Match1', 'Match2', 'Match3', 'Round of 16', 'Round of 8', 'Semi_final', 'Third_place', 'Final',
        ];

        this.path = {
            flag: '/image/nation-flag/',
        }
    };
const possesionView = new function() {
    const root = d3.select('#possession-view');
    const width = root.node().getBoundingClientRect().width;
    const height = root.node().getBoundingClientRect().height;

    const g = root.append('g');
    const title = g.append('g');
    const ground = g.append('g');

    const groundWidth = width / 2 - 2;
    const groundHeight = height * 1 / 2;
    const offsetX = width / 2 + 4;

    title.attr('transform', 'translate(0,' + 4 + ')');
    ground.attr('transform', 'translate(0,' + height * 1 / 2 + ')');

    this.init = function() {
        title.selectAll('*').remove();
        ground.selectAll('*').remove();
    };

    this.addEvent = function(team, opponent) {
        title.selectAll('*').remove();
        ground.selectAll('*').remove();

        this.draw(0, team, opponent);
    }
    this.draw = function(x, data, opponent) {
        const heatMapWidth = groundWidth / 3;
        const heatMapHeight = groundHeight / 3;

        var svg = title.append('svg').attrs({
            width: width,
            height: 48,
            border: '3px solid #ccc'
        });

        svg.append('svg:image').attrs({
            'xlink:href': Constant.dicetory + Constant.path[ 'flag' ] + Constant.mappingData[ 'image' ][ data[ 'team' ] ],
            x: 4,
            y: 4,
            width: 44,
            height: 44,
        });

        title.append('text').attrs({
            x: 54 + x,
            y: 24,
            fill: '#414e5e',
        }).text(data[ 'team' ]);
        title.append('text').attrs({
            x: 54 + x,
            y: 40,
            fill: '#414e5e',
        }).text(data[ 'formation' ]);
        title.append('text').attrs({
            x: 142 + x,
            y: 44,
            fill: '#414e5e',
        }).attr('font-size', '20px').text(data[ 'score' ]);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                const heatMapX = heatMapWidth * j;
                const heatMapY = heatMapHeight * i;

                ground.append('rect').attrs({
                    x: heatMapX + x,
                    y: heatMapY,
                    width: heatMapWidth,
                    height: heatMapHeight,
                    fill: 'darkgreen',
                }).style('opacity', 0.2 + 0.03 * data[ Constant.position[ i ][ j ] ]);
                ground.append('text').attrs({
                    x: heatMapX + 20 + x,
                    y: heatMapY + 20,
                    fill: '#fafafa',
                }).text(data[ Constant.position[ i ][ j ] ]);
            }
            ;
        }
        ;

        svg.append('svg:image').attrs({
            'xlink:href': Constant.dicetory + Constant.path[ 'flag' ] + Constant.mappingData[ 'image' ][ opponent[ 'team' ] ],
            x: width - x - 50,
            y: 4,
            width: 44,
            height: 44,
        });

        title.append('text').attrs({
            x: width - 54,
            y: 24,
            fill: '#414e5e',
        }).attr('text-anchor', 'end').text(opponent[ 'team' ]);
        title.append('text').attrs({
            x: width - 54,
            y: 40,
            fill: '#414e5e',
        }).attr('text-anchor', 'end').text(opponent[ 'formation' ]);
        title.append('text').attrs({
            x: width - 142,
            y: 44,
            fill: '#414e5e',
        }).attr('text-anchor', 'end').attr('font-size', '20px').text(opponent[ 'score' ]);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                const heatMapX = heatMapWidth * (2 - j);
                const heatMapY = heatMapHeight * i;

                ground.append('rect').attrs({
                    x: heatMapX + offsetX,
                    y: heatMapY,
                    width: heatMapWidth,
                    height: heatMapHeight,
                    fill: 'darkgreen',
                }).style('opacity', 0.2 + 0.03 * opponent[ Constant.position[ i ][ j ] ]);
                ground.append('text').attrs({
                    x: heatMapX + 20 + offsetX,
                    y: heatMapY + 20,
                    fill: '#fafafa',
                }).text(opponent[ Constant.position[ i ][ j ] ]);
            }
            ;
        }
        ;

        title.append('text').attrs({
            x: 8,
            y: height * 1 / 2 - 28,
            fill: '#414e5e',
        }).text('Ball Possession');

    };

};
const lineUp = new function() {
    const root = d3.select('#attack-direction');
    const width = root.node().getBoundingClientRect().width - 2;
    const height = root.node().getBoundingClientRect().height;

    const groundWidth = width / 2 - 24;
    const groundHeight = height * 2 / 3 - 20;

    const g = root.append('g');
    const title = g.append('g');
    const content = g.append('g');

    content.attr('transform', 'translate(0,' + 20 + ')');
    this.renew = function() {
        title.selectAll('*').remove();
        content.selectAll('*').remove();
    }
    this.draw = function(team, opponent) {

        const col = [ 'Left', 'Center', 'Right',  ];

        title.append('text').attrs({
            x: 8,
            y: 12,
            fill: '#414e5e',
        }).attr('font-size','12px').text('The direction of attack');

        content.append('rect').attrs({
            x: 0,
            y: 4,
            width: groundWidth,
            height: groundHeight,
            fill: '#d8e8cb',
            stroke: '#fafafa',
        }).attr('stroke-width', 3);
        content.append('rect').attrs({
            x: width - groundWidth,
            y: 4,
            width: groundWidth,
            height: groundHeight,
            fill: '#d8e8cb',
            stroke: '#fafafa',
        }).attr('stroke-width', 3);

        for (var i = 0; i < 3; i++) {
            let d = team[ col[ i ] ];
            let w = d / 100 * groundWidth * 3 / 4;
            const h = (groundHeight / 3) / 3;
            const y = groundHeight / 3 * i + 4 + h;

            content.append('rect').attrs({
                x: groundWidth - 8 - w,
                y: y,
                width: w,
                height: h,
                fill: '#e73c46',
            });
            content.append('text').attrs({
                x: 12,
                y: y,
                fill: '#414e5e',
            }).attr('alignment-baseline', 'hanging').text(d + '%');

            d = opponent[ col[ i ] ];
            w = d / 100 * groundWidth * 3 / 4;
            content.append('rect').attrs({
                x: width - groundWidth + 8,
                y: y,
                width: w,
                height: h,
                fill: '#e73c46',
            });
            content.append('text').attrs({
                x: width - 12,
                y: y,
                fill: '#414e5e',
            }).attr('alignment-baseline', 'hanging').attr('text-anchor', 'end').text(d + '%');

            content.append('text').attrs({
                x: width / 2,
                y: y,
                fill: '#414e5e',
            }).attr('alignment-baseline', 'hanging').attr('text-anchor', 'middle').text(col[ i ]);
        }
        ;

    }
};
const heatMap = new function() {
    const root = d3.select('#heat-map');
    const width = root.node().getBoundingClientRect().width;
    const height = root.node().getBoundingClientRect().height;
    const names = [ 'Tiki-taka', 'Cross Play',  'Catenaccio', 'Total Soccer', ];

    const g = root.append('g');
    const title = g.append('g');
    const content = g.append('g');
    let axiesList = Constant.match;

    const axiesHeight = height - 56;
    const divHeight = axiesHeight / 4;
    let csv;
    content.attr('transform', 'translate(' + 140 + ', 16)');
    title.attr('transform', 'translate(34, 80)');

    this.init = function() {
        d3.csv(Constant.dicetory + Constant.filename, data => {
            csv = data;
            this.draw(csv);
        });
    };

    this.draw = function(data) {
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
            const listByRound = _.filter(data, row => row[ 'round' ] == round);
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

            _.forEach(map[ i ], d => {
                total += d;
            });

            _.forEach(Constant.color, (color, j) => {
                const val = map[ i ][ j ] == undefined ? 0 : map[ i ][ j ];

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

const parallel = new function() {
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
        .x(function(d) {
            return d.x;
        })
        .y(function(d) {
            return d.y;
        })
        .curve(d3.curveMonotoneX)

    this.actionInit = function() {
        const yearBtn = d3.selectAll('.year-btn');

        yearBtn.on('click', function() {
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

    this.renew = function() {
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
    }

    const Axis = function(min, max, index, axisCount, column) {
        const diff = (max - min);
        const x = width * index / axisCount;
        const divNum = 50;

        this.getCoord = function(val) {
            let vv = parseInt(val / (diff / divNum)) * (diff / divNum);

            return {
                x,
                y: height - ((val - min) / (diff) * height),
            }
        };

        this.render = function() {
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
    }

    const NationAxis = function(nations) {
        const imageWidth = 40;
        const padding = 1;
        const imageHeight = height / 32 - 0.5;

        var svg = nationDiv.append('svg').attrs({
            width: imageWidth,
            height: height + 30,
            border: '3px solid #ccc'
        });
        console.log(nations)

        this.render = function() {
            _.forEach(nations, (nation, i) => {

                const y = (imageHeight + padding) * i;
                svg.append('svg:image').attrs({
                    'xlink:href': Constant.dicetory + Constant.path[ 'flag' ] + Constant.mappingData[ 'image' ][ nation ],
                    x: 0,
                    y: y,
                    width: imageWidth,
                    height: imageHeight,
                }).on('click', function() {
                    filterDiv.selectAll('*').remove();
                    filters = [];
                    activeG.selectAll('*').remove();
                    selectNodes = [];

                    _.forEach(nodes, node => {
                        if (node.nation === nation)
                            node.render()
                    });


                    heatMap.draw(_.filter(csv, d => d.team == nation));

                });
            });
        }
    }

    const FilterEvent = function(axis, nodes) {
        const x = axis.getCoord(0).x;
        let filterSection = null;
        let filter;

        this.render = function() {
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
                .on('start', function() {
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
                .on('drag', function() {
                    let diffY = d3.event.y - CreateYPosition;
                    selectRange.start = (diffY > 0) ? CreateYPosition : d3.event.y;
                    selectRange.end = selectRange.start + Math.abs(diffY);

                    filter.attrs({
                        y: selectRange.start,
                        height: Math.abs(diffY),
                    });
                    filter.x = x;

                })
                .on('end', function() {
                    activeG.selectAll('*').remove();

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
                        node.render();
                    })

                }));
        }
    }

    const Node = function(data, opponent) {
        let path;
        const thatNode = this;
        this.nation = data[ 'team' ];
        const strokeWeight = 2;

        this.getCoords = function(data) {
            const coords = _.chain(data).map(function(v, k) {
                for (var i = 0; i < Constant.categoryColumns.length; i++)
                    if (k === Constant.categoryColumns[ i ])
                        return null;

                if (k == 'team' || k == 'Opponent')
                    v = Constant.mappingData[ Constant.dicetory ][ k ][ v ];
                else if (Constant.mappingColumns[ k ])
                    v = Constant.mappingData[ k ][ v ];

                return axies[ k ].getCoord(v);
            }).value();

            _.remove(coords, function(d) {
                return d === null;
            });
            return coords;
        };
        const coords = this.getCoords(data);

        this.getCoordYByX = function(x) {
            return (_.find(coords, coord => x == coord.x)).y;
        }

        this.renderbackgroundLine = function() {
            path = backgroundG.append('path').attrs({
                d: line(coords),
                stroke: Constant.pathBackgroundColor,
                opacity: 0.7,
                fill: 'none',
                strokeWeight: 10,
            });
        };

        this.render = function() {
            const color = Constant.color[ data[ Constant.columneByPathColor ] ];
            path = activeG.append('path').attrs({
                d: line(coords),
                stroke: color,
                opacity: 0.3,
                fill: 'none',
            }).attr('stroke-width', strokeWeight)
                .attr('nation', data[ 'team' ]);


            path.on('mouseover', function() {
                path.attr('stroke', '#414e5e');
            }).on('mouseout', function() {
                path.attr('stroke', color);
            });

            path.on('click', function() {
                activeG.selectAll('*').remove();
                thatNode.render();
                thatNode.renderOpponent();
                possesionView.addEvent(data, opponent);
                lineUp.draw(data, opponent);
            });
        };


        this.renderOpponent = function() {
            const color = Constant.color[ opponent[ Constant.columneByPathColor ] ];
            activeG.append('path').attrs({
                d: line(this.getCoords(opponent)),
                stroke: color,
                opacity: 0.5,
                fill: 'none',
                strokeWeight: 10,
            }).attr('stroke-width', strokeWeight);
        }

        return this;
    }

    this.draw = function() {
        d3.csv(Constant.dicetory + Constant.filename, data => {
            csv = data;

            const columns = data.columns;
            let nations = _.uniq(_.map(data, d => d[ 'team' ]));

            nations = _.orderBy(nations, d => Constant.mappingData[ Constant.dicetory ][ 'team' ][ d ], 'desc');

            _.forEach(Constant.categoryColumns, rc => {
                _.remove(columns, function(column) {
                    return rc === column;
                });
            });
            _.forEach(columns, (column, i) => {
                let r = {};

                if (Constant.mappingColumns[ column ]) {
                    if (column == 'team' || column == 'Opponent') {
                        r = {
                            max: _.maxBy(data, d => Constant.mappingData[ Constant.dicetory ][ column ][ d[ column ] ] * 1)[ column ],
                            min: _.minBy(data, d => Constant.mappingData[ Constant.dicetory ][ column ][ d[ column ] ] * 1)[ column ],
                        };
                        r.max = Constant.mappingData[ Constant.dicetory ][ column ][ r.max ];
                        r.min = Constant.mappingData[ Constant.dicetory ][ column ][ r.min ];
                    }
                    else {
                        r = {
                            max: _.maxBy(data, d => Constant.mappingData[ column ][ d[ column ] ] * 1)[ column ],
                            min: _.minBy(data, d => Constant.mappingData[ column ][ d[ column ] ] * 1)[ column ],
                        };
                        r.max = Constant.mappingData[ column ][ r.max ];
                        r.min = Constant.mappingData[ column ][ r.min ];
                    }


                }
                else {
                    r = {
                        max: _.maxBy(data, d => d[ column ] * 1)[ column ],
                        min: _.minBy(data, d => d[ column ] * 1)[ column ],
                    };
                }

                range[ column ] = r;
                axies[ column ] = new Axis(r.min, r.max, i, columns.length, column);
            });

            this.actionInit();

            const nationAxis = new NationAxis(nations);
            nodes = _.map(data, (d, i) => {
                opponent = (i % 2 == 1) ? data[ i - 1 ] : data[ i + 1 ];
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
                filterEvents[ column ] = new FilterEvent(axies[ column ], nodes);
            });

            _.forEach(filterEvents, filterEvent => {
                filterEvent.render();
            });

        })
    };

};

parallel.draw();
possesionView.init();
heatMap.init();
