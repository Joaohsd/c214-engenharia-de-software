## **Movies management**

This CLI application is a movie management that allow the user to register, rate and mark a movie as watched.

This project is divide in 2 parts:

*   Entity: This folder is responsible for store entities like Movie entity. This class just represents an entity.
*   Cli: This folder contains the MenuCLI class that is responsible for the treatment of user inputs. That's where everything in the application happens. There is the main method called **run**, where the main menu is managed, presenting the header that contains the options and the processment for these options.

## **Pre-requirements**
---
*   Node (used v18.17.1)

## **Run**
---
In order to **run** the project, use the command below:

```shell
node app.js
```

If you do not have **node** installed, install it! You can use (**for Linux environment**):

```shell
sudo apt update
sudo apt install nodejs
```

**In this project, it was used a newer version of node. Maybe, it can not work with the version present in apt repository**