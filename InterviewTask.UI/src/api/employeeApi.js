import axios from 'axios';

class EmployeeApi {

  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:58327/api/Employees').then(function(response) {
          resolve(Object.assign([], response));
        })
        .catch(function(error) {
          alert(error);
          reject();
        });

    });
  }
}

export default EmployeeApi;

