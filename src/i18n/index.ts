import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .init({
    lng: 'zh',// 默认语言
    fallbackLng: 'zh', // 匹配不上，提供兜底默认语言
    fallbackNS: 'common', // 默认命名空间，不提供则需要手动指定，否则无法翻译
    resources: {
      'zh': {
        common: {
          title: '当前标题为 {{ title }} {{count}}',
          'hello': '你好',
          'world': '世界',
          userInfo: {
            name: '昵称',
            age: '年龄'
          }
        }
      },
      'en': {
        common: {
          title: 'current title is {{title}} {{ count }}',
          'hello': 'hello',
          'world': 'world',
          userInfo: {
            name: 'name',
            age: 'age'
          }
        }
      }
    },
  })
