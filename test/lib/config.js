(function () {

    var baseUrl = window.AMD_BASE_URL || '../';

    if (typeof require !== 'undefined') {
        require.config({
            baseUrl: baseUrl,
            paths: {
                'echarts': 'dist/echarts',
                'zrender': '../zrender/dist/zrender',
                'geoJson': '../geoData/geoJson',
                'theme': 'theme',
                'data': 'test/data',
                'map': 'map',
                'extension': 'dist/extension'
            },
            urlArgs: '_v_=' + (+new Date())
        });
    }

    if (typeof requireES !== 'undefined') {
        requireES.config({
            baseUrl: baseUrl,
            paths: {
                'echarts': './',
                'zrender': '../zrender',
                'geoJson': 'geoData/geoJson',
                'theme': 'theme',
                'data': 'test/data',
                'map': 'map',
                'extension': 'extension'
            },
            urlArgs: '_v_=' + (+new Date())
        });
    }

})();