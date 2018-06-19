const Constant = new function() {
    this.filename = 'data/worldCub2010.csv';
    this.categoryColumns = [ 'year', 'group', 'match', 'score', 'shots', 'target',
        'LB', 'CB', 'RB', 'LM', 'CM', 'RM', 'LF', 'CF', 'RF', 'LA', 'CA', 'RA',
        'coner kicks', 'MPC', 'MPA', 'LPC', 'SPC', 'TPC', 'TPA', 'LPA', 'SPA', 'result', 'fouls',
        'LPP', 'SPP', 'LPA_SPA', 'LPC_SPC', 'SPC_SPA', 'LPC_LPA', 'Opponent' ];
    this.mappingColumns = { team: true, formation: true, Opponent: true };
    this.columneByPathColor = 'result';
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
        'w': '#ec6c60',
        'd': '#ecaa41',
        'l': '#a4d086',
    };

    this.position = [
        [ 'LB', 'LM', 'LF' ], [ 'CB', 'CM', 'CF' ], [ 'RB', 'RM', 'RF' ],
    ];
    this.mappingData = {
        team: {
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
            'Honduras': 24,
            'Chile': 3,
            'Spain': 2,
            'Switzerland': 1,
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
        formation: {
            334: 1,
            3421: 2,
            5131: 3,
            541: 4,
            523: 5,
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
        }
    };
    this.pathBackgroundColor = '#E0E0E0';

    this.path = {
        flag: 'image/nation-flag/'
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
    const groundHeight = height * 2 / 3;
    ground.attr('transform', 'translate(0,' + height / 3 + ')');

    this.init = function() {
        title.selectAll('*').remove();
        ground.selectAll('*').remove();

        this.renderGround(0);
        this.renderGround(width / 2 + 4);
    };
    this.renderGround = function(x) {
        ground.append('rect').attrs({
            x: x,
            y: 0,
            width: groundWidth,
            height: groundHeight,
            fill: '#a4d086',
        });
        ground.append('rect').attrs({
            x: x,
            y: 0,
            width: groundWidth,
            height: groundHeight,
            fill: 'none',
            stroke: '#cccccc',
        });

        ground.append('line').attrs({
            x1: groundWidth / 2 + x,
            y1: 2,
            x2: groundWidth / 2 + x,
            y2: groundHeight - 2,
            stroke: '#fafafa',
        }).attr('stroke-width', 3);

        const radius = 20;
        ground.append('circle').attrs({
            cx: groundWidth / 2 + x,
            cy: groundHeight / 2,
            r: radius,
            fill: 'none',
            stroke: '#fafafa',
        }).attr('stroke-width', 3);
    };

    this.addEvent = function(team, opponent) {
        title.selectAll('*').remove();
        ground.selectAll('*').remove();

        this.draw(0, team);
        this.draw(width / 2 + 4, opponent);
    }
    this.draw = function(x, data) {
        const heatMapWidth = groundWidth / 3;
        const heatMapHeight = groundHeight / 3;

        var svg = title.append('svg').attrs({
            width: width,
            height: 40,
            border: '3px solid #ccc'
        });

        svg.append('svg:image').attrs({
            'xlink:href': Constant.path[ 'flag' ] + Constant.mappingData[ 'image' ][ data[ 'team' ] ],
            x: 4 + x,
            y: 4,
            width: 40,
            height: 40,
        });

        title.append('text').attrs({
            x: 50 + x,
            y: 24,
            fill: '#414e5e',
        }).text(data[ 'team' ]);
        title.append('text').attrs({
            x: 50 + x,
            y: 48,
            fill: '#414e5e',
        }).text(data[ 'formation' ]);

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
            };

        };
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
    g.attr('transform', 'translate(80,20)');
    nationDiv.attr('transform', 'translate(10,12)');

    const range = {};
    const axies = {};
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
        .curve(d3.curveLinear);

    this.actionInit = function(data, columns) {
        const resetBtn = d3.select('.reset-btn');

        resetBtn.on("click", function() {

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
        const diff = max - min;
        const x = width * index / axisCount;

        this.getCoord = function(val) {
            return {
                x,
                y: height - ((val - min) / diff * height),
            }
        };

        this.render = function() {
            g.append('line').attrs({
                x1: x,
                y1: 0,
                x2: x,
                y2: height,
                stroke: '#414e5e',
            }).attr('stroke-width', 2);
            g.append('text').attrs({
                x: x - 16,
                y: height + 24,
                fill: '#414e5e',
            }).text(column);
        };

        return this;
    }

    const NationAxis = function(nations) {
        const imageWidth = 60;
        const padding = 4;
        const imageHeight = height / 32 - 3.5;

        var svg = nationDiv.append('svg').attrs({
            width: imageWidth,
            height: height + 30,
            border: '3px solid #ccc'
        });

        this.render = function() {
            _.forEach(nations, (nation, i) => {
                const y = (imageHeight + padding) * i;
                svg.append('svg:image').attrs({
                    'xlink:href': Constant.path[ 'flag' ] + Constant.mappingData[ 'image' ][ nation ],
                    x: 0,
                    y: y,
                    width: imageWidth,
                    height: imageHeight,
                }).on('click', function() {
                    activeG.selectAll('*').remove();
                    selectNodes = [];
                    _.forEach(filters, filter => {
                        filter.attrs({
                            opacity: 0,
                        });
                    });
                    filters = [];

                    _.forEach(nodes, node => {
                        const coordY = node.getCoordYByX(axies[ 'team' ].getCoord().x);

                        if (y <= coordY && coordY <= y + imageHeight)
                            node.render();

                    });
                });
            });
        }
    }

    const FilterEvent = function(axis, nodes) {
        const x = axis.getCoord(0).x;
        let filterSection = null;
        let filter;

        this.render = function() {
            filterSection = g.append('rect').attrs({
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
                    filter = g.append('rect').attrs({
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
                    });

                    filters.push(filter);
                }))
        }
    }

    const Node = function(data, opponent) {

        let path;
        const thatNode = this;

        this.getCoords = function(data) {
            const coords = _.chain(data).map(function(v, k) {
                for (var i = 0; i < Constant.categoryColumns.length; i++)
                    if (k === Constant.categoryColumns[ i ])
                        return null;

                if (Constant.mappingColumns[ k ])
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
            path.on('click', function() {
                that.renew();
            });
        }

        this.render = function() {
            const color = Constant.color[ data[ Constant.columneByPathColor ] ];
            path = activeG.append('path').attrs({
                d: line(coords),
                stroke: color,
                opacity: 0.5,
                fill: 'none',
                strokeWeight: 10,
            }).attr('stroke-width', 3);

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
            }).attr('stroke-width', 3);
        }

        return this;
    }

    this.draw = function() {
        d3.csv(Constant.filename, data => {
            const columns = data.columns;
            const nations = _.uniq(_.map(data, d => d[ 'team' ]));


            _.forEach(Constant.categoryColumns, rc => {
                _.remove(columns, function(column) {
                    return rc === column;
                });
            });
            _.forEach(columns, (column, i) => {
                let r = {};

                if (Constant.mappingColumns[ column ]) {
                    r = {
                        max: _.maxBy(data, d => Constant.mappingData[ column ][ d[ column ] ] * 1)[ column ],
                        min: _.minBy(data, d => Constant.mappingData[ column ][ d[ column ] ] * 1)[ column ],
                    };

                    r.max = Constant.mappingData[ column ][ r.max ];
                    r.min = Constant.mappingData[ column ][ r.min ];
                }
                else {
                    r = {
                        max: _.maxBy(data, d => d[ column ] * 1)[ column ],
                        min: _.minBy(data, d => d[ column ] * 1)[ column ],
                    };
                }

                range[ column ] = r;
                axies[ column ] = new Axis(r.min, r.max, i, columns.length, column);

                this.actionInit(data, columns);
            });

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


