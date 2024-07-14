# Using Jenkins Docker Container on AWS EC2

We can use Jenkins within a Docker container on an AWS EC2 instance. Let us follow these general steps. This assumes you already have an EC2 instance running and Docker installed on it.

### Steps to Use Jenkins in a Docker Container on AWS EC2

#### 1. **SSH into your EC2 Instance**

Connect to your EC2 instance via SSH. You can use the public IP address of your instance and the key pair you used during instance creation.

```bash
ssh -i /path/to/your/key.pem ec2-user@your-ec2-public-ip
```

Replace `/path/to/your/key.pem` with the actual path to your private key file and `ec2-user` with the appropriate username for your EC2 instance.

#### 2. **Install Docker (if not already installed)**

If Docker is not already installed on your EC2 instance, you can install it using the following commands:

```bash
sudo apt  update 
sudo sudo apt install docker.io
sudo service docker start
sudo usermod -a -G docker ubuntu  # Replace 'ec2-user' with your actual user if needed
```

Log out and log back in again to ensure your user has the appropriate Docker permissions.

#### 3. **Run Jenkins Container**

Now, you'll run the Jenkins container using Docker. Make sure to specify necessary volumes and ports for Jenkins to function correctly.

```bash
docker run -d -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  --name jenkins \
  jenkins/jenkins:lts
```

- `-d`: Runs the container in detached mode (in the background).
- `-p 8080:8080 -p 50000:50000`: Maps Jenkins web interface and agent communication ports.
- `-v jenkins_home:/var/jenkins_home`: Mounts a Docker volume named `jenkins_home` to persist Jenkins data.
- `--name jenkins`: Specifies the name of the container (`jenkins` in this case).
- `jenkins/jenkins:lts`: Specifies the Docker image to use (Jenkins LTS version).

#### 4. **Access Jenkins**

Once the container is running, you can access Jenkins through your web browser:

```plaintext
http://your-ec2-public-ip:8080
```

Follow the initial setup wizard to configure Jenkins. You will need to obtain the initial administrator password from inside the Jenkins container. You can retrieve it using:

```bash
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

#### 5. **Configure Jenkins**

- Use the password obtained in the previous step to unlock Jenkins and complete the setup wizard.
- Install recommended plugins or select custom plugins based on your requirements.
- Create an admin user and configure Jenkins according to your needs.

#### 6. **Persistence and Backups**

Ensure that you have a backup plan for your Jenkins data (`jenkins_home` volume). Consider using EBS snapshots or backing up the volume to S3 periodically.

#### 7. **Security Considerations**

- **Access Control**: Ensure your Jenkins instance is secured, especially when exposing it to the internet. Consider using a reverse proxy (e.g., Nginx) with HTTPS.
- **Updates**: Regularly update Jenkins and its plugins to maintain security and stability.

By following these steps, you can effectively run Jenkins within a Docker container on an AWS EC2 instance, leveraging the flexibility and ease of Docker for managing Jenkins installations. Adjust configurations and security measures based on your specific requirements and organizational policies.