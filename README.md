# Wiki RESTful-API

![Wiki-RESTful-API](https://socialify.git.ci/Pranav016/Wiki-RESTful-API/image?font=Inter&language=1&owner=1&pattern=Formal%20Invitation&stargazers=1&theme=Dark)

## About -
Wikipedia is a free, open content online encyclopedia for informative articles on various topics created through the collaborative effort of the community. This project aims to make a RESTful API for these wikipedia articles to be sent from the database to the browser on request.

## What is an API-
API stands for Application Programming Interface. An API allows applications to access data and interact with external software components, operating systems, or microservices. To simplify, an API delivers a user response to a system and sends the system's response back to a user.

## About RESTful APIs-
- REST stands for REpresentational State Transfer.
<br/>

- It is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services.
<br/>

- REST suggests to create an object of the data requested by the client and send the values of the object in response to the user.
<br/>

- The architectural style of REST helps in leveraging the lesser use of bandwidth to make an application more suitable for the internet.
<br/>

- Both JSON and XML formats have a proper hierarchical structure of data hence are often used to make APIs.

## Guiding Principles of REST
<ol>
<h3><li>Client–server –</li></h3>
By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

<h3><li>Stateless –</li></h3>
Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.

<h3><li>Cacheable –</li></h3>
Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

<h3><li>Uniform interface –</li></h3>
By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain this uniform interface, architectural constraints are required that is given by REST. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia(ability to open new Web pages by clicking text links on a Web browser) as the engine of application state.

<h3><li>Layered system –</li></h3>
The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior.

<h3><li>Code on demand (optional) –</li></h3>
REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.

## Following requests are required to be constructed to make a REST API-

- GET to fetch data
- PUT to replace an existing resource/ data
- PATCH to partially update an existing resource/ data
- POST to create data
- DELETE methods to eliminate it

## Environment Setup-

* Drop a :star: on the GitHub repository.
<br/>

* Download and install a code/ text editor.
    -  - Recommended-
        - [Download VS Code](https://code.visualstudio.com/download)
        - [Download Atom](https://atom.io/)
<br/>

* Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you download Node, npm also gets installed by default)
<br/>

* Open your git bash or terminal and run command to install all dependencies.
```
npm install
```
<br/>

* Mongo DB community editition was used for this project which can be downloaded from here. [Download Mongo DB](https://docs.mongodb.com/manual/administration/install-community/)
<br/>

* Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to use it. [Download Robo 3T](https://robomongo.org/download) (optional)
<br/>

* Open your bash/ terminal and run command
```
mongod
```
to start the DB. Use Robo 3T to create a DB with name `wikiDB` and store the wikipedia articles.
<br/>

* Now you are all set to work with the REST API.
<br/>

#### Some useful Mongo DB commands if you are using the terminal instead of the GUI-
```
show dbs
use db <db name>
show collections
<db name> .find()
```
