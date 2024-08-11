import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'zh',// 默认语言
    ns: ['common'], // 使用backend插件，需要显示配置命名空间，对应加载{{ns}}.json
    fallbackLng: 'zh', // 匹配不上，提供兜底默认语言
    fallbackNS: 'common', // 默认命名空间，不提供则需要手动指定，否则无法翻译,
    /** 配置 LanguageDetector */
    detection: {
      order: ['htmlTag']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 加载翻译文件的路径，以/开头代表访问的服务器资源路径，如 http://localhost:5173/locales/zh/common.json
      addPath: '/locales/add/{{lng}}/{{ns}}', // 添加翻译文件的路径
    },
    // resources: {
    //   'zh': {
    //     common: {
    //       title: '当前标题为 {{ title }} {{count}}',
    //       hello: '你好',
    //       world: '世界',
    //       userInfo: {
    //         name: '昵称',
    //         age: '年龄'
    //       }
    //     }
    //   },
    //   'en': {
    //     common: {
    //       title: 'current title is {{title}} {{ count }}',
    //       hello: 'hello',
    //       world: 'world',
    //       userInfo: {
    //         name: 'name',
    //         age: 'age'
    //       }
    //     }
    //   }
    // },
  })
