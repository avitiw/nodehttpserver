First install NodeJS
then open command prompt and got to "myapp" directiory
Run: 
	npm install
	npm install express-generator -g
Afer successfull install and starting Kafka as mentioned in Kafka section, to start web server: 
	set DEBUG=myapp & node  .\bin\www

-----------------
For Kafka 

Unzip kafka. 
Modify config properties
 1. zookeeper.properties change dataDir
 2. server.properties change log.dirs

 In one console windows run zookeper script from the kafka root window
 	bin\windows\zookeeper-server-start.bat config\zookeeper.properties
 In another console window run kafka server script
 	bin\windows\kafka-server-start.bat config\server.properties
 TO create topic "travelRequest"
 	bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic travelRequest
 To check if topic is created
    bin\windows\kafka-topics.bat --list --zookeeper localhost:2181 