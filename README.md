# Learn on Your Own

**Student Name:** Gary McHugh <br />
**Student ID:** G00308668 <br />
**Student Name:** Sean Mc Grath <br />
**Student ID:** G00316649 <br />
**Module:** Applided Project and Minor Dissertation<br />
**Advised By:** Gerard Harrison <br />

___

# Introduction	

### Technologies Used:

+ **Operating System:** Windows 10
+ **IDE:** Eclipse, InteliJ and Visual Studio Code
+ **Language's used:** Java, AngularJS, HTML, CSS, JavaScript
+ **Database used:** MongoDB
+ **Hosting Site:** GitHub
+ **Documentation:** Project.pdf and ReadMe.md
+ **Additional:** GitHub Issues, ZenHub Boards (Kanban board)


### Deployment Details
Follow the steps below to deploy this project:

1. Download [Eclipse EE](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/neonr) or [IntelliJ] (https://www.jetbrains.com/idea/download/#section=windows) for your desired operation system and run the installer.
2. Download the community edition of [MongoDB](https://www.mongodb.com/download-center#community) for your desired operation system and run the installer.
3. (Optional) Download [Mongo Chef](https://studio3t.com/download/) for your desired operation system and run the installer. This is to execute the mongo script in.
4. Open a command prompt and enter 'mongod'.
5. Download a zip file of this project and unzip it or download [Git] (https://git-scm.com/downloads) and execute the following command in the Git Bash Console
	```
	https://github.com/seaniemc/LearnOnYourOwn.git
	```
6. Open Mongo Chef and execute the mongo commands as instructed below under the "Creating the database" heading.
7. If you do not have MongoChef then open a new command prompt and type 'mongo' into it. Execute the commands as instructed under the "Creating the database" heading.
8. Open this project within Eclipse EE or IntelliJ by importing the project into the IDE as a maven project.
9. Run TodoApplication.Java.
10. Navigate to http://localhost:8080/ in your prefered browser.


### Creating the database
You must have completed step 4 of deployment details to run the database.
Open up MongoChef or the command prompt as instructed in steps 6 and 7 of deployment details.
In MongoChef, click the connect button in the top left corner, connect to localhost:27017
Open the Intelishell

The commands you need are located in MongoDBScript.txt in this repository.

Execute the following commands first
	```
	use LearnOnYourOwn

	db.createCollection("courses")
	db.createCollection("lecturer")
	db.createCollection("users")
	db.createCollection("todos")
	```
	
Once you have executed thos you can execute each of the command blocks between the headings.

Sample for users:
	```
	db.users.insert([
	{
	"name":"Tim Miles",
	"username":"TMiles",
	"password":"TimM471",
	"role":"2"
	},
	{
	"name":"Logan Porter",
	"username":"Porter77",
	"password":"Fireman97",
	"role":"2"
	},
	{
	"name":"Daisy Patterson",
	"username":"Patty",
	"password":"DPattHype",
	"role":"2"
	},
	...
	```
	
	repeat this for each collection.