# Front-End
Built to demonstrate that your app solves the problem your team set out to solve. Focus the displaying of information and working with other members of your team to ensure that users can seamlessly navigate through the tools that you’re building

mnprison
pass

API URL:
https://prison-skills.herokuapp.com

API DOC:
https://github.com/prisoner-skills-lambda-build-week/back-end

POST, PUT, DELETE requests need a Token in Authorization header except for /auth/ routes

URL: https://prison-skills.herokuapp.com/

sample request

//axios.post(url, bodyData, config)
axios.post('/endpoint', {
	data: value,
	.
	.
	.
}, {
	headers: {
		authorization: token
	}
})
/auth/
POST /auth/register
expects in body:

{
	username: string, //required
	address: string, //required
	name: string, //required
	password: string //required
}
returned data on success:

{
  prison: {
    id: integer,
    name: string,
    address: string,
    prisoners: []
  },
  token: string
}
POST /auth/login
expects in body:

{
	username: string, //required
	password: string, //required
}
returned data on success:

{
	prison: {
		id: integer,
		name: string,
		address: string,
		prisoners: [
			{
				id: integer,
				name: string,
				canHaveWorkLeave: boolean //0 - false, 1 - true
			},
			.
			.
			.
		]
	},
	token: string
}
/prisons/
GET /prisons/
returned data on success:

[
	{
		id: integer,
		username: string,
		address: string,
		name: string
	},
	.
	.
	.
]
GET /prisons/:id
returned data on success:

{
	id: integer,
	address: string,
	name: string,
	prisoners: [
		{
			id: integer,
			name: string,
			canHaveWorkLeave: boolean //0 - false, 1 - true
		},
		.
		.
		.
	]
}
PUT /prisons/:id
expects in body:

{
	username: string,
	address: string,
	name: string,
	password: string
}
returned data on success:

integer //0 no prison is updated, 1 successfully updated
DELETE /prisons/:id
string
/prisoners/
GET /prisoners/
returned data on success:

[
	{
		id: integer,
		name: string,
		prison_id: integer,
		canHaveWorkLeave: boolean //0 - false, 1 - true
	},
	.
	.
	.
]
GET /prisoners/:id
returned data on success:

{
	id: integer,
	name: string,
	prison_id: integer,
	canHaveWorkLeave: boolean //0 - false, 1 - true
	skills: [
		{
			id: integer,
			name: string
		},
		.
		.
		.
	]
}
POST /prisoners/
expected in body:

{
	name: string,
	prison_id: integer
}
returned data on success:

integer // prisoner id
PUT /prisoners/:id
expected in body:

{
	name: string,
	prison_id: integer,
	canHaveWorkLeave: boolean // true or false
}
returned data on success:

integer: //0 fail, 1 success
DELETE /prisoners/:id
string //message
/skills/
GET /skills/
returned data on success:

[
	{
		id: integer,
		name: string
	},
	.
	.
	.
]
GET /skills/:id
{
	id: integer,
	name: string
}
POST /skills/
expected in body:

{
	name: string,
	prisoner_id: integer
}
returned data on success:

string //message
DELETE /skills/
expected in body:

{
	prisoner_id: integer,
	skill_id: integer
}
returned data on success:

string // message
