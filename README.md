# Bulk Vegetable/Fruit Ordering Platform

A full-stack web application that allows buyers to place bulk orders for vegetables and fruits, and allows admins to manage orders and inventory.

## Features

### For Buyers:
- **Browse Products**: View a catalog of available vegetables/fruits.
- **Place Orders**: Request bulk orders by specifying product, quantity, and delivery details.
- **Order Tracking**: Track order status (Pending → In Progress → Delivered).

### For Admins:
- **Manage Orders**: View all orders, and update their statuses.
- **Manage Inventory**: Add, edit, or remove products from the catalog.

### Bonus Features (Optional):
- **Authentication**: Admin login to access the dashboard.
- **Email Notifications**: Notify buyers when an order is placed or updated.

## Technologies Used

- **Frontend**: Next.js (React-based)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **Email**: Nodemailer for email notifications
- **Authentication**: NextAuth for admin authentication

## Getting Started

### Prerequisites:
- Node.js >= 16.x
- PostgreSQL (local or hosted on Neon.tech)

### Setup Instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bulk-ordering-platform.git
   cd bulk-ordering-platform
