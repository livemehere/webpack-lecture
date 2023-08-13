const path = require('path');

module.exports = {
    mode:process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        clean:true,
        globalObject: 'this',
        library:{
            name:'kongLibrary',
            type:'umd',
        },
    },
    externals:{
        dayjs:'commonjs dayjs',
    }
}