function addDocs(url, postfix) {
  return { url, postfix: postfix || '' }
}

exports.docs = {
  'eslint': addDocs('http://eslint.org/docs/rules/'),
  'angular': addDocs('https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/', '.md'),
  'ava': addDocs('https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/', '.md'),
  'backbone': addDocs('https://github.com/ilyavolodin/eslint-plugin-backbone/blob/master/docs/rules/', '.md'),
  'flowtype': addDocs('https://github.com/gajus/eslint-plugin-flowtype#'),
  'import': addDocs('https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/', '.md'),
  'inferno': addDocs('https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/', '.md'),
  'jasmine': addDocs('https://github.com/tlvince/eslint-plugin-jasmine/blob/master/docs/rules/', '.md'),
  'jsdoc': addDocs('https://github.com/gajus/eslint-plugin-jsdoc#'),
  'jsx-a11y': addDocs('https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/', '.md'),
  'lodash': addDocs('https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/', '.md'),
  'lodash-fp': addDocs('https://github.com/jfmengels/eslint-plugin-lodash-fp/blob/master/docs/rules/', '.md'),
  'meteor': addDocs('https://github.com/dferber90/eslint-plugin-meteor/blob/master/docs/rules/', '.md'),
  'mocha': addDocs('https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/', '.md'),
  'mongodb': addDocs('https://github.com/nfroidure/eslint-plugin-mongodb#'),
  'react': addDocs('https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/', '.md'),
  'react-native': addDocs('https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/', '.md'),
  'requirejs': addDocs('https://github.com/cvisco/eslint-plugin-requirejs/blob/master/docs/rules/', '.md')
}

exports.getRuleDocsUrl = (rule) => {
  const docs = exports.docs[rule.group]
  return docs ? `${docs.url}${rule.rule}${docs.postfix}` :
    `https://www.npmjs.com/package/eslint-plugin-${rule.group}#${rule.rule}`
}
