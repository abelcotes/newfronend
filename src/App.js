
      
      <Route path="/users" exact>
          <User />
         </Route>

         <Route path="/" exact>
          <Login />
        </Route>
        
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/producto" exact>
          <Prenda />
        </Route>

        <Route path="/no-encontrada" exact>
          <PaginaNoEncontrada/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        

      </Switch>
    </BrowserRouter>
  );
}


export default App;
