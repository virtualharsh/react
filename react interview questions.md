# Why react is a library
> react is library because if we create react app by ***npm create-react-app*** which is time consuming as well it installs ***react scripts*** and it penetrates links of main.jsx file to index.html while some other libraries like vite embeds link of main.jsx directly to index.html, so no many restrictions are there compared to framework and probably that's why react is a library.

# Why to use hooks if we can update things with javascript 
> when we use javascript we have to manually collect all the reference where a variable is used that is changed, react makes it easily by using useState that manages all the element that uses the change variable and changes it based on the changed value of variable

# Reconciliation 
> Comparison of DOM tree and react Virtual Tree and updating the changes in the actual tree is called Reconciliation also called Diffing

> ### diffing of lists is performed using keys, keys should be unique, stable and predictable

# why do we use Link instead of a tag in react
> Because a tag refreshes the whole page when acted on it