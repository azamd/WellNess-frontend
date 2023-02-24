pipeline {
    agent any

    stages {
       
    stage("App Build") {
      
      steps {
        echo 'building the application ...'
        sh "npm run build "
      }
    }
        stage("Docker Image") {
                steps{
                    echo 'building the application Docker container image..'
                    sh 'docker build -t amdaziz/wellness-front .'
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
                    sh 'docker push amdaziz/wellness-front'
                }
        }
    
         stage("Deploy") {
                steps{
                    sh 'cd k8s'
                    echo 'Starting Minikube...'
                    sh 'minikube start'
                    echo 'Minikube started'
                    echo 'Accessing Namespace...'
                    sh 'minikube kubectl -- config set-context --current --namespace=wellness-front'
                    echo 'Applying deployment.yaml'
                    sh 'minikube kubectl -- apply --filename deployment.yaml'
                    echo 'Applying load-balancer.yaml'
                    sh 'minikube kubectl -- apply --filename load-balancer.yaml'
                    echo'Display of CLUSTER_IP and PORTS'
                    sh 'minikube kubectl -- get svc'
                    echo 'Retrieving Deployed App IP Address:'
                    sh 'minikube ip'
                    echo 'You may access your application through browser with the following URL format: http://your_minikube_ip:nodePort'


                }
        }
       
    }
}
