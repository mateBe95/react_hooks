pipeline {
  agent {
    label 'master'
  }

  stages {
    stage ('STAGE NAME') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm --version'
        }
      }
    }