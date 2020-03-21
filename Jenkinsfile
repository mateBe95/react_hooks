pipeline {
  agent any

  tools {
    nodejs "node"
  }

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