import gql from 'graphql-tag';

export const userQueries = gql`
query 
allUsers(
$user: UserInput!
$paginator: PaginatorInput
){
allUsers(
user: $user
paginator: $paginator
){
  name
  phone
 address {
     country
     district
     city
 }
}
}
 `
