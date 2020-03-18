pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            echo 'Hello World'
         }
      }
      stage('Deploy gh pages') {

        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {  
          sh 'npm --version'
        }
    }
      }
   }
