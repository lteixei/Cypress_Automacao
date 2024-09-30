pipeline {
    agent any

    stages {      
        stages {      
            stage('Checkout  SCM') {
            git https://github.com/lteixei/Selenium_Java
            }
           
            stage('Build') {
            dir("comtest") {
                    sh "instalação limpa do mvn"
                }
            }
        }
            stage('Store') {
            steps {
                echo 'Armazenando....'
            }
        }
            stage('DeploY') {
            steps {
                sh "mvn test -Dtest=CY0000_Login_Test"
            }
        }
    }
}
