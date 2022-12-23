

Online Shopping System Design

Abstraction:

	    Online Shopping portal for 
		sellers, users, customers, sales team,Borad of Directors (BOD)
	
Online Shopping Exeperience using Shopping Cart
Ordering products online
Tracking orders by existing customers
Product catalog maintainance by sellers
Monitoring Operations by Operations Team (Sales team)
Business Intelligence Dashboard for BOD
Delivery shipment by Delivery team at customer door Step

Encapusulation:

Application users will interact with online shopping using Portal (WebSite).
Portal User interface invoke Online shopping operations logic from remote web services.
Web services hosted on Web Server will encapsulate Business Logic of online shopping from web site
Bussiness Logic will encapsulate Core Shopping Cart, Billing, inventroy, discount, review logic from
Web services.
Business logic will invoke business data from database in form of result sets after query processing by 
database.
Database will perform DML, SQL , Stored Procedure Execution at Database server level and hide interal implementation.

Polmorphsim & Inheritance:

Business Objects will be defined using Class Hiearchy User, Customer, Director, Vendor, SalesRepresentative

Product, ElectronicProduct,  etc.


Modularity:
	Product Catalog :
	Customer Relations Management (CRM)
	ShoppingCart management
	OrderProcessing
	PaymentProcessing
	Shipment
	Authentication
	Authorization
	Business Intelligence

Concurrency:
       all online shopping business Operations are under execution parallely
for users with role enduser, customers, sales team, vendors,seller

Persistence:
	All business data will be stored  in Data Store for future work
	

DFD :Data Flow Diagrams
Process:   Product Catalog gallery
external entity:user
data Store:Products
	   Categories

process: Product catalog management
external entity: Seller
data Store:Products Master


products
items
shopping cart
orders
payments
customers
credentail
employees

: business Opertions

ER Diagrams: (Entity Relationship Diagrams)

OOAD UML Diagrams


database.sql
	




















		
