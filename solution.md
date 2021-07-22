# Helen's Trial Project - Solution page
In order to run this project clone the repo and inside the repo run `npm start`. This starts the app at `localhost:3000`.

If you would like to run the project on a different port run `PORT=<desired_port> npm start`.

The app contains an `App.js` file where the whole page component is rendered. It includes a header, a title, some buttons, and a mission statement. The buttons are 2 different kinds. The ones that start from 0 generate a new key with the enable_reset flag set to true and the start value set to 0. That way when the page is refreshed the button starts back at 0. The button that starts with a larger number uses the provided key to display the hit count. All 3 button counts can be incremented. 

With more time I would have included some tabs in the header that displayed different components across them. I originally wanted to use the tabs to demonstrate that multiple buttons with counts starting from 0 can be used and can track their counts independently. Also as I found out more about what needs to be counted on the page I would add functionality for that. For now the buttons count the hit either starting from 0 or from wherever the provided key starts the count. But if the client needed different types of counts, perhaps page visits, or number of clicks on a link, or something like that, that's what I would add. 

Technologies I used:
- Create-React-App for the boiler plate code
- Material UI for the buttons
- CountAPI
- CSS