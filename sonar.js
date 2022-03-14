require('dotenv').config()

const scanner = require('sonarqube-scanner')
scanner(
  {
    serverUrl: 'http://localhost:9000/',
    token: process.env.TOKEN_SONAR_QUBE,
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
