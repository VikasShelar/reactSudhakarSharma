import { useFormik } from "formik"
import React from "react"


export function FormicDemo() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
            City: '',
            Stock: false
        },
        validate:VaildateProduct,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    function VaildateProduct(FormsData){
        var errors={Name:'',Price:'',Stock:'',City:''}

        //Validating Name

        if(FormsData.Name.length==0){
            errors.Name="Name Is Required"
        }
        else {
            if(FormsData.Name.length < 4){
                errors.Name="Name to Short min 4 charcter required"
            }
            else{
                errors.Name=""
            }
        }


        //Validating Price

        if(FormsData.Price.length==0){
            errors.Price="Price is Required"
        }
        else{
            if(isNaN(FormsData.Price)){
                errors.Price="Price must be numbers"
            }
            else{
                errors.Price=""
            }
        }

        //Validating city
        if(FormsData.City =='-1'){
            errors.City="Please enter a city"
        }
        else{
            errors.City=""
        }

        return errors;
    }
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Formik Forms</h1>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Name" /></dd>
                   <dd className="text-danger">{formik.errors.Name}</dd>
                   
                    <dt>Price</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Price" /></dd>
                    <dd className="text-danger">{formik.errors.Price}</dd>

                    <dt>Stock</dt>
                    <dd>
                        <input type="checkbox" onChange={formik.handleChange} name="Stock" /><label>In Stock</label><br />
                    </dd>
                    <dd className="text-danger">{formik.errors.Stock}</dd>

                    <dt>Shipped to</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                    <option value='-1'>Select Your City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    </select>
                    
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button>Submit</button>
            </form>

        </div>
    )
}