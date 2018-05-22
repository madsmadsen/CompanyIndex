# CompanyIndex

## API
### Get companies

* `GET /api/companies.json` will return all companies

###### Example JSON response
```json
[
    {
        "id":1,
        "name":"Testing",
        "cvr":"test",
        "address":"hello",
        "city":"just a test",
        "country":"dfsd",
        "phone":"",
        "created_at":"2018-05-07T22:06:33.430Z",
        "updated_at":"2018-05-07T22:06:33.430Z"
    }, ...
]
```

### Create a company

* `POST /api/companies.json`

**Payload**: Requests must include the following:

```json
{
    "name": string,
    "cvr": string,
    "address": string,
    "city": string,
    "country": string
}
```
It is also possible to create a company with a phone number, just add the property `phone` to the request's json object.

### Get a company

* `GET /api/companies/1.json` will return the company with id 1, if found, otherwise it'll return 404.

###### Example JSON response
```json
[
    {
        "id":1,
        "name":"Testing",
        "cvr":"test",
        "address":"hello",
        "city":"just a test",
        "country":"dfsd",
        "phone":"",
        "created_at":"2018-05-07T22:06:33.430Z",
        "updated_at":"2018-05-07T22:06:33.430Z"
    }
]
```

## Local development
### Prerequisite
* https://github.com/ddollar/foreman
* Latest node.js
* A working Ruby enviroment

### Install dependencies
```bash
bundle install
npm install
```

### Run
```bash
npm start
```

### Build
```bash
npm run build
```