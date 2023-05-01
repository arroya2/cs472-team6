# Portfolio Builder
A portfolio-building web application to help people with no experience in web development and web design to create their designs more efficiently.

We are a team from the University of Nevada, Las Vegas. This is a group project for our senior design class CS 472. 

You can try a live demo [here](https://stackblitz.com/~/github.com/cs472-team6/cs472-team6).

Once the terminal has finished loading as seen below, press 'o' and wait for the site to load.
<img width="647" alt="image" src="https://user-images.githubusercontent.com/58874823/235416907-b4f6f5f3-7786-42be-8e6c-1139192c094e.png">

## How To Use
### Main Page
![image](https://user-images.githubusercontent.com/58874823/235417684-f5df02a7-65fe-4aa4-9d80-8649db1507c4.png)

The main page of the application will consist of two main panels, a side panel that will contain most of the user functionality, and a preview panel which is where components will be rendered presenting a preview of what the final website will look like. 

The side panel consists of three tabs:
- The first tab of the side panel presents the list of components that are currently rendered in the preview panel and the options which correspond with each component. 
- The second tab is a list of all the components that are available to the user.
- The third tab presents options for the HTML page that will be generated for the website.

### Navigation Bar
![image](https://user-images.githubusercontent.com/58874823/235418183-175632f5-715a-451a-a209-8e825d8e201e.png)

The navigation bar will consist of three buttons: 
- The button in the top left corner is the info button. This button will show the user a modal with instructions and information about how to use the website.
- On the top right corner is the import and export buttons
  - The import button is the one on the left and it will allow the user to import previous portfolio data so that they can resume working on their website. 
  - The export button is the one on the right side and it will show the user a modal that will give two different export options
  
### Export Modal
![image](https://user-images.githubusercontent.com/58874823/235418555-a7afc5d4-f0b8-465f-898d-d295c62da65f.png)

The Export Modal will be presented to the user when the user clicks the export button. The modal will allow the user to download the site data (which is in JSON format and may be reimported at a later time) or export the website (this will export static HTML, CSS, and JavaScript files).
