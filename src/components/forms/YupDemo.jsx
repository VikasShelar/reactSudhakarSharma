import { useFormik } from "formik"
import React from "react"
import * as yup from "yup"

export function YupDemo() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
           VendorContact:''
        },
       validationSchema:yup.object({
        Name:yup.string().required("Name Required").min(4,"Name to short"),
        Price:yup.number().required("Price required").min(1000,"Price should be min 1000").max(10000,"Price should be 10000"),
        VendorContact:yup.string().matches(/\+91\d{10}/,'Invalid mobile').required("VendorContact Required")
       }),


        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    
       
        return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Formik Forms</h1>
                <dl>
                    <dt>Name</dt>
                    {/* <dd><input type="text" onChange={formik.handleChange} name="Name" /></dd> */}
                    <dd><input type="text" {...formik.getFieldProps("Name")} name="Name" /></dd>

                   <dd className="text-danger">{formik.errors.Name}</dd>
                   
                    <dt>Price</dt>
                    <dd><input type="number" {...formik.getFieldProps("Price")} name="Price" /></dd>
                    <dd className="text-danger">{formik.errors.Price}</dd>

                    <dt>Vendor Contact</dt>
                    <dd><input type="text" name="VendorContact" {...formik.getFieldProps("VendorContact")}/></dd>
                    <dd className="text-danger">{formik.errors.VendorContact}</dd>
                                    </dl>
                <button>Submit</button>
            </form>

        </div>
    )
}