<h1 align="center">
<img src="./Web/public/logo512.png" width="100"/><br>
Renaissance
</h1>
<p align="center"><b>🏘️ Renaissance is an open-source project of an app to manage condominiums and help residents to quickly perform their tasks</b>
<ul align="center">
    <img src="https://img.shields.io/static/v1?label=Status&message=45%&labelColor=%2306121f&style=flat-square&color=%23ebcc05">
    <img src="https://img.shields.io/static/v1?label=License&message=GPL-3.0&labelColor=%2306121f&style=flat-square&color=%23e60000">
</ul>
</p>
<br>
<img src="mockup.png">

## 🚀 OBJETIVES
Makes the app something with good usability and agility in performing tasks.

## 🎲 PROJECT DESCRIPTION
Project architected and developed by:
<ul>
    <li>Ana Carolina Clark Roriz (Designer/Reviewer)</li>
    <li>Pedro Henrique Pontes Aguiar (Designer/Information Architect/Customer Service)</li>
    <li>Reinaldo da Silva Nascimento (Front-end Developer/Leader)</li>
    <li>Antônio Guilherme do Nascimento Pereira (Back-end Developer/Test Coordinator)</li>
</ul> 

## 💻 TECHNOLOGIES

### Prototype
<ul>
    <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" height="30">
    <p>Link of prototype: <a href="https://www.figma.com/file/XF688rMuK9v1CTFRcZshhv/Renaissance-(Mobile)?node-id=0%3A1">Figma</a></p>
</ul>

### Front-end (WEB)
<ul>
    <img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" height="30">
    <img src="https://appmasters.io/static/47ce6e77f039020ee2e76a10c1e988e9/acf26/react.webp" height="30">
    <img src="https://tusharkandpal.github.io/img/bootstrap.png" height="30">
    <img src="https://andrewsmithdeveloper.com/img/sass-new.4c1dd90f.png" height="30">
</ul>

### Front-end (MOBILE)
<ul>
    <img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" height="30">
    <img src="https://appmasters.io/static/47ce6e77f039020ee2e76a10c1e988e9/acf26/react.webp" height="30">
    <img src="https://docs.nativebase.io/img/nativebaselogo.svg" height="30">
</ul>

### Back-end
<ul>
    <img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" height="30">
    <img src="https://cdn.worldvectorlogo.com/logos/knex-1.svg" height="30">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="30">
</ul>

### IDE
<ul>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" height="30">
</ul>

### API TEST
<ul>
    <img src="https://user-images.githubusercontent.com/2575745/67964810-4d9a2980-fbd7-11e9-8cf7-661ded187ee6.png" height="30">
    <img src="https://miro.medium.com/max/1024/0*8mnWon1DYLVV5l_y.png" height="30">
</ul>

### Deploy
<ul>
    <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" height="30">
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGmNZMDOpmMQg/company-logo_200_200/0/1519905610801?e=2159024400&v=beta&t=D5lu9rTbQ_aW1ubme8GIq_QhKIm8WTiXTtoBlEHPcA8" height="30">
</ul>

## 🚧 FEATURE MAPPING

| Requisites | Description | Feature | File | Status
| --- | --- | --- | --- | --- |
| RF0001 | User authentication. Using JWT authentication, the user informs his/her registration email and password, then the system returns data containing the user's information and a token that will be used in the header of each request, in addition to distinguishing between administrator and unit owner. This token has an expiration time of 1 hour, after which it is necessary to make a new request| handleLogin() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Login/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0002 | Register users. Only administrators will be able to register users, providing name, apartment, CPF, phone number, date of birth, email and password | handleCreateUser() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/RegisterResident/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0003 | List users. Administrators will be able to see which users are registered | listingUsers() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/RegisterResident/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0004 | List user reservations. The administrators will be able to observe all reservations and the details of each reservation such as: who made it and the apartment of who made it | listingReserves() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0005 | Uploading documents. Administrators will be able to upload documents that will be distributed to all unit owners such as: Condominium rules, announcements and meeting minutes | addDocuments() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Admin/Documents/index.tsx">index.tsx</a> | <li align="center">- [x] </li> | 
| RF0006 | I forgot my password. If the user has forgotten their password, they will be asked to enter the registration email, when confirming, an email containing a link to reset the password will be sent to their email and, when clicking on the link, the user will be redirected to a page of Password Reset | handleRedefinePassword() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/ResetPassword/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0007 | My data. Owners will be able to consult the data provided at the time of registration with the administrator. Of these, some can be edited directly by the user, such as: email, password and telephone number. The rest, such as: name, apartment, cpf and date of birth, can only be changed by the administrator | useAuth() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0008 | Change e-mail. Owners will be able to change the registration email, first informing the access password, then redirecting to an email reset screen. | resetEmail() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/Email/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0009 | Change phone number. Owners can change the phone number, a modal opens so that the person can change the phone number. | resetPhone() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/MyData/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0010 | Make reservations. Owners can make reservations in the spaces available in the condominium, each space has its rules such as start and end times, reservation limits by time | handleCreateReserve() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0011 | List reservations. Owners will be able to observe which reservations they have made and details such as space, date and time. | listingUserReserves() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/master/src/pages/Client/Reserves/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
| RF0012 | Delete reservations. Owners will be able to delete the reservations they have made. | handleDeleteReserve() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/8ad0d7b0d7/src/contexts/deleteReserveContext.tsx">deleteReserveContext.tsx</a> | <li align="center">- [x] </li> |
| RF0013 | Document download. Owners will be able to download official documents such as condominium rules, notices and meeting minutes| getDocuments() | <a href="https://github.com/ProximaMicrosoft/Renaissance-Front-end/blob/8ad0d7b0d7/src/pages/Client/Documents/index.tsx">index.tsx</a> | <li align="center">- [x] </li> |
