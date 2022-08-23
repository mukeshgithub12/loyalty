import React from 'react'

function get_api() { 
    
    const axios = require('axios').default;
    const FormData = require('form-data');
    const form_data = new FormData();
    form_data.append('Content-Type', 'application/json');
    form_data.append('Authorization', 'Oa12f351677511255023cf14c85d95bf');

    const article =  [];
    const blank = {}
    

    const prd_api_url = 'https://preprd.zenscale.in/mm/api/get/v1/web_material_list'
    const ecom_api_url ='https://costing.zenscale.in:8095/api/customer/Get?search_param=jatin&name=&mobile=&email=' 

    const header_scale = {
        'Content-Type': 'application/json',
        'Authorization': 'i791f346229bec3b05f5867ded29c5b6'
      }
      const header_ecom = {
          'Content-Type': 'application/json',
    'Authorization': 'Oa12f351677511255023cf14c85d95bf'
}

    const load_data   = async() =>{ 
        axios.post(ecom_api_url, article,  {     
             "headers":  header_ecom
        } 
        )
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
        
        }
    
  return ( 
    <>
    <button onClick={load_data}>Load Data</button>
    </>
  )
  }

//   const response =  await 
//   fetch ('' ,{
//     mode: 'no-cors',
//     method: 'POST',
// headers: {
//     'Content-Type':'application/json',
//     'Authorization':'Oa12f351677511255023cf14c85d95bf'                
//     }   
// }
//    )
// const data  = await  response.json;
export default get_api