# TypeScript Advanced Filtering with Generics

## Project Overview

This project demonstrates advanced TypeScript type manipulation using:

- Discriminated Unions
- Generics
- Utility Types (`Extract`, `Omit`, `Partial`)
- Custom Type Guards
- Strong Return Type Inference

The goal is to create a fully type-safe `filterPersons` function that correctly filters users based on their type (`'user'` or `'admin'`) while preserving accurate return types and restricting invalid filtering criteria.

## Problem Description

The application works with two types of people: regular users and administrators. Each type has different properties, but both share some common fields such as name and age.

The challenge is to create a filtering function that can:

Filter a list of people based on their type (user or admin)
Return the correct type of result depending on the input
Allow flexible filtering using partial criteria
Prevent invalid filtering fields from being used

## Assignment Requirements

You are given a function that filters a list of persons based on their type. Your task is to fix and improve the typings of this function so that it behaves correctly under strict TypeScript rules.

The requirements are:

The function must return only users when the selected type is “user”
The function must return only admins when the selected type is “admin”
The filtering criteria must be strongly typed based on the selected person type
The criteria must allow partial matching of properties
The criteria must NOT allow filtering by the “type” field
TypeScript must correctly infer the return type based on the input parameters

## Expected Behavior

When the function is used:

Filtering by user type should return an array of user objects only
Filtering by admin type should return an array of admin objects only
The filtering criteria should adapt automatically based on the selected type
Invalid properties should be caught by TypeScript at compile time
The solution should fully preserve type safety without using loose or unsafe types

## Outcome

After completing this assignment, the filtering function should:

Correctly distinguish between users and admins at the type level
Provide accurate return types depending on the input arguments
Prevent invalid filtering properties from being used
Maintain full compile-time type safety
