
## Microservice tech stack, both for the development phase and for production.

▶️ 𝐏𝐫𝐞-𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧
🔹 Define API - This establishes a contract between frontend and backend. We can use Postman or OpenAPI for this.

🔹 Development - Node.js or react is popular for frontend development, and java/python/go for backend development. Also, we need to change the configurations in the API gateway according to API definitions.

🔹 Continuous Integration - JUnit and Jenkins for automated testing. The code is packaged into a Docker image and deployed as microservices.

▶️ 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧
🔹 NGinx is a common choice for load balancers. Cloudflare provides CDN (Content Delivery Network). 

🔹 API Gateway - We can use spring boot for the gateway, and use Eureka/Zookeeper for service discovery.

🔹 The microservices are deployed on clouds. We have options among AWS, Microsoft Azure, or Google GCP.

🔹 Cache and Full-text Search - Redis is a common choice for caching key-value pairs. ElasticSearch is used for full-text search.

🔹 Communications - For services to talk to each other, we can use messaging infra Kafka or RPC.

🔹 Persistence - We can use MySQL or PostgreSQL for a relational database, and Amazon S3 for object store. We can also use Cassandra for the wide-column store if necessary.

🔹 Management & Monitoring - To manage so many microservices, the common Ops tools include Prometheus, Elastic Stack, and Kubernetes.