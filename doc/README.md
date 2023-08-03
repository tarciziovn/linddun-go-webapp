# System Architecture
The web application is divided in frontend/backend. On frontend layer was developped using the concept of SPA (Single Page Application) allowing the frontend layer being hosted on a web application service (Apache/NGINX) or throught a CDN (Content Delivery Network). The frontend layer was built on HTML5, CSS, JavaScript and Bootstrap5 for responsiveness and jQuery for the webpage behavior. On backend layer is being developped using RESTfull API principles. 

The final version of the backend is still being developed using NodeJS for web application layer and MongoDB for database layer.

To allow frontend development to be carried out without depending on the completion of the backend layer, the development team is using [json-server](https://github.com/typicode/json-server) and [json-server-auth](https://www.npmjs.com/package/json-server-auth?activeTab=readme) to mimic the backend layer, with the same RESTfull API calls on the final backend layer.

The root directory of the project contains the following folders:
- frontend - HTML/CSS/JavaScript files that can be loaded directly in the user's browser and when deploying the system they can be hold on Apache/NGINX service or on CDN Service. 

- backend-mock - files to allow the frontend development team to develop the behavior of the interface for authentication, retrieval and storage of information over the mock API using JSON Server.

- backend - files of the final version of the system backend developed on Express+NodeJS+MongoDB.

# Tools and libraries


# How to Run Local
There are two ways to run LINDDUN-GO Webapp:
- Through docker-composer
- Installing npm dependencies for backend-mock based on json-server


