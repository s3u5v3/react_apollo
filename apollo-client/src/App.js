
import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import {
  ApolloProvider as ApolloHooksProvider,
  useMutation,
  useQuery
} from "@apollo/react-hooks";

// react-apollo-hooks
import { appClient } from "./graphql/client";
// import { GET_BOOKS, CREATE_BOOK } from "./graphql/tags/MyUser";
import { GET_BOOKS, CREATE_BOOK, DELETE_BOOK } from "./graphql/tags/MyBook";

const UserList = () => {
  const [trgBook, setTrgBook] = useState("");
  const { data, error, loading } = useQuery(GET_BOOKS);
  const [deleteMutate] = useMutation(DELETE_BOOK, {
    refetchQueries: [
      {
        query: GET_BOOKS
      }
    ],
    variables: { name: trgBook }
  });
  const deleteBook = (v) => {
    setTrgBook(v)
    deleteMutate();
    console.log(trgBook);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <ul>
      {data.books.map(book => (
        <li key={book.id}>{book.name}
          <button key={book.id} onClick={() => deleteBook(book.name)}>Del</button>
        </li>
      ))}
    </ul>
  );
};

const UserInput = () => {
  const [state, setState] = useState("");

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [
      {
        query: GET_BOOKS
      }
    ],
    variables: { name: state }
  });

  const onChange = e => {
    setState(e.currentTarget.value);
  };


  return (
    <div>
      <input type="text" value={state} onChange={onChange} />
      <button onClick={createBook}>Add</button>
    </div>
  );
};

export const App = () => (
  <ApolloProvider client={appClient}>
    <ApolloHooksProvider client={appClient}>
      <UserInput />
      <UserList />
    </ApolloHooksProvider>
  </ApolloProvider>
);
