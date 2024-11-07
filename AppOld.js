import { useState } from "react";
import { EmployeeData } from "./EmployeeData";
import { useEffect } from "react";

// Next Assignment 
// Create pagination & Search functionality implement


function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState(0);
  const  [isUpdate, setIsUpdate] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // For search functionality
  // const recordsPerPage = 5;



  useEffect(() => {
    setData(EmployeeData);
  },[]);

  const mystyle = {
    margin: "10px"
  };

  function handleEdit(id){
    if (window.confirm("Are you sure you want to Edit this item?")) {
    const dt = data.filter(value => value.id === id)
    if (dt !== undefined){
      setIsUpdate(false);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
      setId(id);
    }
  }
  }

  function handleDelete(id){
    if (window.confirm("Are you sure you want to delete this item?")) {
      const dt = data.filter((value) => value.id != id)
      setData(dt);
    } 
  }

  function saveData(){
    const dt = [...data];
    const newObject = {
      id: EmployeeData.length + 1,
      firstName: firstName,
      lastName : lastName,
      age : age
    }
    dt.push(newObject);    
    setData(dt);
    clearData();
  }

  function updateData() {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    setData(dt);
    clearData();
    setIsUpdate(true);
  }

  function clearData() {
    setFirstName('');
    setLastName('');
    setAge('');
    setId('');
  }

  // const filteredData = data.filter(value =>
  //   value.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   value.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = EmployeeData.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(EmployeeData.length / recordsPerPage)
  // const numbers = [...Array(npage + 1).keys()].slice(1)
  // function prePage() {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function changeCPage(id) {
  //   setCurrentPage(id);
  // }

  // function nextPage() {
  //   if (currentPage < npage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  return (
    <div class="container">
      <h2>Student Data</h2>
      {/* HTML Form start */}
      <label style={mystyle}>First name:</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      ></input>
      <label style={mystyle}>Last name:</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <label style={mystyle}>Age:</label>
      <input
        class="margin-left"
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      {isUpdate ? (
        <input
          style={mystyle}
          class="btn btn-primary btn-color btn-bg-color btn-sm col-xs-2 margin-left"
          type="submit"
          value="Submit"
          onClick={() => saveData()}
        ></input>
      ) : (
        <input
          style={mystyle}
          class="btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left"
          type="submit"
          value="Update"
          onClick={() => updateData()}
        ></input>
      )}
      <input
        style={mystyle}
        class="btn btn-danger btn-color btn-bg-color btn-sm col-xs-2 margin-left"
        type="submit"
        value="Clear"
        onClick={() => clearData()}
      ></input>


      <br />
      <label style={mystyle}>Search:</label>
      <input
        type="text"
        name="searchdata"
        onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm on input change
        placeholder="Search by First or Last Name"
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.age}</td>
                <td>
                  {/* <a class="add" title="Add" data-toggle="tooltip">
                <i class="material-icons">&#xE03B;</i>
                              </a> */}
                  <a
                    class="edit"
                    title="Edit"
                    data-toggle="tooltip"
                    onClick={() => handleEdit(value.id)}
                  >
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    onClick={() => handleDelete(value.id)}
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <nav>
<ul className="pagination">
  <li className="page-item">
    <a href="#" className="page-link" onClick={prePage}>Prev</a>
  </li>
  {numbers.map((n, i) => (
    <li className={`pageitem ${currentPage === n ? 'active' : ''}`} key={i}>
      <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
    </li>
  ))}
  <li className="page-item">
    <a href="#" className="page-link" onClick={nextPage}>Next</a>
  </li>
</ul>
</nav> */}
    </div>
  );
}
export default App;

