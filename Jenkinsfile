pipeline {
  agent any
  stages {
    stage('par1') {
      parallel {
        stage('read1') {
          steps {
            echo 'Hello world'
            sleep 10
            sh 'ls'
            echo 'ok'
            timeout(activity: true, time: 100)
          }
        }
        stage('read2') {
          steps {
            sleep 1
          }
        }
        stage('read3') {
          steps {
            sh 'ls'
          }
        }
      }
    }
    stage('transform') {
      steps {
        sleep 9
      }
    }
    stage('writer') {
      steps {
        sleep 1
      }
    }
  }
}