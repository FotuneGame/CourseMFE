import path from "path";
import webpack from 'webpack';
import {buildWebpack} from "@packages/config-build";
import {BuildMode, BuildPlatform} from "@packages/config-build";
import packageJson from "./package.json";


interface  EnvVariables {
    analyzer:boolean,
    mode:BuildMode,
    port: number,
    platform:BuildPlatform,
    REMOTE_OTHER?:string,
    REMOTE_ABOUT?:string,

}

export default (env: EnvVariables) => {

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? "development",
        port: env.port ?? 3000,
        paths:{
            entry: path.resolve(__dirname,'src','index.tsx'),
            output:path.resolve(__dirname, 'build'),
            html:path.resolve(__dirname,'public','index.html'),
            src:path.resolve(__dirname,'src'),
            icon:path.resolve(__dirname,'public','icon','capybara.ico'),
            locales:path.resolve(__dirname,'public','locales'),
            locales_output:path.resolve(__dirname, 'build','locales'),
        },
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? "desktop",
    });

    const ABOUT_REMOTE_URL = env.REMOTE_OTHER ?? 'http://localhost:3001';
    const OTHER_REMOTE_URL = env.REMOTE_ABOUT?? 'http://localhost:3002';

    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name:"host",
            //выходной файл
            filename:'remoteEntry.js',
            //что получаем другим сервисам
            remotes:{
                about: `about@${ABOUT_REMOTE_URL}/remoteEntry.js`,
                other:`other@${OTHER_REMOTE_URL}/remoteEntry.js`,
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
    )

    return config;
}
