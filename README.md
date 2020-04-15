# carousel-commute-schools

Instructions to populate Database

    1. run the schema.sql file  in seeder folder to create the fake_data database
    "mysql -u 'user' -p < schema.sql"

    2. make sure that the seeder.js file in seeder folder "line 10" is correct to connect to your database (2nd argument is username, 3rd argument is password (null if no password))

    3. make sure that the dbQueries.js file in db folder "line 3" is correct to connect to your database (2nd argument is username, 3rd argument is password (null if no password))

    3. run the seeder.js file in seeder folder to populate the database
    "node seeder.js"

## API

### Create
Create a new image for a listing:

`POST /carousel/listings/:listingId/images`

Success response status code: `201`

Error response status code: `500`

### Read
Get all images associated with a listing:

`GET /carousel/listings/:listingId/images`

Sample response body:

```
[{listingId: 5, source: "https://fake-data-abode.s3.us-east-2.amazonaws.com/fakeHouse1/IS76og7ec2iove1000000000+(1).jpg"}, ... ]
```

Success response status code: `200`

Error response status code: `404`

### Update
Update a listing:

`PATCH /carousel/listings/:listingId`

Success response status code: `204`

Error response status code: `500`

### Delete
Delete an image:

`PATCH /carousel/images/:imageId`

Success response status code: `204`

Error response status code: `404`
