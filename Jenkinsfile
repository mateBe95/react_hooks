pipeline {
  agent any

  tools {nodejs "recent node"}

  stages {
    stage ('Install dependencies') {
        steps {
            sh 'npm install'
        }
    }

    stage ('Build') {
        steps {
            sh 'npm run build'
        }
    }

    stage ('Deploy') {
        steps {
            sh 'npm run deploy'
        }
    }
  }
}