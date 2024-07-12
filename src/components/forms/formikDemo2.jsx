import { ErrorMessage, useFormik,Formik,Form,Field } from "formik"
import React from "react"
import * as yup from "yup"

export function FormikDemo2() {
    
          
        return (
        <div className="container-fluid">
           <Formik initialValues={{Name:'',Price:'',VendorContact:''}}
           validationSchema={yup.object(
            {Name:yup.string().required("Name Required").min(4,"Name to short"),
            Price:yup.number().min(1000,"Price shold be min 1000").max(10000,"Price shold be max 10000").required("Price Required"),
            VendorContact:yup.string().matches(/\+91\d{10}/,"Invalid Mobile").required("Mobile required")
           })} onSubmit={(values=>JSON.stringify(values))}>
           {
           form=>
             <Form className={(form.isValid)?'bg-success':'bg-warning'}>
             <dl>
                 <dt>Name</dt>
                 <dd><Field type="text" name="Name"></Field></dd>
                 <dd className="text-danger"><ErrorMessage name="Name" /></dd>
             
                 <dt>Price</dt>
                 <dd><Field type="text" name="Price"></Field></dd>
                 <dd className="text-danger"><ErrorMessage name="Price" /></dd>
             
                 <dt>VendorContact</dt>
                 <dd><Field type="text" name="VendorContact"></Field></dd>
                 <dd className="text-danger"><ErrorMessage name="VendorContact" /></dd>
                             </dl>
                             {form.isValid}
                             <button disabled={(form.isValid)?false:true}> Submit</button>
                             <button className={(form.dirty)?'d-inline':'d-none'}>Save</button>
         </Form>
        
           }
           
           </Formik>
        </div>
    )
}