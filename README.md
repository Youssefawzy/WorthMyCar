
<h1 align="center">
<img src="https://github.com/Youssefawzy/worth-my-car/assets/116081592/1098f638-afd5-437c-aabf-760ddbb60701" alt="rBay" width="200">
<h1 align="center" >WorthMyCar</h1>
</h1>

# Description

<h2 align="center">
    An application allows users to estimate their car's value bases on reports submitted by other users who have sold similar vehicles.
</h2>

# key-features
<h3>Authentication</h3> 
Users can Sign Up , Log in and Log Out

<h3>Authorizatio</h3> 
Admins only can approve and disapprove users reports

<h3>Creating Reports</h3> 
Users can Create detailed car sale report with thier car's model, year, location (longitude and latitude), and sale price to contribute valuable data for accurate valuations.

<h3>Estimate Car Worth</h3> 
Users can estimate their car's worth by inputting detailed information such as make, model, year, mileage, condition, and any additional relevant details. This data is then compared with existing reports in our database to provide a reliable valuation 


 ## API
 Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`   | `/auth/signup`                           | Signing up with valid email and password |
| `POST`   | `/auth/signin`                           | Signing in with valid email and password |
| `POST`   | `/auth/signout`                          | signing out                              |
| `GET`    | `/auth/:id`                              | Find user with id                        |
| `GET`    | `/auth?email=example@gamil.com`          | Find user with email                     |
| `GET`    | `/auth/whoami`                           | Get the curretn user information         |
| `PATCH`  | `auth/:id`                               | Update user infromation                  |
| `DELETE` | `/auth/:id`                              | Delete user with id                      |
| `POST`   | `/reports`                               | Create a new report                      |
| `PATCH`  | `/reports/:id`                           | approve an existing report               |
| `GET`    | `/reports?`                              | Get an estimate for a car                |


## Build With 🏗️
- Nestjs
- TypeScript
- TypeOrm
- SQLite
- jest
  

