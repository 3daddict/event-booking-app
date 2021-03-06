const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
        type RootQuery {

        }

        type RootMutation {

        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {

    }
}));

app.listen(port, () => console.log(`App listening on port ${port}!`));