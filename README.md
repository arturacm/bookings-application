# Bookings application
An application that creates and manages Bookings/Reservations for rental locations.

## Included functionality

### Listing all available locations
![image](./public/images/Screenshot%202023-10-27%20at%2000.53.02.png)

### Creating a new reservation/booking
![image](./public/images/Screenshot%202023-10-27%20at%2000.54.01.png)

### Validation for reservation/booking
![image](./public/images/Screenshot%202023-10-27%20at%2000.54.31.png)
 Including:
 * Check-in date after the current date
 * Empty fields rejection
 * Date overlap with other reservations

 ![image](./public/images/Screenshot%202023-10-27%20at%2000.54.56.png)

 ### Reservations/booking operations
The user is allowed to create and manage bookings/reservations. The following operations are present:
* Create a booking
* Read a booking
* Update a booking
* Delete a booking

 ![image](./public/images/Screenshot%202023-10-27%20at%2000.54.56.png)
 ![image](./public/images/Screenshot%202023-10-27%20at%2000.56.10.png)


## Responsive Design
The webpage is fully responsive for desktop and mobile.

 ![image](./public/images/Screenshot%202023-10-27%20at%2000.56.40.png)
 ![image](./public/images/Screenshot%202023-10-27%20at%2000.57.16.png)

 ## Techs
 * React
 * TypeScript
 * Vite
 * Material UI
 * Redux Toolkit
 * ES-Lint + Prettier

## Running the project

### Use node
This project was created with node version v18.16.0. It is recommended to use `nvm` for guaranteeing compatbility. A [.nvmrc](./.nvmrc) file is in the project so with `nvm` installed you can run:
```
nvm use
```
### Install dependencies
This project was created with `yarn`. It is recommended to use it or any package manager of your choice. Run:
```
yarn
```
### Start the project
To run `vite` in dev mode, run:
```
yarn dev
```
By default, it will run on port `http://localhost:5173/` but make sure to check in the terminal.

 ## Credits
 Made by [Artur Moreira](https://github.com/arturacm)
