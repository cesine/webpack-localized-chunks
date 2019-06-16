export default {
  en: () => import("./en").then(data => {
    console.log('loaded en', data);
    return data.default;
  }),
  fr: () => import("./fr").then(data => {
    console.log('loaded fr', data);
    return data.default;
  }),
};
