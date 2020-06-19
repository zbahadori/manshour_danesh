<h1>Manshour Danesh Front Project</h1>

## First phase - Starting date - 6/11

## First phase - Deadline - 6/24

## First phase - Update Status - 6/14

<h3>Bellow is the reference numbers pointing to client's specifications:</h3>

1, 2, 4, 6, 15, 19, 23, 24, 25, 26, 27

############################################

## AUTH ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/auth/register-start',
auth : public ,
users : Students,
method : 'POST',
parameters : {
phone_number : String,
reference_phone_number : String
},
details : 'GUESTS COULD START REGISTERATION AND GET THE SMS CODE'
},

{
url : '/api/auth/register-complete',
auth : public ,
users : Students,
method : 'POST',
parameters : {
code : String
},
details : 'GUESTS COULD COMPLETE REGISTRATION AND GET THE AUTH USER'
},

{
url : '/api/auth/login-start',
auth : public ,
users : Students,
method : 'POST',
parameters : {
phone_number : String,
},
details : 'GUESTS COULD START LOGIN PROCESS AND GET THE SMS CODE'
},

{
url : '/api/auth/login-complete',
auth : public ,
users : Students,
method : 'POST',
parameters : {
code : String
},
details : 'GUESTS COULD COMPLETE LOGIN PROCESS AND GET JWT TOKEN'
}
]

<hr/>

## USER ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/user/update-information',
auth : private ,
method : 'POST'
users : Students,
parameters : {
name: Joi.string().required().min(2).max(255),
lastname: Joi.string().required().min(2).max(255),
name_english: Joi.string().required().min(2).max(255),
lastname_english: Joi.string().required().min(2).max(255),
father_name: Joi.string().required().min(2).max(255),
grade: Joi.number().required().min(5).max(12),
province: Joi.string().required().min(2).max(255),
city: Joi.string().required().min(2).max(255),
school: Joi.string().required().min(2).max(255),
national_id: Joi.string().required().length(10),
},
details : 'USER COULD UPDATE PROFILE INFORMATION THROUGH THIS API'
},

{
url : '/api/user/referenced-users',
auth : private ,
method : 'GET'
users : Students,
parameters : {
},
details : 'USER COULD GET REFERENCE USERS FOR THIS PARTICULAR USER'
},

{
url : '/api/user/update-national-id',
auth : private ,
method : 'POST'
users : Students,
parameters : {
national_id: Joi.string().required().length(10),
},
details : 'USER COULD UPDATE NATIONAL ID INFORMATION '
},

{
url : '/api/user/get-active-alerts',
auth : private ,
method : 'GET'
users : Students,
parameters : {
},
details : 'USER COULD GET ALL THE ACTIVE ALERTS TO BE SHOWN IN DASHBOARD'
},

]

<hr/>

## ADMIN ROUTE SPECIFICATIONS

Routes => [
{
url : '/api/admin/get-all-users',
auth : private ,
method : 'GET'
users : Students,
parameters : {
},
details : 'ADMIN COULD GET LIST OF ALL USERS'
},

{
url : '/api/admin/update-user-block',
auth : private ,
method : 'POST'
users : Students,
parameters : {
phone_number: Joi.string().required().length(11),
},
details : 'ADMIN COULD UPDATE USER BLOCK STATUS'
},

{
url : '/api/admin/create-alert',
auth : private ,
method : 'POST'
users : Students,
parameters : {
title: Joi.string().required().min(2).max(255),
message: Joi.string().required(),
},
details : 'ADMIN COULD CREATE ALERTS FOR USERS'
},

{
url : '/api/admin/update-single-alert',
auth : private ,
method : 'POST'
users : Students,
parameters : {
id: Joi.objectId().required(),
title: Joi.string().required().min(2).max(255),
message: Joi.string().required(),
status: Joi.boolean(),
},
details : 'ADMIN COULD UPDATE SINGLE ALERT'
},

{
url : '/api/admin/get-alert',
auth : private ,
method : 'GET'
users : Students,
parameters : {
},
details : 'ADMIN COULD GET ALERTS LIST'
},

{
url : '/api/admin/get-national-id',
auth : private ,
method : 'GET'
users : Students,
parameters : {
},
details : 'ADMIN GET LIST OF NATIONAL ID INFORMATION'
},

{
url : '/api/admin/delete-national-id',
auth : private ,
method : 'DELETE'
users : Students,
parameters : {
phone_number: Joi.string().required().length(11),
},
details : 'ADMIN DELETE NATIONAL ID RECORD'
},

]
