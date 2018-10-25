// Aqui vamos a poner los queries que van a llamar
// los datos al front

import { gql } from 'apollo-boost';

// Mutaciones para usuarios
export const SIGNIN_USER = gql`
mutation($username: String!, $password: String!){
  signInUser(username: $username, password: $password){
    token
  }
}
`;
// con$ declaras y sin $ asignas

export const GET_FOOD_LIST = gql`
query{
  getFoodList{
    _idname
    price
    shift
  }
}
`;