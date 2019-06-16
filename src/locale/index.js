export default {
  en: () => import(/* webpackChunkName: "en" */ './en').then(data => {
    console.log('loaded en', data);
    return data.default;
  }),
  fr: () => import(/* webpackChunkName: "fr" */ './fr').then(data => {
    console.log('loaded fr', data);
    return data.default;
  }),
};
