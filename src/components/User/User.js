import React from 'react';
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,Spinner} from "reactstrap";
import NavbarComponents from '../shared/components/navbar/NavbarComponents';
import Footer from '../shared/components/footer/Footer';


import { logout } from '../Firebase/Firebase';
import { auth } from '../Firebase/Firebase';

const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_CUSTOMERS = 'vendedores';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      modalActualizar: false,
      modalInsertar: false,
      form: {
        _id: "",
        email: "",
        phoneNumber: "",
        address: "",
        firstName: "",
        lastName: ""
      },
      mostrarCargando: false
    };
  }

  componentDidMount() {
    this.cargarCustomers();
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

        email: "",
        phoneNumber: "",
        address: "",
        firstName: "",
        lastName: ""
      }
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    this.actualizarCustomer(dato);
    this.setState({ modalActualizar: false });
  };

  eliminar = (dato) => {
    let opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.firstName + "?");
    if (opcion) {
      this.borrarCustomer(dato._id)
    }

  };

  insertar = () => {
    let usuarioACrear = { ...this.state.form };

    this.crearCustomer(usuarioACrear);
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

  logout = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
      console.log("loggedout");
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  render() {

    return (
      <>
      <NavbarComponents />
        <Container>
          <h2>Tablero de Usuarios</h2>
          <a class="btn btn-primary" href="/login" role="button">Salir</a>
          
          <Button color="info" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <Button color="danger" onClick={logout} block>Cerrar sesión</Button>

          
        
          <Table>
            {this.state.mostrarCargando ? (
              <Spinner
                size="xl" type="grow"
                color="primary"
              />
            ) : null}
            <thead>
              <tr class="table-primary">
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dirección</th>
                <th>Telefóno</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato._id} class="table-primary">
                  <td>{dato.email}</td>
                  <td>{dato.firstName}</td>
                  <td>{dato.lastName}</td>
                  <td>{dato.address}</td>
                  <td>{dato.phoneNumber}</td>
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
            <div><h3>Actualizar Usuario {this.state.form._id}</h3></div>
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
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.firstName}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.lastName}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.address}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.phoneNumber}
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
            <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>
              <label>
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
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
      </>
    );
  }


  cargarCustomers() {
    this.setState({ mostrarCargando: true });
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`)
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


  crearCustomer(customer) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarCustomers();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  borrarCustomer(id) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarCustomers();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  actualizarCustomer(customer) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer)
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}/${customer._id}`, requestOptions)
      .then(result => result.json())
      .then(
        (result) => {
          this.cargarCustomers();
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
export default User;
