# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using `db.json` as a database is not suitable for real-world projects because it is a **file-based storage system** and lacks many essential database features.

**Limitations of file-based storage:**
- Every read or write operation requires reading the entire file into memory, which becomes slow as data grows.
- Concurrent access is not handled properly. Multiple users accessing or modifying the file at the same time can cause data corruption.
- There is no built-in locking mechanism, indexing, or query optimization.

**Performance, scalability, and reliability issues:**
- Performance degrades significantly with large datasets.
- It does not scale well for applications with many users or high traffic.
- If the server crashes during a write operation, data can be lost or corrupted.
- There is no backup, recovery, or transaction support.

Because of these reasons, `db.json` is only suitable for learning, demos, or small prototypes—not production applications.

## 2. What are the ideal characteristics of a database system (apart from just storage)?

An ideal database system provides much more than simple data storage. Key characteristics include:

- **Performance:**  
  The database should efficiently handle large amounts of data with fast read and write operations.

- **Concurrency:**  
  It should allow multiple users to access and modify data simultaneously without conflicts or data inconsistency.

- **Reliability:**  
  The database must ensure data is safe even during system crashes, power failures, or unexpected shutdowns.

- **Data Integrity:**  
  It should enforce rules like unique constraints, foreign keys, and validations to maintain accurate and consistent data.

- **Scalability:**  
  The database should support growth in data size and user load, either vertically (more resources) or horizontally (distributed systems).

- **Fault Tolerance:**  
  The system should recover automatically from failures using replication, backups, and recovery mechanisms.

These characteristics make modern databases reliable and suitable for real-world applications.


## 3. How many types of databases are there? What are their use cases or applications?

Databases are mainly classified into **two major types**:

### 1. Relational Databases (SQL)

Relational databases store data in structured tables with rows and columns and use SQL for querying.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**
- Banking and financial systems
- E-commerce applications
- Inventory management systems
- Applications requiring strong data consistency and relationships

Relational databases are best when data is highly structured and relationships between data are important.


### 2. Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats such as documents, key-value pairs, or graphs.

**Examples:** MongoDB, Redis, Cassandra, Firebase

**Use cases:**
- Social media platforms
- Real-time chat applications
- Big data and analytics
- Applications with rapidly changing or unstructured data

NoSQL databases are ideal for high scalability, flexibility, and handling large volumes of data.
