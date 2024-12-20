import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

// Main menu items
const mainMenu = [
  { name: 'Dashboard', path: '/' },
  { name: 'User', path: '/user' },
  { name: 'Product', path: '/product' }, // General Product overview page
  { name: 'Blog', path: '/blog' },
];

// Submenu items for "Category"
const categorySubmenu = [
  { name: 'Category-List', path: '/admin/category' },
  { name: 'Add Category', path: '/admin/add-category' },
];

// Submenu items for "Product Management"
const productSubmenu = [
  { name: 'Product-List', path: '/admin/product-list' },
  { name: 'Add Product', path: '/admin/add-product' },
];

function Sidebar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleProduct = () => {
    setIsProductOpen(!isProductOpen);
  };

  return (
    <ListGroup as="ul" className="sidebar bg-primary vh-100 p-3">
      {mainMenu.map((item, index) => (
        <ListGroup.Item key={index} as="li" className="border-0 bg-primary mt-2">
          <Link to={item.path} className="text-decoration-none text-white">
            {item.name}
          </Link>
        </ListGroup.Item>
      ))}

      {/* Category Menu with Submenu Toggle */}
      <ListGroup.Item as="li" className="border-0 bg-primary mt-2">
        <div
          onClick={toggleCategory}
          className="text-decoration-none text-white"
          style={{ cursor: 'pointer' }}
        >
          Category
        </div>

        {isCategoryOpen && (
          <ListGroup as="ul" className="pl-3">
            {categorySubmenu.map((submenuItem, index) => (
              <ListGroup.Item
                key={index}
                as="li"
                className="border-0 bg-primary mt-1"
              >
                <Link to={submenuItem.path} className="text-decoration-none text-white">
                  {submenuItem.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </ListGroup.Item>

      {/* Product Management Menu with Submenu Toggle */}
      <ListGroup.Item as="li" className="border-0 bg-primary mt-2">
        <div
          onClick={toggleProduct}
          className="text-decoration-none text-white"
          style={{ cursor: 'pointer' }}
        >
          Product Management
        </div>

        {isProductOpen && (
          <ListGroup as="ul" className="pl-3">
            {productSubmenu.map((submenuItem, index) => (
              <ListGroup.Item
                key={index}
                as="li"
                className="border-0 bg-primary mt-1"
              >
                <Link to={submenuItem.path} className="text-decoration-none text-white">
                  {submenuItem.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Sidebar;
