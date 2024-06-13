import React, { useEffect, useState } from 'react'

function MainPage() {
    const [products, setProducts] = useState([]);
    const [productsOnSearch, setProductsOnSearch] = useState([]);
  
  
    const handleChange = (e) => {
      if (e.target.value) {
        e.preventDefault();
        setProductsOnSearch(
          products.filter((product) => product.id.toLowerCase().includes(e.target.value.toLowerCase()) || product.username.toLowerCase().includes(e.target.value.toLowerCase()))
        );
      } else {
        setProductsOnSearch(products);
      }
    };
  
    const handleView = (e) => {
      e.preventDefault();
      const formSearch = document.getElementById('formSearch');
      formSearch.setAttribute('action',`/product/${e.target.dataset.id}`);
      formSearch.submit();
    };
  
    useEffect(() => {
      fetch("http://localhost:8080/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setProductsOnSearch(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    // const handleDelete = (e) => {
    //   e.preventDefault();
    //   // console.log(e.target);
    //   if (
    //     window.confirm(`Are you sure to delete product ${e.target.dataset.id}`) ===
    //     true
    //   ) {
    //     // const formAction = document.getElementById('formAction');
    //     // formAction.setAttribute('action',`/laptops/delete/${e.target.dataset.id}`);
    //     // formAction.setAttribute('method',`GET`);
    //     // formAction.submit();
    //     fetch(`http://localhost:8080/products/delete/${e.target.dataset.id}`, {
    //       method: "DELETE",
    //     })
    //       .then((response) => response.text())
    //       .then((data) => {
    //         alert(data);
    //         setDeleted(!deleted);
    //       })
    //       .catch((err) => console.log(err));
        
    //   }
    // };
  
    return (
      <div>
        {/* Search filter */}
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
          <form id="formSearch" className="d-flex mt-3 flex-grow-1" role="search" action="" method="GET">
            <input
              id="inputSearch"
              onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
              Search
            </button> */}
          </form>
          </nav>
        </div>
        {/* Employees List filtered */}
        <div>
          <h2 className="text-center mt-3">Products List</h2>
          <div className="row">
            <a href="/product/0" className="btn btn-primary">Add Customer</a>
          </div>
          <div className="row mt-3">
            <table className="table table-dark table-striped-columns table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>TypePro</th>
                  <th>Password</th>
                  <th>PhoneNumber</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
  
              <tbody>
                {productsOnSearch.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.username}</td>
                    <td>{product.password}</td>
                    <td>{product.phonenumber}</td>
                    <td>{product.address}</td>
                    <td>
                      <button data-id={product.id} onClick={handleView} className="btn btn-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Form action */}
        <form id="formAction" method="GET" action=""></form>
      </div>
    );
}

export default MainPage