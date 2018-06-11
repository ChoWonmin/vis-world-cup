const Constant = new function() {
    this.filename = 'data/worldCub2010.csv';
    this.categoryColumns = [ 'year', 'group', 'match', 'score', 'shots', 'target',
        'LB', 'CB', 'RB', 'LM', 'CM', 'RM', 'LF', 'CF', 'RF', 'LA', 'CA', 'RA',
        'coner kicks', 'MPC', 'MPA', 'LPC', 'SPC', 'TPC', 'TPA', 'LPA', 'SPA','result', 'fouls',
        'LPP', 'SPP', 'LPA_SPA', 'LPC_SPC', 'SPC_SPA' ];
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
        'w':'#ec6c60',
        'd':'#ecaa41',
        'l':'#a4d086',
    }

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
    this.pathDisableColor = '#E0E0E0';
};

const parallel = new function() {
    const root = d3.select('#renderer');
    const width = 1060;
    const height = 824;

    const g = root.append('g');
    const disableG = g.append('g');
    const activeG = g.append('g');
    const nationDiv = root.append('g');
    g.attr('transform', 'translate(20,20)');
    nationDiv.attr('transform', 'translate(20,12)');

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
        //.curve(d3.curveCardinal);
        //.curve(d3.curveMonotoneX);
        //.curve(d3.curveCatmullRom);


    this.actionInit = function(data, columns) {
        const resetBtn = d3.select('.reset-btn');
        const colorDropDown = d3.selectAll('.item');
        const colorBtn = d3.selectAll('.color-picker');

        resetBtn.on("click", function() {
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
        });

        colorDropDown.on("click", function() {
            const seperator = d3.select(this).text();
            const seperateData = _.map(data, d => d[ seperator ]);
            const orderedData = _.orderBy(seperateData);
            const bound = {
                oneThird: orderedData[ orderedData.length / 3 ],
                twoThird: orderedData[ orderedData.length * 2 / 3 ],
            }
            _.forEach(seperateData, (d, i) => {
                if (d <= bound.oneThird)
                    nodes[ i ].setAttr({ stroke: Constant.color[ 'low' ] });
                else if (d <= bound.twoThird)
                    nodes[ i ].setAttr({ stroke: Constant.color[ 'medium' ] });
                else
                    nodes[ i ].setAttr({ stroke: Constant.color[ 'high' ] });
            });
        });

        colorBtn.on("click", function() {

        });

    };

    const Axis = function(min, max, index, axisCount, column) {
        const diff = max - min;
        const x = width * index / axisCount + 60;

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
            });
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

        var svg2 = nationDiv.append('svg').attrs({
            x: width - 60,
            width: imageWidth,
            height: height + 30,
            border: '3px solid #ccc'
        });

        this.render = function() {
            _.forEach(nations, (nation, i) => {
                svg.append('svg:image').attrs({
                    'xlink:href': 'image/' + Constant.mappingData[ 'image' ][ nation ],
                    x: 0,
                    y: (imageHeight + padding) * i,
                    width: imageWidth,
                    height: imageHeight,
                });
                svg2.append('svg:image').attrs({
                    'xlink:href': 'image/' + Constant.mappingData[ 'image' ][ nation ],
                    x: 0,
                    y: (imageHeight + padding) * i,
                    width: imageWidth,
                    height: imageHeight,
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
                x: x - 20,
                y: 0,
                width: 40,
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

    const Node = function(data) {
        const color = Constant.color[ data[ Constant.columneByPathColor ] ];
        let path;

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

        this.getCoordYByX = function(x) {
            return (_.find(coords, coord => x == coord.x)).y;
        }

        this.renderDisabledLine = function() {
            path = disableG.append('path').attrs({
                d: line(coords),
                stroke: Constant.pathDisableColor,
                opacity: 0.7,
                fill: 'none',
                strokeWeight: 10,
            });
        }

        this.render = function() {
            path = activeG.append('path').attrs({
                d: line(coords),
                stroke: color,
                opacity: 0.7,
                fill: 'none',
                strokeWeight: 10,
            });
        };

        this.setAttr = function(obj) {
            path.attrs(obj);
        };

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
            nodes = _.map(data, d => new Node(d));

            nationAxis.render();

            _.forEach(axies, axis => {
                axis.render();
            });

            _.forEach(nodes, node => {
                node.renderDisabledLine();
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

    this.activeNode = function() {

    };

};

parallel.draw();
