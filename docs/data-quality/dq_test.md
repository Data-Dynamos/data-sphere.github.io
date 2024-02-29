---
sidebar_position: 3
---
# Data Quality test

DBT test ensures to build reliable data pipelines with standard data quality checks. Testing in dbt uses SELECT statements in SQL queries to confirm that the data models, data sources, and other resources in a dbt project work as intended. These tests are designed to return rows or records that fail to meet the assertion criteria specified in the test. In simple words, if test sql query returns result, DBT consider it as failure scenario.

There are two main types of tests provided by dbt:

1. Singular tests
2. Generic tests

Refer [here](https://docs.getdbt.com/docs/build/tests) for more details. 
[WIP]