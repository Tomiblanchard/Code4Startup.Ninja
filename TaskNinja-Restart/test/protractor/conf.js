exports.config = {
    seleniumAdress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }]
}
