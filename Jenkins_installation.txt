How to Manually Install Jenkins on Linux

sudo apt update

1.Install Java: Jenkins requires Java to run.
sudo apt install openjdk-11-jdk

2.Download the Jenkins WAR file.
sudo wget https://updates.jenkins-ci.org/latest/jenkins.war

3.Start Jenkins.
java -jar jenkins.war


4.Access Jenkins: Open a web browser and navigate to http://localhost:8080 to access the Jenkins web interface.

5.Complete the setup: Follow the instructions on the Jenkins setup screen to complete the installation process. To obtain the initial passwod, run:
 cat /home/clouduser/ .jenkins/secrets/initialAdminPassword


5.If port 8080 is already in use on your system, you can specify a different port using the --httpPort option when starting Jenkins. For example, to start Jenkins on port 9090, you can use the following command:

java -jar jenkins.war --httpPort=9090

these steps help you to install Jenkins manually



4. The setup prompts to either Install suggested plugins or Select plugins to install. It’s fine to simply install the suggested plugins.
You can always install more plugins later. The system continues the initial Jenkins setup.


5. The next step is the Create First Admin User. Enter the credentials you want to use for your Jenkins administrator, then click Save and Continue.


6. After this, you should set up the Instance Configuration. This is the preferred network address for this Jenkins installation. Confirm the address you want to use for your server. This is most likely the same address you used to get to this configuration page.Once you specify the Jenkins URL, click Save and Finish.



7. You should see a page that says Jenkins is ready! Click Start using Jenkins to open the Jenkins dashboard.





/home/ubuntu/.jenkins/secrets/initialAdminPassword

b2ffa2bca11942b4b963e5dc5ae25c6c



Remove files from directory

rm -rfv 

Remove folder

rm -rf Simple-Directory



Jenkins disable authentication:


http://<ipaddress>:8080

Jenkins

sudo nano /var/lib/jenkins/config.xml
useSecurity - true/false

Username :admin	
Password : tfl@678

sudo apt-get install nodejs
sudo apt-get install npm

npm install && node server.js

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



Removing Node.js
sudo apt update
sudo apt install nodejs
sudo apt install npm

Removing Node.js
sudo apt remove nodejs
sudo apt purge nodejs


pipeline {
         agent any
         stages {
                stage('PreBuild') {
                 steps {
                     echo 'Clonning repository from GitHub'
                     writeFile file: 'tfl1', text: 'Web App Solution is clonned from github repo.'
                     git branch: 'main', url: 'https://github.com/RaviTambade/iacsdrepomarch23.git'
                 }
                 }
                 stage('Build') {
                 steps {
                     echo 'Building docker containers'
                     writeFile file: 'tfl1', text: 'Docker container is build with all dependencies'
                     sh 'npm install' 
                 }
                 }
                 stage('Test') {
                 steps {
                    echo('Test Enviornment is prepared and ready to test app')
                    echo('Docker container image is pulled for testing app')
                    echo('Docker container is run to test app ')
                    echo('Test Enviorment is ready to test app')
                    echo('All Tests are tested against solution')
                    writeFile file: 'tfl2', text: 'Testing successfull.'
                 }
                 }
                  stage('Deploy') {
                 steps {
                    echo('Deploying application')
                    echo('Docker container image is ready for Production Use')
                    writeFile file: 'tfl3', text: 'Deployment successfull to docker hub'
                    sh '''#!/bin/bash
                        echo "Hello World"
                        cat > tfl1 <<EOF
                        App has been deployed successfully on Product Enviornment
                        The Site is accessible on http://193.56.34.66:8081
                        Thank you very much
                        '''
                 }
                 }
         }
}


https://elisegev.medium.com/running-tests-and-creating-code-coverage-reports-for-react-nodejs-project-continuously-with-60312b6a2dd0
