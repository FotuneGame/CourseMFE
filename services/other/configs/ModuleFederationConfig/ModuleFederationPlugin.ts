import webpack from "webpack";
import packageJson from "../../package.json";

export default new webpack.container.ModuleFederationPlugin({
    name:"other",
    //выходной файл
    filename:'remoteEntry.js',
    //что отдаём другим сервисам
    exposes:{
        './Router':'./src/router/Router.tsx',
    },
    //все необходимые библиотеки
    shared:{
        ...packageJson.dependencies,
        react:{
            eager: true, //подгрузка библиотеки сразу противоположность lazy loading
            requiredVersion:packageJson.dependencies['react'],
        },
        "react-router-dom":{
            eager: true,
            requiredVersion:packageJson.dependencies['react-router-dom'],
        },
        "react-dom":{
            eager: true,
            requiredVersion:packageJson.dependencies['react-dom'],
        },
    }
})