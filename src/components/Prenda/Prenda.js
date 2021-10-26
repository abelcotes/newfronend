import React from 'react';
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,Spinner} from "reactstrap";
import NavbarComponents from '../shared/components/navbar/NavbarComponents';
import Footer from '../shared/components/footer/Footer';
import './Prenda.module.css';


const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTS = 'productos';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      modalActualizar: false,
      modalInsertar: false,
      form: {
        _id: "",
        name: "",
        code: "",
        description: "",
        price: "",
        state: ""
      },
      mostrarCargando: false
    };
  }

  componentDidMount() {
    this.cargarProducts();
  }

  mostrarModalActualizar = (dato) => {

    this.setState({ modalActualizar: true, form: dato });

  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true, form: {

        name: "",
        code: "",
        description: "",
        price: "",
        state: ""
      }
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    this.actualizarProduct(dato);
    this.setState({ modalActualizar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.code + "?");
    if (opcion) {
      this.borrarProduct(dato._id)
    }

  };

  insertar = () => {
    let usuarioACrear = { ...this.state.form };

    this.crearProduct(usuarioACrear);
    this.setState({ modalInsertar: false });

  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <body> 
      <NavbarComponents />
        <Container>
          <h2>Listado de productos</h2>
          <br />
          <Button color="info" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          
          <Table>
            {this.state.mostrarCargando ? (
              <Spinner
                size="xl" type="grow"
                color="primary"
              />
            ) : null}
            <thead>
              <tr class="table-primary">
                <th>Nombre del producto</th>
                <th>Codigo</th>
                <th>Talla</th>
                <th>Precio</th>
                <th>Disponibilidad</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato._id} class="table-primary">
                  <td>{dato.name}</td>
                  <td>{dato.code}</td>
                  <td>{dato.description}</td>
                  <td>{dato.price}</td>
                  <td>{dato.state}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="dark" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Actualizar Producto {this.state.form._id}</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form._id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre del producto:
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Codigo del producto:
              </label>
              <input
                className="form-control"
                name="code"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.code}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripcion:
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.description}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio del producto:
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Disponibilidad del producto:
              </label>
              <input
                className="form-control"
                name="state"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.state}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar
            </Button>
            <Button
              className="btn btn-dark"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <label>
                Nombre del producto:
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Codigo del producto:
              </label>
              <input
                className="form-control"
                name="code"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripcion del producto:
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio del producto:
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Disponibilidad del producto:
              </label>
              <input
                className="form-control"
                name="state"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-dark"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Footer />
      </body>
    );
  }


  cargarProducts() {
    this.setState({ mostrarCargando: true });
    fetch(`${BASE_URL}${PATH_PRODUCTS}`)
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({ data: result, mostrarCargando: false });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
        }
      )
  }


  crearProduct(product) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch(`${BASE_URL}${PATH_PRODUCTS}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarProducts();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  borrarProduct(id) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${BASE_URL}${PATH_PRODUCTS}/${id}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarProducts();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  actualizarProduct(product) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch(`${BASE_URL}${PATH_PRODUCTS}/${product._id}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarProducts();
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
export default User;
