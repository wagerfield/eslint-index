function addDoc(url, postfix) {
  return { url, postfix: postfix || '' }
}

exports.docs = {
  'eslint': addDoc('http://eslint.org/docs/rules/'),
  'angular': addDoc('https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/', '.md'),
  'ava': addDoc('https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/', '.md'),
  'backbone': addDoc('https://github.com/ilyavolodin/eslint-plugin-backbone/blob/master/docs/rules/', '.md'),
  'flowtype': addDoc('https://github.com/gajus/eslint-plugin-flowtype#'),
  'import': addDoc('https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/', '.md'),
  'jasmine': addDoc('https://github.com/tlvince/eslint-plugin-jasmine/blob/master/docs/rules/', '.md'),
  'jsdoc': addDoc('https://github.com/gajus/eslint-plugin-jsdoc#'),
  'jsx-a11y': addDoc('https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/', '.md'),
  'lodash': addDoc('https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/', '.md'),
  'lodash-fp': addDoc('https://github.com/jfmengels/eslint-plugin-lodash-fp/blob/master/docs/rules/', '.md'),
  'meteor': addDoc('https://github.com/dferber90/eslint-plugin-meteor/blob/master/docs/rules/', '.md'),
  'mocha': addDoc('https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/', '.md'),
  'mongodb': addDoc('https://github.com/nfroidure/eslint-plugin-mongodb#'),
  'react': addDoc('https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/', '.md'),
  'react-native': addDoc('https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/', '.md'),
  'requirejs': addDoc('https://github.com/cvisco/eslint-plugin-requirejs/blob/master/docs/rules/', '.md')
}

exports.getRuleDocsUrl = (rule) => {
  const docs = exports.docs[rule.group]
  return docs ? `${docs.url}${rule.rule}${docs.postfix}` :
    `https://www.npmjs.com/package/eslint-plugin-${rule.group}#${rule.rule}`
}
