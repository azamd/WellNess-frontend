pipeline {
    agent any

    stages {
      
      stage("App Node-Modules") {
      
      steps {
        echo 'fetching the application node-modules ...'
        sh "npm install"
            }
               } 
       
    stage("App Build") {
      
      steps {
        echo 'building the application ...'
        sh "npm run build "
      }
    }
        stage("Docker Image") {
                steps{
                    echo 'building the application Docker container image..'
                    sh 'docker build -t amdaziz/WellnessFront .'
                }
        }
        stage("DockerHub Login") {
                steps{
                    echo 'user login to DockerHub..'
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u amdaziz -p aziz.docker'
                }
        }
        stage("Push to DockerHub") {
                steps{
                    echo 'Pushing app docker image to DockerHub..'
                    sh 'docker push amdaziz/WellnessFront'
                }
        }
    
    }
}
