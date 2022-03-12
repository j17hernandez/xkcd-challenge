const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000/',
    token: '83d3756ae7d996c759d7b363fb4b1abab7f5cc14',
    options: {
      'sonar.projectName': 'xkcd-challenge',
      'sonar.projectKey': 'xkcd-challenge',
      'sonar.projectDescription': 'front of xkcd-challenge project',
      'sonar.javascript.coveragePlugin': 'lcov',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sources': '.',
      'sonar.coverage.exclusions': 'test/**,plugins/**,mixins/**,**/*.js,layouts/**, pages/**',
      'sonar.cpd.exclusions': 'test/**,plugins/**,mixins/**,**/*.js,layouts/**, pages/**',
      'sonar.cs.exclusions': 'test/**,plugins/**,mixins/**,**/*.js,layouts/**, pages/**',
    }
  },
  () => process.exit()
)
