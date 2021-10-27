import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BuscarStyle.css';
// import images from '../assets/images';
import NavbarComponents from '../shared/components/navbar/NavbarComponents';
import Footer from '../shared/components/footer/Footer';

function BuscarPage() {

    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        try {
            const response = await fetch("http://localhost:3000/productos");
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse;   
            console.log(jsonResponse)         
            const listProducts = responseProducts.map((product) =>
                <tr>
                    <th scope="row">{product.code}</th>
                    <td>{product.name}</td>
                    <td>{product.descrption}</td>
                    <td>{product.price}</td>
                    <td>{product.state}</td>
                    <td><span className="label label-success"></span></td>
                    <td className="text-end"></td>
                    <td className="text-end"></td>
                </tr>
                
            );
            
            setProducts(listProducts)
            
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <Fragment>
            <NavbarComponents />
            <div className="background">
                <div className="container">
                    <div className="mt-3">
                        <div className="row">
                            <nav className="navbar navbar-light navbar-buscar">
                                <div className="col">
                                    <div className="container-fluid">
                                        <a className="navbar-brand"><i className="bi bi-search"></i> Buscar factura
                                        </a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-0 flex-grow-1 "><Link to="/vendedores"
                                        className="btn btn-outline-secondary position-absolute top-0 end-0"><i className="bi bi-plus-circle"></i> Nueva Factura
                                    </Link>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="mt-2">
                        <div className="row">
                            <form className="row g-3">
                                <div className="col-md-2 control-label">
                                </div>
                                <div className="col-md-6 control-label">
                                    <input className="form-control me-2" type="search"
                                        placeholder="Ingrese el nombre del cliente o el número de la factura" aria-label="Buscar" />

                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-outline-secondary" type="submit"><i className="bi bi-search"></i>Buscar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="mt-5">
                        <div className="outer_div">
                            <div className="table-responsive mt-2">
                                <table className="table">
                                    <thead>
                                        <tr className="navbar-buscar">
                                            <th scope="col">#</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Cliente</th>
                                            <th scope="col">Vendedor</th>
                                            <th scope="col">Estado</th>
                                            <th className="text-end">Total</th>
                                            <th className="text-end">Acciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {products}
                                                
                                                <div className="d-flex justify-content-md-end">
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <Link to="/modventas" className="btn btn-warning" title="Editar factura"><i
                                                            className="bi bi-pencil"></i></Link>

                                                        <a href="#" className="btn btn-danger" title="Borrar factura" onclick="eliminar('327')"><i
                                                            className="bi bi-trash"></i> </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                                <div className="d-flex justify-content-md-end">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="disabled page-item"><span><a className="page-link">‹ Anterior</a></span></li>
                                            <li className="active page-item"><a className="page-link">1</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);" onclick="load(2)">2</a></li>
                                            <li className="page-item"><span><a className="page-link" href="javascript:void(0);" onclick="load(2)">Siguiente
                                                ›</a></span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment >


    )
}

export default BuscarPage;