var _config = {
   // 迎红竞彩
   URL: 'http://api1.fhjc87.com:8880/api/',
   company: 'fhjc',
   homeTitle: '迎红竞彩',
   webURL: 'http://www.fhjc87.com/',
}
if (typeof require != 'undefined') {
   define(function () {
      return _config;
   })
} else {
   window._config = _config;
}
