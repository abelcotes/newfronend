import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './ModVentasStyle.css';
import NavbarComponents from '../shared/components/navbar/NavbarComponents';
import Footer from '../shared/components/footer/Footer';


function ModVentas() {

    return (
        <Fragment>
            <NavbarComponents />

            <div className="background">
                <div className="container">
                    <div className="mt-3">
                        <div className="row">
                            <nav className="navbar navbar-light navbar-ventas">
                                <div className="container-fluid">
                                    <a className="navbar-brand"> <i className="bi bi-pen"></i> Modificar Factura </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="mt-2">
                        <form className="row g-3">
                            <div className="col-md-3">
                                <label for="inputCedula" className="form-label">No. Documento</label>
                                <input type="text" className="form-control" id="inputCedula" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputCliente" className="form-label">Cliente</label>
                                <input type="text" className="form-control" id="inputCliente" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputDierccion" className="form-label">Dirección</label>
                                <input type="text" className="form-control" id="inputDierccion" placeholder="1234 Main St" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputTelefono" className="form-label">No. Contacto</label>
                                <input type="text" className="form-control" id="inputTelefono" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputCity" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputVendedor" className="form-label">Vendedor</label>
                                <select id="inputVendedor" className="form-select">
                                    <option selected>Seleccione...</option>
                                    <option>Jair Daniel Calle Sinitavé</option>
                                    <option>Abelardo Cotes</option>
                                    <option>Edward Fabian Parra Martínez</option>
                                    <option>Camilo Andrés Vargas Sogamoso</option>
                                    <option>Milton Julián Pulido</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="date" className="form-label">Fecha</label>
                                <input size="16" type="text" className="form-control" id="datetime" readonly />
                            </div>
                            <div className="col-md-2">
                                <label for="inputVendedor" className="form-label">Modalidad Pago</label>
                                <select id="inputVendedor" className="form-select">
                                    <option selected>Seleccione...</option>
                                    <option>Efectivo</option>
                                    <option>Cheque</option>
                                    <option>Crédito</option>
                                    <option>Transferencia bancaria</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="inputVendedor" className="form-label">Estado</label>
                                <select id="inputVendedor" className="form-select">
                                    <option selected>Seleccione...</option>
                                    <option>Proceso</option>
                                    <option>Cancelada</option>
                                    <option>Entregada</option>
                                </select>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="container">
                    <div className="mt-3">

                        <div className="row g-3">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className="bi bi-plus"></i> Nuevo
                                    producto</button>
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModa2" data-bs-whatever="@fat"><i className="bi bi-person"></i> Agregar
                                    cliente</button>
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModa3" data-bs-whatever="@getbootstrap"><i className="bi bi-shop-window"></i>
                                    Agregar producto</button>
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModa4" data-bs-whatever="@mdo"><i className="bi bi-printer"></i> Imprimir
                                    factura</button>
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#exampleModa5" data-bs-whatever="@mdo"><i className="bi bi-arrow-repeat"></i> Actualizar
                                    datos</button>
                                <div id="liveAlertPlaceholder"></div>

                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Agregar nuevo producto</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Código</label>
                                                        <input type="text" className="form-control" id="recipient-name" placeholder="Código del producto" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Nombre:</label>
                                                        <input type="text" className="form-control" id="recipient-name" placeholder="Nombre del producto" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="message-text" className="col-form-label">Descripción:</label>
                                                        <textarea className="form-control" id="message-text"
                                                            placeholder="Descripción detallada del producto"></textarea>
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Precio:</label>
                                                        <input type="text" className="form-control" id="recipient-name" placeholder="Valor unitario" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputVendedor" className="form-label">Estado</label>
                                                        <select id="inputVendedor" className="form-select">
                                                            <option selected>-- Seleccione estado --</option>
                                                            <option>Disponible</option>
                                                            <option>No disponible</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" className="btn btn-primary">Guardar</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabe2"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabe2">Agregar cliente</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Nombre:</label>
                                                        <input type="text" className="form-control" id="recipient-name"
                                                            placeholder="Nombre nuevo cliente" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Teléfono:</label>
                                                        <input type="text" className="form-control" id="recipient-name" placeholder="Celular o fijo" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Email:</label>
                                                        <input type="text" className="form-control" id="recipient-name"
                                                            placeholder="Correo electrónico personal o empresarial" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label for="recipient-name" className="col-form-label">Dirección:</label>
                                                        <input type="text" className="form-control" id="recipient-name"
                                                            placeholder="Cra 13 No. 15A-21 Sur Mz 5 Casa 12" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputVendedor" className="form-label">Estado</label>
                                                        <select id="inputVendedor" className="form-select">
                                                            <option selected>-- Seleccione estado --</option>
                                                            <option>Activo</option>
                                                            <option>Inactivo</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <button type="button" className="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal fade" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabe3"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabe3">Buscar producto</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <nav className="navbar navbar-light bg-light">
                                                <div className="container-fluid">
                                                    <form className="d-flex">
                                                        <input className="form-control me-2" type="search" placeholder="Nombre del producto"
                                                            aria-label="Buscar" />
                                                        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                                                    </form>
                                                </div>
                                            </nav>
                                            <div className="modal-body">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr className="warning">
                                                                <th>Código</th>
                                                                <th>Producto</th>
                                                                <th><span className="pull-right">Cant.</span></th>
                                                                <th><span className="pull-right">Precio</span></th>
                                                                <th className="text-center table-product-add">Agregar</th>
                                                            </tr>
                                                            <tr>
                                                                <td>MD-05</td>
                                                                <td>Mouse USB</td>
                                                                <td className="col-1">
                                                                    <input type="text" className="form-control form-control-sm table-alingTex"
                                                                        id="cantidad_4076" value="1" />
                                                                </td>
                                                                <td className="col-2">
                                                                    <input type="text" className="form-control form-control-sm table-alingTex"
                                                                        id="precio_venta_4076" value="9.99" />
                                                                </td>
                                                                <td className="text-center"><a className="btn btn-outline-info" href="#"
                                                                    onclick="agregar('4076')"><i className="bi bi-cart-plus"></i></a></td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                    <div className="mb-2">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination justify-content-end">
                                                                <li className="page-item disabled">
                                                                    <a className="page-link">Prev</a>
                                                                </li>
                                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





                <div className="container">
                    <div className="mt-2">
                        <div className="row">
                            <div className="row g-3">
                                <div id="resultados" className="col-md-12 table-modventas">
                                    <table className="table">
                                        <tbody>
                                            <tr className="table-secondary">
                                                <th className="text-center">CODIGO</th>
                                                <th className="text-center">CANT.</th>
                                                <th>DESCRIPCION</th>
                                                <th className="text-end">PRECIO UNIT.</th>
                                                <th className="text-end">PRECIO TOTAL</th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <td className="text-center">MD-05</td>
                                                <td className="text-center">1</td>
                                                <td>Mouse USB</td>
                                                <td className="text-end">9.99</td>
                                                <td className="text-end">9.99</td>
                                                <td className="text-center"><a href="#" onclick="eliminar('1229')"><i className="bi bi-trash danger"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-end" colspan="4">SUBTOTAL $</td>
                                                <td className="text-end">0.00</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="text-end" colspan="4">IVA (19)% $</td>
                                                <td className="text-end">0.00</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="text-end" colspan="4">TOTAL $</td>
                                                <td className="text-end">0.00</td>
                                                <td></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ModVentas;