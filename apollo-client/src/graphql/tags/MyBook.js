import gql from 'graphql-tag';

export const GET_BOOKS = gql`
{
  books{
    id
    name
  }
}
`;

export const CREATE_BOOK = gql`
  mutation createBook($name: String!) {
    createBook(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($name: String!) {
    deleteBook(name: $name) {
      id
      name
    }
  }
`;
