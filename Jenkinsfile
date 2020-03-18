pipeline {
  agent {
    label 'master'
  }

  stages {
    stage ('BUILD AND DEPLOY GH PAGES') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm run deploy '
        }
      }
    }
    stage ('STAGE NAME') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm --version'
        }
      }
    }
  }
}