// function service() {
//     const getAllEmpDetails = () => {
//       return fetch(
//         "http://dummy.restapiexample.com/api/v1/employees"
//         // {
//         //   method: "GET",
//         //   headers: {
//         //     "x-rapidapi-host": "asos2.p.rapidapi.com",
//         //     "x-rapidapi-key":
//         //       "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
//         //   },
//         // }
//       )
//         .then((res) => res.json())
//         .then((data) => 
//         data.empDetails))
        
//         .catch((e) => e)
//         // console.log("errorrr==>>",e))
//     };
  
//     return {
//       getAllEmpDetails,
//     };
//   }
  
//   const empDetailsService = service();
  
//   export default empDetailsService;

  function service() {
    const getAllEmpDetails = () => {
      return fetch(
        "http://dummy.restapiexample.com/api/v1/employees"
        // {
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-host": "asos2.p.rapidapi.com",
        //     "x-rapidapi-key":
        //       "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
        //   },
        // }
      )
        .then((res) => res.json())
        .then((data) => 
        data.data
        // console.log("APiData===>>",data.data)
        )
        .catch((e) => e);
    };
  
    return {
      getAllEmpDetails,
    };
  }
  
  const empDetailsService = service();
  
  export default empDetailsService;