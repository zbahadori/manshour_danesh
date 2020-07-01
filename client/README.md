<h1>Manshour Danesh Front Project</h1>

## First phase - Starting date - 6/11

## First phase - Deadline - 6/24

## First phase - Update Status - 6/14

## Second phase - Update Status - 6/30

## Second phase - Update Status - 7/1

<h3>Bellow is the reference numbers pointing to client's specifications:</h3>

<h2>Phase One : 1, 2, 4, 6, 15, 19, 23, 24, 25, 26</h2>
<h2>Phase Two Starter: 7, 8, 9, 10, 13, 14, 16, 27, 28 + 11, 12, 17</h2>

## GENERAL RESPONSE MAP

response : {
success: Boolaen,
err : Boolean,
message : String,
data : MIX|Array|Object
}

############################################

## AUTH ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/auth/register-start',
auth : public ,
method : 'POST',
parameters : {
phone_number : String|Required,
reference_phone_number : String|Optional
},
details : 'GUESTS COULD START REGISTERATION AND GET THE SMS CODE'
},

{
url : '/api/auth/register-complete',
auth : public ,
method : 'POST',
parameters : {
code : String|Required
},
details : 'GUESTS COULD COMPLETE REGISTRATION AND GET THE AUTH USER'
},

{
url : '/api/auth/login-start',
auth : public ,
method : 'POST',
parameters : {
phone_number : String|Required,
},
details : 'GUESTS COULD START LOGIN PROCESS AND GET THE SMS CODE'
},

{
url : '/api/auth/login-complete',
auth : public ,
method : 'POST',
parameters : {
code : String|Required
},
details : 'GUESTS COULD COMPLETE LOGIN PROCESS AND GET JWT TOKEN'
},

{
url : '/api/auth/jwt-student',
auth : public ,
method : 'GET',
details : 'DEVELOPER COULD AUTHENTICATE AS A STUDENT THROUGH THIS API'
},

{
url : '/api/auth/jwt-admin',
auth : public ,
method : 'GET',
details : 'DEVELOPER COULD AUTHENTICATE AS A ADMIN THROUGH THIS API'
},

{
url : '/api/auth/is-authenticated',
auth : public ,
method : 'GET',
details : 'RETURNS IF THE USER IS AUTHENTICATED OR NOT, USED FOR FRONT END DEVELOPMENT ROUTERS'
}
]

<hr/>

## USER ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/user/get-user-information',
auth : private,
method : 'POST'
users : Students,
details : 'USER COULD GET THE CURRENT USER INFORMATION'
},

{
url : '/api/user/update-user-information',
auth : private ,
method : 'POST'
users : Students,
parameters : {
name: string|required|min(2)|max(255),
lastname: string|required|min(2)|max(255),
name_english: string|required|min(2)|max(255),
lastname_english: string|required|min(2)|max(255),
father_name: string|required|min(2)|max(255),
grade: number|required|min(5)|max(12),
province: string|required|min(2)|max(255),
city: string|required|min(2)|max(255),
school: string|required|min(2)|max(255),
image : file|optional
},
details : 'USER COULD UPDATE PROFILE INFORMATION THROUGH THIS API'
},

{
url : '/api/user/referenced-users',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET REFERENCE USERS FOR THIS PARTICULAR USER'
},

{
url : '/api/user/reference-link',
auth : private ,
method : 'POST'
users : Students,
details : 'STUDENT COULD GET THE REFERENCE LINK'
},

{
url : '/api/user/get-national-id',
auth : private,
method : 'POST'
users : Students,
details : 'USER COULD GET NATIONAL ID INFORMATION'
},

{
url : '/api/user/update-national-id',
auth : private ,
method : 'POST'
users : Students,
parameters : {
national_id: string|required|length(10),
national_id_image: file|optional
},
details : 'USER COULD UPDATE NATIONAL ID INFORMATION'
},

{
url : '/api/user/get-active-alerts',
auth : private ,
method : 'POST'
users : Students,
details : 'USER COULD GET ALL THE ACTIVE ALERTS TO BE SHOWN IN DASHBOARD'
},
]

<hr/>

## ADMIN ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/admin/get-all-users',
auth : private ,
method : 'POST'
users : Admin,
details : 'ADMIN COULD GET LIST OF ALL USERS'
},

{
url : '/api/admin/update-user-block',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
phone_number: string|required|length(11),
},
details : 'ADMIN COULD UPDATE USER BLOCK STATUS'
},

{
url : '/api/admin/update-single-user',
auth : private ,
method : 'POST'
users : admin,
parameters : {
name: string|required|min(2)|max(255),
lastname: string|required|min(2)|max(255),
name_english: string|required|min(2)|max(255),
lastname_english: string|required|min(2)|max(255),
father_name: string|required|min(2)|max(255),
grade: number|required|min(5)|max(12),
province: string|required|min(2)|max(255),
city: string|required|min(2)|max(255),
school: string|required|min(2)|max(255),
user_image : file|optional
},
details : 'ADMIN UPDATE SINGLE USER'
},

{
url : '/api/admin/get-alert',
auth : private ,
method : 'POST'
users : admin,
details : 'ADMIN COULD GET ALERTS LIST'
},

{
url : '/api/admin/create-alert',
auth : private ,
method : 'POST'
users : Admin,
parameters : {
title: string|required|min(2)|max(255),
message: string|required,
},
details : 'ADMIN COULD CREATE ALERTS FOR USERS'
},

{
url : '/api/admin/update-single-alert',
auth : private ,
method : 'POST'
users : admin,
parameters : {
id: objectId|required,
title: string|required|min(2)|max(255),
message: string|required,
},
details : 'ADMIN COULD UPDATE SINGLE ALERT'
},

{
url : '/api/admin/delete-single-alert',
auth : private ,
method : 'POST'
users : admin,
parameters : {
id: objectId|required,
},
details : 'ADMIN COULD DELETE SINGLE ALERT'
},

{
url : '/api/admin/get-national-id',
auth : private ,
method : 'POST'
users : admin,
parameters : {
},
details : 'ADMIN GET LIST OF NATIONAL ID INFORMATION'
},

{
url : '/api/admin/confirm-national-id',
auth : private ,
method : 'POST'
users : admin,
parameters : {
phone_number: string|required|length(11),

},
details : 'ADMIN CONFIRMRS A NATIONAL ID RECORD'
},

{
url : '/api/admin/delete-national-id',
auth : private ,
method : 'POST'
users : admin,
parameters : {
phone_number: string|required|length(11),
},
details : 'ADMIN DELETE NATIONAL ID RECORD'
},

]
