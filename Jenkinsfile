pipeline {
  agent {
    label 'master'
  }

  stages {
    stage ('INSTALL DEPENDENCY') {
        steps {
            sh 'npm install'
        }
    }

    stage ('BUILD') {
        steps {
            sh 'npm run build'
        }
    }

    stage ('BUILD AND DEPLOY GH PAGES') {
        steps {
            sh 'npm run deploy'
        }
    }
  }
}