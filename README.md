### Setup

1. To create and seed the database:

`npx prisma migrate dev --name init`

When npx prisma migrate dev is executed against a newly created database, seeding is also triggered. The seed file in prisma/seed.ts will be executed and your database will be populated with the sample data.
