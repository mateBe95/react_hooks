pipeline {
  agent {
    label 'master'
  }

  stages {
        stage ('INSTALL DEPENDENCY') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm install'
        }
      }
    }
            stage ('BULD') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm run build'
        }
      }
    }
    stage ('BUILD AND DEPLOY GH PAGES') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm run deploy'
        }
      }
    }
  }
}