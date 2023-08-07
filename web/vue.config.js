const path = require('path');

module.exports = {
    filenameHashing: false,
    outputDir: path.resolve(__dirname, "../dist-web"),
    chainWebpack: config => {
        config.plugin('copy')
            .tap(([ pathConfigs ]) => {
                const to = pathConfigs[ 0 ].to
                // so the original `/public` folder keeps priority
                pathConfigs[ 0 ].force = true

                // add other locations.
                pathConfigs.unshift({
                    from: './src/assets/img',
                    to: `${to}/img`,
                })

                return [ pathConfigs ]
            })
    },
}